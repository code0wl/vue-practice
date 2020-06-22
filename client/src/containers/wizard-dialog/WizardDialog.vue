<template>
  <div>
    <!-- Staging (step1) -->
    <Modal v-if="addDialog && !previewMode">
      <template v-if="!previewMode" v-slot:header
        >Add Product information</template
      >
      <template v-slot:body>
        <form @submit.prevent>
          <ProductForm
            @isValid="checkFormValidity($event)"
            @formData="prepareAddFormData($event)"
            :product="{}"
          ></ProductForm>
          <button
            :disabled="isFormValid"
            class="modal-default-button"
            @click="togglePreviewMode()"
          >
            Next
          </button>
          <button class="modal-default-button" @click="clearForm()">
            Cancel
          </button>
        </form>
      </template>
    </Modal>

    <!-- Commit (step2) -->
    <Modal v-if="addFormData && previewMode">
      <template v-if="previewMode" v-slot:header
        >Review Product information</template
      >
      <template v-slot:body>
        <form @submit.prevent>
          <ProductForm :previewMode="true" :product="addDialog"></ProductForm>
          <button
            class="modal-default-button"
            @click="
              addProduct(addFormData);
              togglePreviewMode();
              clearForm();
            "
          >
            Save
          </button>
          <button class="modal-default-button" @click="togglePreviewMode()">
            Back
          </button>
        </form>
      </template>
    </Modal>

    <!-- Edit -->
    <Modal v-if="editDialog">
      <template v-slot:header>Edit product</template>
      <template v-slot:body>
        <form method="PUT" @submit.prevent>
          <ProductForm
            @isValid="checkFormValidity($event)"
            @formData="prepareEditFormData($event)"
            :editMode="true"
            :product="editDialog"
          ></ProductForm>
          <button
            :disabled="isFormValid"
            class="modal-default-button"
            @click="
              updateProduct(editFormData);
              clearForm();
            "
          >
            Save
          </button>
          <button class="modal-default-button" @click="clearForm()">
            Cancel
          </button>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { mapActions } from "vuex";
import Modal from "@/components/modal/Modal.vue";
import ProductForm from "@/containers/product-form/ProductForm.vue";
import { Product } from "../../types/product";

export default Vue.extend({
  data: () => ({
    product: {},
    isFormValid: false,
    previewMode: false,
    editFormData: {},
    addFormData: {}
  }),
  props: {
    addDialog: Object as PropType<Product>,
    editDialog: Object as PropType<Product>
  },
  components: {
    Modal,
    ProductForm
  },
  methods: {
    clearForm() {
      this.editFormData = {};
      this.addFormData = {};
      this.isFormValid = false;
      this.previewMode = false;
      this.$emit("hide");
    },
    togglePreviewMode() {
      this.previewMode = !this.previewMode;
    },
    checkFormValidity(e: boolean) {
      this.isFormValid = e;
    },
    ...mapActions({
      updateProduct: "updateProduct",
      addProduct: "addProduct"
    }),
    prepareAddFormData(data: Product) {
      this.addFormData = data;
    },
    prepareEditFormData(data: Product) {
      this.editFormData = data;
    }
  }
});
</script>
