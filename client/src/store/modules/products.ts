import { Product } from "../../types/product";

interface ProductState {
  products: Product[];
}

const state: ProductState = {
  products: []
};

const mutations = {
  SET_PRODUCTS(state: ProductState, products: Product[]) {
    state.products = products;
  },
  DELETE_PRODUCT(state: ProductState, id: string) {
    state.products = state.products.filter(
      (product: Product) => product.id !== id
    );
  },
  ADD_PRODUCT(state: ProductState, product: Product) {
    state.products.splice(0, 0, product);
  },
  UPDATE_PRODUCT(state: ProductState, newProduct: Product) {
    state.products = state.products.map((product: Product) =>
      product.id !== newProduct.id ? product : newProduct
    );
  }
};

const actions = {
  setProducts: async ({ commit }: any) => {
    const promise = await fetch("//localhost:4200/products");
    const body = await promise.json();
    const transformedProducts = body.map(
      ({ id, name, price, brand }: Product) => ({
        id,
        name,
        brand,
        price
      })
    );

    commit("SET_PRODUCTS", transformedProducts);
  },
  deleteProduct: async ({ commit }: any, { id }: Product) => {
    await fetch(`//localhost:4200/products/${id}`, {
      method: "DELETE"
    });

    commit("DELETE_PRODUCT", id);

    // Silly saga side effect for notification
    alert(`Deleted product with id: ${id}`);
  },
  updateProduct: async ({ commit }: any, product: Product) => {
    await fetch(`//localhost:4200/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(product)
    });

    commit("UPDATE_PRODUCT", product);

    // Silly saga side effect for notification
    alert(`Editted product with id: ${product.id}`);
  },
  addProduct: async ({ commit }: any, product: Product) => {
    await fetch(`//localhost:4200/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(product)
    });

    commit("ADD_PRODUCT", product);

    // Silly saga side effect for notification
    alert(`Added product with id: ${product.id}`);
  }
};

const getters = {
  products: ({ products }: ProductState) => products
};

export default {
  state,
  mutations,
  actions,
  getters
};
