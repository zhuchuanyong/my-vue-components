<template>
  <div class="home">
    <Table
      highlight-current-row
      :row-class-name="tableRowClassName"
      @row-click="rowClick"
      ref="homeTable"
      @onSizeChange="onSizeChange"
      @onCurrentChange="onCurrentChange"
      :tableConfig="tableConfig"
    >
      <template v-slot:expand="{ data }">{{ data.row }}</template>
      <template v-slot:updateTime="{ data }">
        {{ data.row.updateTime + 1 }}
      </template>
      <template v-slot:tool="{ data }">
        <el-button class="margin-r-10" type="text" @click="viewClick(data)"
          >查看</el-button
        >
        <el-button class="margin-r-10" type="text" @click="editClick(data)"
          >编辑</el-button
        >
      </template>
    </Table>
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
        // 表格组件高度
        height: 500,
        // 表格数据
        data: [],
        // 列配置
        columns: [
          // { type: "selection", selectable: this.selectable },
          { type: "index", width: 70 },
          { type: "expand", slotName: "expand" },

          {
            label: "ip地址",
            prop: "ipAddress",
            formatter: this.formatter // Table-columns 属性 格式化内容
          },
          { label: "日期", prop: "createTime", width: 240 },
          {
            label: "日期2",
            prop: "updateTime",
            width: 240,
            slotName: "updateTime"
          },
          {
            label: "用户",
            prop: "createUser",
            width: 200
          },
          {
            label: "名称",
            prop: "equipmentTypeName",
            sortable: false
          },
          {
            label: "运行状态",
            slotName: "runStatus"
          },
          {
            label: "操作",
            slotName: "tool"
          }
        ],
        // 表格排序 优先级低于列配置的sortable 默认false
        sortable: true,
        // 分页配置
        pagination: {
          total: 500,
          "current-page": 2,
          "page-size": 10
        }
      }
    };
  },
  methods: {
    tableRowClassName(data) {
      // console.log(data);
      let { rowIndex } = data;
      // console.log(row);
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
    selectable(row, index) {
      return index > 2;
    },
    formatter(row) {
      return row.ipAddress + "formatter";
    },
    // 分页
    // 每页条数发生变化
    sizeChange(val) {
      console.log(val);
    },
    // 当前页数发生变化
    currentChange(val) {
      console.log(val);
    },
    settableData() {
      let arr = [];
      for (let index = 0; index < 6; index++) {
        arr.push({
          status: "1",
          groupCode: "rootGroup",
          createTime: "2019-09-18T09:30:55.000+0000",
          createUser: "root",
          updateTime: "2019-09-18T09:30:55.000+0000",
          updateUser: "root",
          message: null,
          id: 13,
          equipmentCode: "3r5435",
          equipmentName: "787878",
          alias: "78687",
          equipmentTypeId: 104,
          runStatus: "OFF_LINE",
          useStatus: "DEBUG",
          ipAddress: "192.168.1.1",
          remarks: "",
          enabled: false,
          equipmentTypeName: "植球机",
          runStatusName: "离线",
          useStatusName: "调试"
        });
      }
      this.tableConfig.data = arr;
    },
    /**
     * @method 表格编辑
     */
    editClick(data) {
      console.log(data);
    },
    /**
     * ! 查看
     * ? 查看
     * TODO 查看
     * @method 查看
     */
    viewClick(data) {
      console.log(data);
    }
  },
  mounted() {
    this.settableData();
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
