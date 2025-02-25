import PageSection from '@/components/PageSection.vue'
import { mount } from '@vue/test-utils'
import { describe, expect } from 'vitest'

describe('pageSection.vue', () => {
  it('renders the title prop correctly', () => {
    const wrapper = mount(PageSection, {
      props: { title: 'Test Title' },
    })

    expect(wrapper.find('h2').text()).toBe('Test Title')
  })

  it('renders slot content', () => {
    const wrapper = mount(PageSection, {
      props: { title: 'Test Title' },
      slots: {
        default: '<p>Slot content here</p>',
      },
    })

    expect(wrapper.find('main').html()).toContain('Slot content here')
  })

  it('has the correct structure and classes', () => {
    const wrapper = mount(PageSection, {
      props: { title: 'Styled Title' },
    })

    expect(wrapper.find('section').classes()).toContain('rounded')
    expect(wrapper.find('section').classes()).toContain('shadow')
  })
})
