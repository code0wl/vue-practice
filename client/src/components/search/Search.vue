<template>
  <form role="search" id="product-catalog" action="#" method="post">
    <fieldset>
      <input
        class="search"
        v-model="query"
        @keyup="$emit('query', query)"
        spellcheck="false"
        type="search"
        id="search"
        placeholder="Search Products"
      />
    </fieldset>
  </form>
</template>

<script lang="ts">
export default {
  data: () => ({
    query: ""
  })
};
</script>

<style lang="scss">
@import url("./Search.scss");
</style>
