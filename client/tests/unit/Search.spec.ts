import { shallowMount } from "@vue/test-utils";
import Search from "@/components/Search/Search.vue";

describe("Search.vue", () => {
  it("has a created hook", () => {
    expect(typeof Search).toBeTruthy();
  });

  it("should set the correct default data", () => {
    const query = "";
    const wrapper = shallowMount(Search, {
      propsData: { query }
    });
    expect(wrapper.text()).toMatch(query);
  });

  it("should emit query on keyup", () => {
    const wrapper = shallowMount(Search);
    wrapper.find("input").trigger("keyup");
    expect(wrapper.emitted("query")).toHaveLength(1);
  });
});
