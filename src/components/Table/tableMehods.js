const METHOD_NAMES = [
  "clearSelection",
  "toggleRowSelection",
  "toggleRowExpansion",
  "toggleAllSelection",
  "setCurrentRow",
  "clearSort",
  "clearFilter",
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
