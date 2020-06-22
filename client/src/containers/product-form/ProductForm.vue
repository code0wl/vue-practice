<template>
  <fieldset @keyup="checkValidations($v.productData.$invalid)">
    <label for="pid" :class="{ invalid: $v.productData.id.$error }">
      Product Id *
      <input
        :disabled="editMode || previewMode"
        type="text"
        id="pid"
        name="pid"
        @input="$v.productData.id.$touch()"
        v-model="productData.id"
      />
    </label>

    <label for="pname" :class="{ invalid: $v.productData.name.$error }">
      Product name *
      <input
        :disabled="previewMode"
        type="text"
        id="pname"
        name="pname"
        @input="$v.productData.name.$touch()"
        v-model="productData.name"
      />
    </label>

    <label for="bname" :class="{ invalid: $v.productData.brand.$error }">
      Brand *
      <input
        :disabled="previewMode"
        type="text"
        id="bname"
        name="bname"
        @input="$v.productData.brand.$touch()"
        v-model="productData.brand"
      />
    </label>

    <label for="pprice" :class="{ invalid: $v.productData.price.$error }">
      Price *
      <input
        :disabled="previewMode"
        type="text"
        id="pprice"
        name="pprice"
        @input="$v.productData.price.$touch()"
        v-model="productData.price"
      />
    </label>
  </fieldset>
</template>

<script lang="ts">
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default Vue.extend({
  props: {
    editMode: Boolean,
    product: Object,
    previewMode: Boolean
  },
  methods: {
    checkValidations(e: boolean) {
      this.$emit("isValid", e);
    }
  },
  validations: {
    productData: {
      name: { required },
      id: { required },
      brand: { required },
      price: { required }
    }
  },
  data() {
    return {
      productData: this.product ? { ...this.product } : {}
    };
  },
  created() {
    this.$emit("formData", this.productData);
    this.checkValidations(true);
  }
});
</script>

<style lang="scss">
.invalid {
  color: red;
  input {
    border: 1px solid red;
    background: pink;
  }
}
</style>
