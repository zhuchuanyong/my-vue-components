<template>
  <div class="hello ">
    <div>Composition API</div>
    <a-form
      ref="ruleForm"
      :rules="rules"
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item label="姓名" name="name">
        <a-input v-model:value="form.name" />
      </a-form-item>
      <a-form-item label="地区">
        <a-select v-model:value="form.address" placeholder="请选择地址">
          <a-select-option
            :key="item.val"
            v-for="item in addressList"
            :value="item.val"
          >
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="时间">
        <a-date-picker
          v-model:value="form.date"
          show-time
          type="date"
          placeholder="请选择时间"
          style="width: 100%;"
        />
      </a-form-item>
      <a-form-item label="启用">
        <a-switch v-model:checked="form.disabled" />
      </a-form-item>

      <a-form-item label="爱好">
        <a-checkbox-group v-model:value="form.like">
          <a-checkbox
            :key="item.val"
            v-for="item in likeList"
            :value="item.val"
            name="type"
          >
            {{ item.label }}
          </a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="性别">
        <a-radio-group v-model:value="form.gender">
          <a-radio v-for="item in genderList" :value="item.val" :key="item.val">
            {{ item.label }}
          </a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" @click="onSubmit">
          确定
        </a-button>
        <a-button class="mx-2">
          取消
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

interface FormType {
  name: string;
  address: string;
  date?: Date;
  disabled: boolean;
  like: Array<string>;
  gender: string;
}
export default defineComponent({
  name: "FormOne",
  props: {
    msg: String
  },
  setup() {
    // 表单配置
    const labelCol = reactive({ span: 4 });
    const wrapperCol = reactive({ span: 14 });

    // 地址select 列表
    const addressList = reactive([
      {
        label: "济南",
        val: "100"
      },
      {
        label: "青岛",
        val: "101"
      }
    ]);

    // 爱好 列表
    const likeList = reactive([
      {
        label: "抽烟",
        val: "1"
      },
      {
        label: "喝酒",
        val: "2"
      },
      {
        label: "烫头",
        val: "3"
      }
    ]);

    const genderList = reactive([
      {
        label: "男",
        val: "male"
      },
      {
        label: "女",
        val: "Female"
      },
      {
        label: "嫐",
        val: "neutral"
      }
    ]);

    // 表单数据
    const form: FormType = reactive({
      name: "",
      address: "100",
      date: undefined,
      disabled: false,
      like: [],
      gender: "male"
    });

    const rules = reactive({
      name: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        }
      ]
    });
    const ruleForm = ref();

    const onSubmit = () => {
      // 表单验证
      ruleForm.value.validate().then((res: any) => {
        console.log("res", res);
      });
    };

    return {
      form,
      labelCol,
      wrapperCol,
      addressList,
      likeList,
      genderList,
      rules,
      onSubmit,
      ruleForm
    };
  }
});
</script>
