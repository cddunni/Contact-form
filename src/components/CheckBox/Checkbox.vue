<template>
  <!-- <ValidationProvider -->
  <div
    tag="div"
    class="checkbox__wrapper relative items-center cursor-pointer inline-block"
    :rules="isRequired ? { required: { allowFalse: !isRequired } } : ''"
  >
    <label :for="id" class="checkbox">
      <input
        :disabled="disabled"
        :value="val || value"
        v-model="checked"
        @change="toggle"
        :id="id"
        type="checkbox"
      />
      <span class="check-mark"></span>
      <slot>{{ placeholder }}</slot>
    </label>
    <!-- <span v-bind="ariaMsg" class="checkbox__errors">{{ errors[0] }}</span> -->
    <!-- </ValidationProvider> -->
  </div>
</template>

<script src="./checkbox.js"></script>
<style lang="" scoped src="./checkbox.css"></style>
