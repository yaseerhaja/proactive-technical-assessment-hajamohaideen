import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect } from 'vitest'
import ItemList from '~/components/Application/Overview/ListOrGrid.vue'

const mockItems: OverviewItem[] = [
  { id: 1, name: 'Item 1', image: 'item1.jpg' },
  { id: 2, name: 'Item 2', image: 'item2.jpg' },
  { id: 3, name: 'Item 3', image: 'item3.jpg' },
]

describe('itemList.vue', () => {
  it('renders correctly with items', () => {
    const wrapper = mount(ItemList, {
      props: {
        items: mockItems,
        to: '/items',
        containerClass: 'test-class',
        isGrid: true,
      },
      global: {
        components: {
          NuxtLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.exists()).toBe(true)

    const cards = wrapper.findAll('ucard')
    expect(cards.length).toBe(mockItems.length)

    mockItems.forEach((item, index) => {
      const card = cards.at(index)
      expect(card?.text()).toContain(item.name)
      expect(card?.find('img').attributes('src')).toBe(item.image)
    })

    const link = wrapper.findComponent(RouterLinkStub)
    expect(link.exists()).toBe(true)
    expect(link.props().to).toBe(`${wrapper.props().to}/1`) // First item check
  })

  it('applies grid classes when isGrid is true', () => {
    const wrapper = mount(ItemList, {
      props: {
        items: mockItems,
        to: '/items',
        containerClass: 'test-class',
        isGrid: true,
      },
      global: {
        components: {
          NuxtLink: RouterLinkStub,
        },
      },
    })

    const cards = wrapper.findAll('ucard')
    cards.forEach((card) => {
      expect(card.classes()).toContain('p-4')
      expect(card.classes()).toContain('w-full')
    })
  })

  it('renders the container class correctly', () => {
    const wrapper = mount(ItemList, {
      props: {
        items: mockItems,
        to: '/items',
        containerClass: 'test-class',
        isGrid: false,
      },
      global: {
        components: {
          NuxtLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.find('div').classes()).toContain('list-grid-container')
  })

  it('does not render if items is empty', () => {
    const wrapper = mount(ItemList, {
      props: {
        items: [],
        to: '/items',
        containerClass: 'test-class',
        isGrid: false,
      },
      global: {
        components: {
          NuxtLink: RouterLinkStub,
        },
      },
    })

    const cards = wrapper.findAll('ucard')
    expect(cards.length).toBe(0)
  })
})
