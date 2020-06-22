import { shallowMount } from "@vue/test-utils";
import TableRowItem from "@/components/table-row-item/TableRowItem.vue";
import { itemMock } from "../mock/product.mock";

describe("TableRowItem.vue", () => {
  it("should render", () => {
    expect(typeof TableRowItem).toBeTruthy();
  });

  it("should set the correct default data", () => {
    const item = itemMock;
    const wrapper = shallowMount(TableRowItem, {
      propsData: { item }
    });

    expect(wrapper.text()).toContain(item.name);
  });

  it("should emit delete on click", () => {
    const wrapper = shallowMount(TableRowItem);
    wrapper.find(".delete").trigger("click");
    expect(wrapper.emitted("delete")).toHaveLength(1);
  });

  it("should emit edit on click", () => {
    const wrapper = shallowMount(TableRowItem);
    wrapper.find(".edit").trigger("click");
    expect(wrapper.emitted("edit")).toHaveLength(1);
  });
});
