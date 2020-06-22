<template>
  <tr class="table-row">
    <td v-for="property in item" :key="property.id">{{ property }}</td>
    <td>
      <button class="delete" @click="$emit('delete')">🗑️</button>
      <button class="edit" @click="$emit('edit')">✏️</button>
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="scss">
.table-row:nth-child(even) {
  background: #eee;
}
</style>
