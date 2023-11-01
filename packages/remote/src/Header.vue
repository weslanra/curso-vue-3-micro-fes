<script setup lang="ts">
import { useCounterStore } from "host/counterStore";
import { ComputedRef, computed } from "vue";

let count: ComputedRef<any> = computed(() => 0);

try {
  const store = useCounterStore();
  count = computed(() => store.count);
} catch (e) {
  console.log(
    "[$Header] Impossível integrar a store, pinia não está instalado"
  );
}
</script>
<template>
  <div class="text-3x1 bg-blue-900 text-white p-5 flex">
    <div class="font-bold mr-5">Header</div>
    <div class="mr-5">|</div>
    <div class="flex gap-3 flex-grow">
      <router-link to="/" class="mr-3">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div>{{ count }}</div>
  </div>
</template>
