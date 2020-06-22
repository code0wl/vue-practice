<template>
  <main>
    <WizardDialog :addDialog="addDialog" @hide="addDialog = null"></WizardDialog>
    <WizardDialog :editDialog="editDialog" @edit="editProduct($event)" @hide="editDialog = null"></WizardDialog>

    <Search @query="setQuery($event)"></Search>

    <button @click="addProduct()">Add product</button>

    <table class="product-table">
      <tr class="product-table__table-header">
        <th v-for="(header, index) in headers" :key="index" @click="sortTable(header)">{{ header }}</th>
      </tr>

      <tr v-if="!filteredProducts.length">
        <td colspan="5">No products found (╯°□°)╯︵ ┻━┻</td>
      </tr>

      <TableRowItem
        @delete="deleteProduct(item)"
        @edit="editProduct(item)"
        :item="item"
        v-for="(item, index) in filteredProducts"
        :key="index"
      ></TableRowItem>
    </table>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import Search from "@/components/search/Search.vue";
import TableRowItem from "@/components/table-row-item/TableRowItem.vue";
import WizardDialog from "@/containers/wizard-dialog/WizardDialog.vue";

import { safeIncludesLowerCase } from "@/utils/includes";
import { Product } from "@/types/product/index";

export default Vue.extend({
  components: {
    Search,
    TableRowItem,
    WizardDialog
  },
  data: () => ({
    addDialog: null as Product | null,
    editDialog: null as Product | null,
    query: "",
    sortDirectionAscending: false,
    sortColumn: "Name",
    headers: ["Id", "Name", "Brand", "Price", "Actions"]
  }),
  computed: {
    ...mapGetters(["products"]),
    filteredProducts() {
      return !this.query
        ? this.products
        : this.products.filter(({ name, brand, id }: Product) =>
            safeIncludesLowerCase([name, brand, id], this.query)
          );
    }
  },
  methods: {
    ...mapActions(["setProducts", "deleteProduct"]),
    sortTable: function(col: string) {
      if (this.sortColumn === col) {
        this.sortDirectionAscending = !this.sortDirectionAscending;
      } else {
        this.sortDirectionAscending = true;
        this.sortColumn = col;
      }

      const ascending: boolean = this.sortDirectionAscending;

      this.products.sort((a: any, b: any) => {
        const column = col.toLowerCase();
        return a[column] > b[column]
          ? ascending
            ? 1
            : -1
          : ascending
          ? -1
          : 1;
      });
    },
    editProduct(product: Product) {
      this.editDialog = product;
    },
    setQuery(query: string) {
      this.query = query;
    },
    addProduct() {
      const product: Product = {
        id: "",
        brand: "",
        name: "",
        price: ""
      };
      this.addDialog = product;
    }
  },
  created() {
    // @ts-ignore
    this.setProducts();
  }
});
</script>

<style lang="scss">
@import url("./ProductTable.scss");
</style>
