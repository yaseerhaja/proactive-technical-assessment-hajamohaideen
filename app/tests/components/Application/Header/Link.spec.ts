import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Link from '~/components/Application/Header/Link.vue' // Adjust the path if needed

describe('yourComponent.vue', () => {
  it('renders correctly with the passed props', () => {
    const wrapper = mount(Link, {
      props: {
        to: '/example-path',
        label: 'Click Me',
      },
    })

    const button = wrapper.find('ubutton')

    expect(button.exists()).toBe(true)

    expect(button.attributes()).toStrictEqual({
      color: 'gray',
      label: 'Click Me',
      to: '/example-path',
      variant: 'ghost',
    })
  })
})
