<template>
  <div
    class="flex items-center py-2 px-4 rounded-[20px] font-normal text-16 text-primary-black cursor-pointer"
    @click="$router.go(-1)"
  >
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 15L1 8L8 1"
        stroke="#060628"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span class="hidden sm:block ml-3">Back</span>
  </div>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style></style>
