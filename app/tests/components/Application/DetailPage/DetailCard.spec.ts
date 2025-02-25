import { UBadge, UCard, UContainer, UDivider } from '@nuxt/ui' // Ensure Nuxt UI components are registered properly
import { mount } from '@vue/test-utils'
import { describe, expect } from 'vitest'
import DetailsCard from '~/components/Application/DetailPage/DetailCard.vue'

describe('detailsCard.vue', () => {

  it('renders key-value pairs correctly', () => {
    const details = [{ Name: 'Alice', Role: 'Developer' }]

    const wrapper = mount(DetailsCard, {
      props: { title: 'Test', details },
      global: {
        components: { UCard, UBadge, UContainer, UDivider },
      },
    })

    expect(wrapper.text()).toContain('Name :')
    expect(wrapper.text()).toContain('Alice')
    expect(wrapper.text()).toContain('Role :')
    expect(wrapper.text()).toContain('Developer')
  })

  it('renders empty state correctly', () => {
    const wrapper = mount(DetailsCard, {
      props: { title: 'Empty State', details: [] },
      global: {
        components: { UCard, UBadge, UContainer, UDivider },
      },
    })

    expect(wrapper.find('u-container').exists()).toBe(false)
  })
})
