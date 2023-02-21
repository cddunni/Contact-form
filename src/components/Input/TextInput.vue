<template>
  <ValidationProvider tag="div"
		v-slot="{ errors, ariaMsg }"
		:rules="$attrs.rules"
		:name="name">
  <div v-if="type === 'textarea'">
    <label :for="id" class="text-grey mb-1 block text-sm">
      {{ label }}
    </label>
    <textarea
      class="px-4 py-3 text-sm w-full outline-0 font-normal rounded focus:border-green focus:border bg-green_light"
      :placeholder="placeHolder"
      :id="id"
      :disabled="disabled"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :rows="rows"
      autocomplete
    />
  </div>
  <div v-else class="" :class="inputBoxStyle">
    <label :for="id" class="text-grey mb-1 block text-sm">{{ label }}</label>
    <input
      :type="type"
      class="px-4 py-3 text-sm h-12 w-full outline-0 font-normal rounded focus:border-green focus:border bg-green_light"
      :class="inputStyle"
      :placeholder="placeHolder"
      :id="id"
      :min="min"
      :max="max"
      :name="name"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      :readonly="readonly"
      autocomplete
    />
    <span class="text-xs text-grey block">
      <slot name="meta"></slot>
    </span>
  </div>
  <span class="text-red text-xs" v-bind="ariaMsg">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script src="./text-input.js"></script>
