<template>
  <thead
    class="border border-gray-100 w-full text-gray-200"
    :class="{ sticky: stickyHeader }"
  >
    <tr>
      <th
        v-for="(header, index) in headers"
        :key="index"
        class="text-left p-4 whitespace-nowrap"
      >
        <span
          :style="{ visibility: header.text === 'empty' ? 'hidden' : null }"
          :class="[header.align, 'font-semibold']"
          class="flex items-center gap-4"
        >
          {{ header.text }}
          <svg
            @click="$emit('sortTable', header.value)"
            v-if="header.sortable"
            class="cursor-pointer"
            width="8"
            height="13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.323 8.01L4 10.683l2.678-2.671.822.822-3.5 3.5-3.5-3.5.823-.822zM1.323 4.99L4 2.317l2.678 2.671.822-.822L4 .667l-3.5 3.5.823.822z"
              fill="#A7A7A7"
            />
          </svg>
        </span>
      </th>
    </tr>
  </thead>
</template>

<script src="./table-header.js"></script>

<style lang="" src="" scoped></style>
