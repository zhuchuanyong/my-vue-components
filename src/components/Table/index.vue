<template>
  <el-table
    :data="tableConfig.data"
    style="width: 100%"
    row-class-name="warning-row"
    v-bind="tableConfig.tableAttr"
    v-on="tableConfig.tableEvent"
  >
    <template v-for="item in tableConfig.columns">
      <!-- 特殊列 如 多选 序号 -->
      <el-table-column
        v-if="item.hasOwnProperty('type')"
        :key="item.label"
        v-bind="item"
      >
        <template v-if="item.type === 'expand'">
          <slot :name="item.slot"></slot>
        </template>
      </el-table-column>
      <el-table-column v-else :key="item.label" v-bind="item">
        <template slot-scope="scope">
          <span>{{ scope.row[item.value] }}</span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
export default {
  props: {
    tableConfig: {
      type: Object,
      required: true
    }
  },
  computed: {
    tableBind() {
      const { $attrs } = this;
      console.log($attrs);
      return {
        width: 250
      };
    }
  }
};
</script>
