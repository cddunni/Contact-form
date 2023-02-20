export default {
  name: "Checkbox",
  props: {
    value: {
      required: true,
    },
    id: {},
    isRequired: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    val: {},
    checker: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkedProxy: false,
    };
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.checkedProxy = val;
      },
    },
  },
  methods: {
    toggle({ target }) {
      this.$emit(
        "input",
        this.checker
          ? { checked: target.checked, proxy: this.checkedProxy }
          : this.checkedProxy
      );
    },
  },
};
