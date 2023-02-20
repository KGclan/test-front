<template>
  <ul class="essenceList" v-if="essences?.length">
    <li class="listItem" v-for="essence in essences" :key="essence.id">
      <p>{{ `${essence.id}` }}</p>
      <p>{{ `${essence.name}` }}</p>
    </li>
  </ul>
  <ul class="essenceList" v-else>
    <li class="listItem">
      <p v-if="isLoading">Загрузка данных...</p>
      <p v-else>Данных нет, но вы можете их добавить.</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Essence } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "EssenceList",
  props: {
    essences: {
      type: Array as PropType<Essence[]>,
      require: true,
    },
    isLoading: {
      type: Boolean as PropType<boolean>,
      require: true,
    },
  },
});
</script>

<style scoped>
.essenceList {
  width: 90%;
  height: 70%;
  padding: 20px;
  overflow-x: auto;
  list-style: none;
  display: flex;
  row-gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid silver;
}

.listItem {
  display: flex;
  font-size: 16px;
  gap: 15px;
}
</style>
