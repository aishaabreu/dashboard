import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('Contém data e hora atual', () => {
    const datetime = new Date();
    const now = datetime.toLocaleDateString() + ' ' + datetime.toLocaleTimeString();
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toMatch(now)
  })
  it('Comtém menu de navegação', () => {
    const menu = {
        label: 'Descrição do Menu',
        path: '/',
        icon: 'dashboard-icon',
        tag: 'Tag do Menu'
    }
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toMatch(menu.label)
    expect(wrapper.text()).toMatch(menu.tag)
  })
})
