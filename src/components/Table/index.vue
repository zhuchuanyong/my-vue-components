<template>
  <div>
    <el-table
      :data="tableConfig.data"
      style="width: 100%"
      ref="CTable"
      row-class-name="warning-row"
      v-bind="tableConfig.tableAttr"
      v-on="tableConfig.tableEvent"
    >
      <template v-for="item in tableConfig.columns">
        <!-- 特殊列 如 多选 序号 -->
        <el-table-column
          v-if="item.hasOwnProperty('type')"
          :key="item.label"
          v-bind="getColBind(item)"
        >
          <template v-if="item.type === 'expand'">
            <slot :name="item.slot"></slot>
          </template>
        </el-table-column>
        <!-- 存在formatter 格式化内容的列 -->
        <el-table-column
          v-else-if="item.formatter"
          :key="item.label"
          v-bind="getColBind(item)"
        ></el-table-column>
        <!-- 普通列 -->
        <el-table-column v-else :key="item.label" v-bind="getColBind(item)">
          <template slot-scope="scope" v-if="!item.formatter">
            <span>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
import Methods from "./tableMehods";
export default {
  props: {
    tableConfig: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...Methods,
    // 处理绑定属性
    getColBind(col) {
      let bind = Object.assign({}, col);
      delete bind.event;
      return bind;
    },
    getColOn(col) {
      let von = {};
      if (col.event !== undefined) {
        von = Object.assign({}, col.event);
      }
      return von;
    },
  }
};
</script>
