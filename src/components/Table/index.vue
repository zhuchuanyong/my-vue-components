<template>
  <div>
    <el-table
      ref="CTable"
      :data="tableConfig.data"
      style="width: 100%"
      :height="setTableHeight()"
      v-bind="setTableAttr()"
      v-on="setTableEvent()"
    >
      <template v-for="(item, index) in tableConfig.columns">
        <!-- 特殊列 如 多选 序号 -->
        <el-table-column
          v-if="
            item.hasOwnProperty('type') &&
              (item.type === 'selection' || item.type === 'index')
          "
          :key="index"
          v-bind="getColBind(item)"
        />
        <!-- 展开行  -->
        <el-table-column
          v-else-if="item.hasOwnProperty('type') && item.type === 'expand'"
          :key="index"
          v-bind="getColBind(item)"
        >
          <template slot-scope="scope">
            <slot name="expand" :data="scope" />
          </template>
        </el-table-column>
        <!-- 存在formatter 格式化内容的列 -->
        <el-table-column
          v-else-if="item.formatter"
          :key="index"
          v-bind="getColBind(item)"
        />
        <!-- 插槽 -->
        <el-table-column
          v-else-if="item.slotName"
          :key="index"
          v-bind="getColBind(item)"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope" />
          </template>
        </el-table-column>
        <!-- 普通列 -->
        <el-table-column v-else :key="index" v-bind="getColBind(item)">
          <template slot-scope="scope">
            <span
              v-if="
                scope.row[item.prop] === '' ||
                  scope.row[item.prop] === null ||
                  scope.row[item.prop] === undefined
              "
              >暂无</span
            >
            <span>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!--  分页 -->
    <div v-if="tableConfig.pagination ? true : false" class="pagination-pack">
      <el-pagination
        style="text-align: center; margin-top: 12px;"
        v-bind="setPaginationAttr()"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import Methods from "./tableMehods";
export default {
  inheritAttrs: false,
  props: {
    tableConfig: {
      type: Object,
      required: true
    }
  }, // 不会在组件最外层div设置属性
  methods: {
    // Methods  处理table的方法
    ...Methods,
    // 处理table列绑定属性
    getColBind(col) {
      let attr = {};
      // 判断是否开启排序
      if (this.tableConfig.sortable) {
        attr.sortable = true;
      }
      let bind = Object.assign(attr, col);
      return bind;
    },
    // 设置需要绑定的table属性
    setTableAttr() {
      // 项目table默认属性
      let defaultAttr = {
        stripe: true,
        border: true,
        "min-height": 3000 //解决底部滚动条初始无法滚动问题
      };
      let attr = Object.assign(defaultAttr, this.$attrs);
      return attr;
    },
    // 处理table绑定事件
    setTableEvent() {
      console.log(this.$listeners);
      let Event = Object.assign({}, this.$listeners);
      return Event;
    },
    // 设置分页属性
    setPaginationAttr() {
      // 项目分页默认属性
      let defaultAttr = {
        background: true,
        "page-sizes": [20, 50, 100, 200],
        layout: "prev, pager, next,sizes,jumper",
        "current-page": 1,
        "page-size": 20
      };
      let attr = Object.assign(defaultAttr, this.tableConfig.pagination);
      return attr;
    },
    // 设置分页事件
    setPaginationEvents() {
      let Event = this.tableConfig.pagination.Events;
      return Event;
    },
    setTableHeight() {
      console.log(this.tableConfig.height);
      if (this.tableConfig.pagination && this.tableConfig.height) {
        console.log(1);
        console.log(this.tableConfig.height - 52);
        return this.tableConfig.height - 52;
      } else if (this.tableConfig.height) {
        console.log(2);
        return this.tableConfig.height;
      } else {
        console.log(3);
        return null;
      }

      // return this.tableConfig.height;
    },
    onSizeChange(pageSize) {
      this.$emit("onSizeChange", pageSize);
    },
    // 数量变数事件
    onCurrentChange(pageNum) {
      this.$emit("onCurrentChange", pageNum);
    }
  }
};
</script>
