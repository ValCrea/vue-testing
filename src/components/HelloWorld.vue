<script setup lang="ts">
export interface Props {
  msg?: string;
}

const props = withDefaults(defineProps<Props>(), {
  msg: "Hello World",
});
</script>

<template>
  <p>{{ props.msg }}</p>
</template>

<style scoped></style>
