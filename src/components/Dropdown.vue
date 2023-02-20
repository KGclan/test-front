<template>
  <select class="dropdown" @change="onChangeHandler($event)">
    <option
      class="dropdownItem"
      v-for="option in options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { EssencesTitles } from "@/types";

import { useEssenceState } from "../store/essences";
import essenceTypeCheker from "../utils/essenceTypeHandler";

export default defineComponent({
  name: "CustomButton",
  props: {
    options: {
      type: Object as PropType<EssencesTitles>,
      required: true,
    },
  },
  setup() {
    const essenceStore = useEssenceState();

    function onChangeHandler(event: Event) {
      essenceStore.setSelectedEssence(
        (event.target as HTMLSelectElement).value
      );
      essenceTypeCheker("dropdown");
    }

    return { onChangeHandler };
  },
});
</script>

<style scoped>
.dropdown {
  height: 35px;
  padding: 6px;
  border-radius: 3px;
  background: #ebebeb;
}

.dropdownItem {
  height: 35px;
  background: #ebebeb;
}
</style>
