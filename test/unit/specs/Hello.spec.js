import Vue from 'vue'
import Index from '@/pages/common/index.vue'

describe('index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Index)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Something awesome is coming')
  })
})
