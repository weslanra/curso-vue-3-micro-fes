<script setup lang="ts">
// import Header from "remote/Header";
import { defineAsyncComponent } from "vue";
import { useCounterStore } from "@/stores/counter";
import { computed } from "vue";

const Header = defineAsyncComponent(() => import("remote/Header"));

const store = useCounterStore();
const addOne = () => {
  store.count++;
};
const count = computed(() => store.count);
</script>
<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <Header></Header>
    <div class="mt-10">Count: {{ count }}</div>
    <div>
      <button
        @click="addOne"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add One
      </button>
    </div>
    <div class="mt-12">
      <router-view></router-view>
    </div>
  </div>
</template>
