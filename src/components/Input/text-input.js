export default {
  name: "TextInput",
  props: {
    id: String,
    type: String,
    value: String,
    label: String,
    labelStyle: String,
    inputStyle: [String, Object],
    inputBoxStyle: String,
    placeHolder: String,
    disabled: Boolean,
    readonly: String,
    rows: String,
    min: String,
    max: String,
    invalidMsg: String,
  },
};
