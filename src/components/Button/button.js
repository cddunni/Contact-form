export default {
  name: "CButton",
  props: {
    size: {
      type: String,
      default: "md",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  components: {},
};
