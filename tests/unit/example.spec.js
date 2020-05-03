import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TheChatContainer from '@/components/TheChatContainer.vue'

describe('HelloWorld.vue', () => {
  it('renders data.chatName when updated', () => {
    const chatName = 'new message';
    const wrapper = shallowMount(TheChatContainer, {
      data: () => { return { chatName } }
    });
    expect(wrapper.text()).to.include(chatName);
  })
})
