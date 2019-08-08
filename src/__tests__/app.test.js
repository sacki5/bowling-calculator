import { mount } from '@vue/test-utils';
import app from '../App.vue';

let wrapper;

beforeEach(() => {
    wrapper = mount(app, { stubs: ['router-view'] });
});

it('should mount app without errors', () => {
    expect(wrapper.isVueInstance()).toBe(true);
});
