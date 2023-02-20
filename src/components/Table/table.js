import TableHeader from "./TableHeader";

export default {
  name: "Table",
  props: {
    tableHeaders: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    tableData: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    expandable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
    size: {
      type: String,
    },
    muted: {
      type: Boolean,
    },
    keyValue: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    stickyHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sortBy: null,
      expandedItems: [],
      sortedData: [...this.tableData],
    };
  },
  watch: {
    sortBy(newValue) {
      if (newValue) {
        const id = newValue;
        this.sortedData = this.tableData.sort((a, b) =>
          a[id] < b[id] ? -1 : 1
        );
      }
    },
  },
  methods: {
    toggleExpanded(id) {
      if (this.expandable) {
        if (this.expandedItems.includes(id)) {
          const index = this.expandedItems.indexOf(id);
          this.expandedItems.splice(index, 1);
        } else {
          this.expandedItems.push(id);
        }
      }
    },
    isExpanded(id) {
      return this.expandedItems.includes(id);
    },
  },
  components: {
    TableHeader,
  },
};
