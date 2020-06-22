import { mount } from "@vue/test-utils";
import Modal from "@/components/modal/Modal.vue";

describe("Component", () => {
  test("should render", () => {
    const wrapper = mount(Modal);
    expect(wrapper).toBeTruthy();
  });
});
