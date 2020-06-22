import { shallowMount, Wrapper } from "@vue/test-utils";
import ProductForm from "@/containers/product-form/ProductForm.vue";

describe("ProductForm.vue", () => {
  function getComponent() {
    const wrapper: Wrapper<any> = shallowMount(ProductForm, {
      mocks: {
        $v: {
          productData: {
            name: { $error: false },
            brand: { $error: false },
            id: { $error: false },
            price: { $error: false },
            $invalid: false
          }
        }
      }
    });

    return { wrapper };
  }

  it("should render", () => {
    expect(typeof ProductForm).toBeTruthy();
  });

  it("should NOT allow the user the change the product id", () => {
    const { wrapper } = getComponent();
    const productId = wrapper.find("#pid");
    wrapper.setProps({
      editMode: false
    });
    expect(productId.attributes("disabled")).toBeUndefined();
  });
});
