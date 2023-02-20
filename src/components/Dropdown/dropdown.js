// import { SearchInput } from "../Input";

export default {
  name: "Dropdown",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {
      required: false,
      default: "",
    },
    altValue: {
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: "large",
    },
    fixedText: {
      type: Boolean,
    },
    type: {
      type: String,
    },
    marginLeft: {
      type: String,
      default: "0",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    valueFor: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    rightAlign: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultText: this.label || "Select an Option",
      showDropdown: false,
      search: "",
      showSubOptions: false,
    };
  },
  mounted() {
    this.handleDropdownBlur = () => {
      setTimeout(() => {
			 if (!this.selectedOption) {
          this.showDropdown = false;
        } else if (this.selectedOption) {
          this.showDropdown = false;
        }
      }, 200);
    };
    this.dropdownWrapper = this.$refs.wrapper;
    this.dropdownWrapper.addEventListener("blur", this.handleDropdownBlur);
  },
  computed: {
    selectedOption: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    filteredOptions() {
      if (!this.search) {
        return this.options;
      } else {
        return this.options
          .filter((option) => {
            const regex = new RegExp(this.search, "gi");
            if (option[this.searchKey]) {
              return option[this.searchKey].match(regex);
            }
            return false;
          })
          .slice(0, 3);
      }
    },
  },
  watch: {
    selectedOption(value) {
      if (this.selectedOption == "Filter") {
        return;
      }
      if (value) {
        if (this.multiOptions) {
          this.dropdownWrapper.focus();
          this.showSubOptions = true;
        } else {
          this.dropdownWrapper.blur();
        }
				console.log(value)
        this.$emit("input", value);
        this.$emit("updateStatus", value);
      } else {
        this.showSubOptions = false;
      }
    },
    showDropdown(value) {
      if (value) {
        this.dropdownWrapper.focus();
        this.dropdownWrapper.addEventListener("blur", this.handleDropdownBlur);
      } else if (this.multiOptions) {
        this.selectedOption = null;
        this.dropdownWrapper.removeEventListener(
          "blur",
          this.handleDropdownBlur
        );
      } else if (!value && this.type === "icon") {
        this.$emit("selected", "");
      }
    },
    label(val) {
      this.defaultText = val;
      this.selectedOption = val;
    },
  },
  methods: {
    textValue(option) {
      return option[this.valueFor] || option.label || option.name;
    },
    closeSubOption() {
      this.showSubOptions = false;
      this.selectedOption = "Filter";
    },
  },
  components: {
    // SearchInput,
  },
};
