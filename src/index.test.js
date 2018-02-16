import { mount } from '@vue/test-utils'
import YoutubeEmbedLite from './'

describe('Component', () => {
  test('it works', () => {
    const wrapper = mount(YoutubeEmbedLite)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
