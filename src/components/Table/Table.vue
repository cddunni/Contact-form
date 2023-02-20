<template>
  <div class="table__wrapper">
    <table class="table--secondary w-full text-gray-200">
      <table-header
        :sticky-header="stickyHeader"
        @sortTable="sortBy = $event"
        :headers="tableHeaders"
      />
      <tbody>
        <tr v-if="!tableData.length">
          <td
            class="border-b-[1px] border-gray-100 relative overflow-hidden text-ellipsis text-sm capitalize px-5 py-1 text-center"
            :colspan="tableHeaders.length"
          >
            No data available
          </td>
        </tr>
        <template v-else v-for="(item, index) in sortedData">
          <tr
            @click="toggleExpanded(index)"
            class="h-[60px] border-b-[1px] border-gray-100 relative"
            :key="item[keyValue] || item.id || index"
          >
            <slot name="table-row" :item="item" :index="index"></slot>
          </tr>
          <transition
            :key="`${item.id || index}+'animation'`"
            name="slide-fade"
          >
            <tr class="table__row-details border-gray-200">
              <td></td>
              <slot name="table-details" :item="item"></slot>
            </tr>
          </transition>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script src="./table.js"></script>
<style src="" lang=""></style>
