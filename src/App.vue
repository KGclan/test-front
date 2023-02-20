<template>
  <div class="wrapper">
    <Dropdown :options="essenceStore.essencesTitles" />
    <EssenceList
      :essences="essenceTypeHandler()"
      :isLoading="essenceStore.essenceListIsLoading"
    />
    <CustomButton
      name="Создать"
      :isDisabled="
        essenceStore.selectedEssence === essenceStore.essencesTitles.notSelected
          ? true
          : false
      "
      :isLoading="essenceStore.essenceIsAdding"
      @click="essenceTypeHandler('button')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useEssenceState } from "./store/essences";
import essenceTypeHandler from "./utils/essenceTypeHandler";
import CustomButton from "./components/CustomButton.vue";
import Dropdown from "./components/Dropdown.vue";
import EssenceList from "./components/EssenceList.vue";

export default defineComponent({
  name: "App",
  components: {
    CustomButton,
    Dropdown,
    EssenceList,
  },
  setup() {
    const essenceStore = useEssenceState();

    return { essenceStore, essenceTypeHandler };
  },
});
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

p {
  margin: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
