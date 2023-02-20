<template>
  <button
    :disabled="isDisabled"
    :class="{ isntDisabled: !isDisabled, buttonLoading: isLoading }"
    class="button"
  >
    <span>{{ isLoading ? "" : name }}</span>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    name: String,
    isLoading: Boolean,
    isDisabled: Boolean,
  },
};
</script>

<style scoped>
@keyframes spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}

.button {
  min-width: 35px;
  height: 35px;
  padding: 8px;
  border: 1px solid;
  border-radius: 3px;
  position: relative;
  font-size: 16px;
}

.isntDisabled {
  background: #1472c9;
  color: white;
  border: #1472c9;
}

.isntDisabled:hover {
  transition: 0.5s;
  background: #1487c9;
  cursor: pointer;
}

.buttonLoading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spinner 1s ease infinite;
}
</style>
