import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Header from '~/components/Application/Header/Header.vue'

describe('applicationHeader.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Header)

    const header = wrapper.find('header')
    expect(header.exists()).toBe(true)

    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)

    const ul = wrapper.find('ul')
    expect(ul.exists()).toBe(true)

    const link = wrapper.find('applicationheaderlink')
    expect(link.exists()).toBe(true)
  })

  it('applies correct classes for dark mode', () => {
    const wrapper = mount(Header, {
      props: {
        darkMode: true,
      },
    })

    const header = wrapper.find('header')
    expect(header.classes()).toContain('dark:bg-zinc-700')
    expect(header.classes()).toContain('dark:border-b-zinc-600')
  })

  it('renders the correct label for the ApplicationHeaderLink', () => {
    const wrapper = mount(Header)
    const link = wrapper.find('applicationheaderlink')
    expect(link.attributes()).contains({ to: '/', label: 'Home' })
  })
})
