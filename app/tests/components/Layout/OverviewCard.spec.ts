import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import OverviewCard from '~/components/Layout/OverviewCard.vue' // Adjust path to your component

describe('overviewCard.vue', () => {
  it('renders the image with correct src and alt attributes', async () => {
    const wrapper = mount(OverviewCard, {
      props: {
        id: '123',
        imageSrc: 'image.jpg',
        imageAlt: 'Sample Image',
        to: '/some-path',
      },
    })

    const image = wrapper.find('nuxtimg')

    expect(image.exists()).toBe(true)
    expect(image.attributes()).toMatchObject({
      alt: 'Sample Image',
      class: 'overview-image object-cover rounded-md transition-opacity duration-500 opacity-0',
      src: 'image.jpg',
    })
  })

  it('changes opacity after image is loaded', async () => {
    const wrapper = mount(OverviewCard, {
      props: {
        id: '123',
        imageSrc: 'image.jpg',
        imageAlt: 'Sample Image',
        to: '/some-path',
      },
    })

    const image = wrapper.find('nuxtimg')

    expect(image.classes()).toStrictEqual(
      [
        'overview-image',
        'object-cover',
        'rounded-md',
        'transition-opacity',
        'duration-500',
        'opacity-0',
      ],
    )
  })

  it('renders NuxtLink with the correct to prop', () => {
    const wrapper = mount(OverviewCard, {
      props: {
        id: '123',
        imageSrc: 'image.jpg',
        imageAlt: 'Sample Image',
        to: '/some-path',
      },
    })

    const link = wrapper.find('nuxtlink')

    expect(link.exists()).toBe(true)

    expect(link.attributes()).toMatchObject({
      to: '/some-path',
    })
  })

  it('renders UCard correctly', () => {
    const wrapper = mount(OverviewCard, {
      props: {
        id: '123',
        imageSrc: 'image.jpg',
        imageAlt: 'Sample Image',
        to: '/some-path',
      },
    })

    const card = wrapper.find('ucard')

    expect(card.exists()).toBe(true)

    expect(card.classes()).toContain('overview-card')
  })
})
