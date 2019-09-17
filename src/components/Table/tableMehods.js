const METHOD_NAMES = [
  "setCurrentRow",
  "toggleRowSelection",
  "toggleRowExpansion",
  "toggleAllSelection",
  "clearSelection",
  "clearFilter",
  "clearSort",
  "doLayout",
  "sort"
];

const methods = {};

METHOD_NAMES.forEach(name => {
  methods[name] = function(...args) {
    const { CTable } = this.$refs;
    if (CTable && CTable[name]) {
      CTable[name](...args);
    }
  };
});
export default methods;
