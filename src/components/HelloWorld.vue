<script setup lang="ts">
import { ref } from "vue";

export interface Props {
  msg?: string;
}

const props = withDefaults(defineProps<Props>(), {
  msg: "Hello World",
});

const count = ref(0);
</script>

<template>
  <div>
    <p>{{ props.msg }}</p>
    <p>Clicked: {{ count }}</p>
    <button @click="count++">Click</button>
  </div>
</template>

<style scoped></style>
