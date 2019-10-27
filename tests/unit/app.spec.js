import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('Contém data e hora atual', () => {
    const datetime = new Date();
    const now = datetime.toLocaleDateString() + ' ' + datetime.toLocaleTimeString();
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toMatch(now)
  })
})
