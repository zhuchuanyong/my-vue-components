<template>
  <div class="home">
    home
    <Table :tableConfig="tableConfig"></Table>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table";

export default {
  name: "home",
  components: {
    Table
  },
  data() {
    return {
      tableConfig: {
        data: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ],
        // 表格的属性
        tableAttr: {
          stripe: true,
          border: true,
          // "row-class-name": "warning-row"
          "row-class-name": this.tableRowClassName
          // height: 500
        },
        tableEvent: {
          "row-click": this.rowClick
        },
        columns: [
          { type: "selection" },
          { label: "地址", value: "address" },
          { label: "日期", value: "date", width: 220 },
          { label: "姓名", value: "name" }
        ]
      }
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log(row);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    rowClick(row, column, event) {
      console.log(row);
      console.log(column);
      console.log(event);
    }
  }
};
</script>
<style lang="scss">
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
