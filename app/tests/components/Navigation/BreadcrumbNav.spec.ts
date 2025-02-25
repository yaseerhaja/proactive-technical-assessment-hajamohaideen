import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BreadcrumbComponent from '~/components/Navigation/BreadcrumbNav.vue'

describe('breadcrumbComponent.vue', () => {
  it('renders breadcrumb links correctly', () => {
    const mockLinks = [
      { label: 'Home', icon: 'home', to: '/' },
      { label: 'Products', icon: 'box', to: '/products' },
      { label: 'Shoes', icon: 'shoe', to: '/products/shoes' },
    ]

    const wrapper = mount(BreadcrumbComponent, {
      props: { links: mockLinks },
    })

    expect(wrapper.exists()).toBe(true)

    const breadcrumb = wrapper.findComponent('ubreadcrumb')
    expect(breadcrumb.exists()).toBe(true)

    expect(breadcrumb.attributes('links')).toMatchObject(mockLinks.toString())
  })
})
