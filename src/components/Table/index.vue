<template>
  <div>
    <el-button @click="aaa">emit</el-button>
    <el-button @click="aaa2">emit33</el-button>
    <el-table
      :data="tableConfig.data"
      style="width: 100%"
      :height="setTableHeight()"
      ref="CTable"
      v-on="setTableEvent()"
      v-bind="setTableAttr()"
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
        >
        </el-table-column>
        <!-- 展开行  功能未封装完成 -->
        <el-table-column
          v-else-if="item.hasOwnProperty('type') && item.type === 'expand'"
          :key="index"
          v-bind="getColBind(item)"
        >
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.useStatus }}</span>
              </el-form-item>

              <el-form-item label="商品描述1">
                <span>{{ props.row.runStatusName }}</span>
              </el-form-item>
            </el-form>
            <!-- <slot :name="item.slot"></slot> -->
          </template>
        </el-table-column>
        <!-- 存在formatter 格式化内容的列 -->
        <el-table-column
          v-else-if="item.formatter"
          :key="index"
          v-bind="getColBind(item)"
        ></el-table-column>
        <!-- <el-table-column v-else-if="item.render" :key="index">
          {{ item.render("h", item) }}
        </el-table-column> -->
        <!-- 插槽 -->
        <template v-else-if="item.slot">
          <slot :name="item.slot"> {{ item.slot }}</slot>
        </template>
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
    <div class="pagination-pack" v-if="tableConfig.pagination ? true : false">
      <el-pagination
        style="text-align: center; margin-top: 12px;"
        v-on="setPaginationEvents()"
        v-bind="setPaginationAttr()"
      ></el-pagination>
    </div>
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
  inheritAttrs: false, // 不会在组件最外层div设置属性
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
    // 处理table列绑定事件
    getColOn(col) {
      let von = {};
      if (col.event !== undefined) {
        von = Object.assign({}, col.event);
      }
      return von;
    },
    // 设置需要绑定的table属性
    setTableAttr() {
      // 项目table默认属性
      let defaultAttr = {
        stripe: true,
        border: true
      };
      let attr = Object.assign(defaultAttr, this.$attrs);
      return attr;
    },
    // 处理table绑定事件
    setTableEvent() {
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
      let attr = Object.assign(
        defaultAttr,
        this.tableConfig.pagination.Attributes
      );
      return attr;
    },
    // 设置分页事件
    setPaginationEvents() {
      let Event = this.tableConfig.pagination.Events;
      return Event;
    },
    setTableHeight() {
      if (this.tableConfig.pagination && this.tableConfig.height) {
        return this.tableConfig.height - 32;
      } else if (this.tableConfig.height) {
        return this.tableConfig.height;
      } else {
        return null;
      }

      // return this.tableConfig.height;
    },
    aaa() {
      this.$emit("faaa", "测试数据");
    },
    aaa2() {
      this.$refs.CTable.faaa();
    }
  },
  mounted() {
    console.log(this.$attrs);
    console.log(this.$listeners);
  }
};
</script>
