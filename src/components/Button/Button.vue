<template>
  <button
    type="submit"
    class="bg-green hover:bg-[#1ecaabea] text-white flex justify-center py-3 px-4 text-16 transition ease-in-out cursor-pointer duration-500 rounded"
    :class="classes"
    loading="loading"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot>My Button</slot>
  </button>
</template>

<script src="./button.js"></script>
<style src="">

</style>
