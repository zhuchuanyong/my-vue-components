<template>
  <div class="home">
    home
    <!-- row-class-name="warning-row" -->
    <!-- :row-class-name="tableRowClassName" -->
    <Table
      stripe
      border
      highlight-current-row
      :row-class-name="tableRowClassName"
      @row-click="rowClick"
      :aa1="1233"
      @faaa="saaa"
      ref="homeTable"
      :tableConfig="tableConfig"
    ></Table>
    <el-button @click="setCurrent">单选第六行</el-button>
    <el-button @click="clearSelection">多选切换</el-button>
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
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
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
        columns: [
          { type: "selection", selectable: this.selectable },
          {
            label: "地址",
            prop: "address",
            formatter: this.formatter // Table-columns 属性 格式化内容
          },
          { label: "日期", prop: "date", width: 220 },
          { label: "姓名", prop: "name", sortable: true }
        ]
      }
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 2 || rowIndex === 0) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    //表格点击事件
    rowClick(row, column, event) {
      console.log(row);
      console.log(column);
      console.log(event);
    },
    // 设置单选选择某一行
    setCurrent() {
      let row = this.tableConfig.data[5];
      const { homeTable } = this.$refs;
      console.log(homeTable);
      homeTable.setCurrentRow(row);
      this.$refs.homeTable.$refs.CTable.setCurrentRow(row);
    },
    selectable(row, index) {
      return index > 2;
    },
    formatter(row) {
      return row.address + "formatter";
    },
    clearSelection() {
      const { homeTable } = this.$refs;
      homeTable.toggleAllSelection();
    },
    test() {
      console.log("test");
    },
    saaa(data) {
      console.log(123);
      console.log(data);
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
