import { mount } from '@vue/test-utils'
import YoutubeEmbedLight from './'

describe('Component', () => {
  test('it works', () => {
    const wrapper = mount(YoutubeEmbedLight)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
