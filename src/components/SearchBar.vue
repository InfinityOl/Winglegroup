<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      placeholder="Search users..."
    >
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  margin-bottom: 2rem;

  input {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: #646cff;
    }
  }
}
</style>