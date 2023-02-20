<template>
  <div tabindex="-1" ref="wrapper" class="relative mb-4">
    <label class="text-grey mb-1 block text-sm">{{ title }}</label>
    <span class="relative rounded">
      <button
        ref="dropdown_btn"
        type="button"
        :class="{
          'px-4 py-3 bg-transparent relative': type === 'icon',
          'h-[48px] text-sm rounded bg-green_light flex items-center justify-between w-full px-4 py-3':
            type !== 'icon',
        }"
        @click="!loading && (showDropdown = !showDropdown)"
        :disabled="disabled"
        aria-has-popup="true"
      >
        <template v-if="type !== 'icon'"
          >{{ value || defaultText }}
          <svg
            class="dropdown__icon absolute right-3 text-lg"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.322 5.01L7 7.684 9.678 5.01l.822.822-3.5 3.5-3.5-3.5.822-.822z"
              fill="#A7A7A7"
            />
          </svg>
        </template>
        <svg
          v-if="type === 'icon'"
          class="translate-y-[50%] left-[46%]"
          width="4"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.912 9a1.973 1.973 0 01-1.971 1.956C.87 10.956-.015 10.069 0 9a1.95 1.95 0 011.955-1.956A1.96 1.96 0 013.912 9zm0 7.044A1.97 1.97 0 011.956 18 1.95 1.95 0 010 16.044a1.95 1.95 0 011.956-1.956c1.07 0 1.94.871 1.956 1.956zM1.956 3.912a1.96 1.96 0 001.956-1.956A1.96 1.96 0 001.956.001 1.95 1.95 0 000 1.956a1.95 1.95 0 001.956 1.956z"
            fill="#A7A7A7"
            :class="{ active: showDropdown }"
          />
        </svg>
      </button>
    </span>
    <div
      ref="listbox"
      v-if="showDropdown"
      class="bg-white shadow-shadowOne rounded z-100 absolute overflow-x-hidden"
      :class="{
        'left-0': type !== 'icon',
        'right-[0px]': type === 'icon',
      }"
    >
      <ul
        id="dropdown-options"
        class="min-h-[50px] p-4 overflow-scroll"
        role="listbox"
      >
        <template v-if="filteredOptions.length">
          <li
            :title="option[altValue]"
            class="m-0 relative rounded p-2 h-10 hover:bg-green_light"
            role="option"
            v-for="(option, index) in filteredOptions"
            :key="option.label"
          >
            <input
              type="radio"
              :ref="textValue(option)"
              :name="textValue(option)"
              :id="`${textValue(option)}-${index}`"
              :value="textValue(option)"
              v-model="selectedOption"
              hidden
            />
            <label
              class="h-fit my-8 rounded cursor-pointer text-grey"
              :for="`${textValue(option)}-${index}`"
            >
              {{ textValue(option) }}
            </label>
          </li>
        </template>
        <li v-else class="p-[5px]">Nothing to see!</li>
      </ul>
    </div>
  </div>
</template>

<script src="./dropdown.js"></script>

<style src="" lang="" scoped></style>
