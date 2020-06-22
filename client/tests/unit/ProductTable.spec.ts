import ProductTable from "@/containers/product-table/ProductTable.vue";
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("ProductTable.vue", () => {
  function getActions() {
    const actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    const store = new Vuex.Store({
      actions
    })

    return { actions, store };
  }

  it("should render", () => {
    expect(typeof ProductTable).toBeTruthy();
  });

  // Todo Test actions

});
