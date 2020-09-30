import { defineComponent, ref, reactive } from "vue";

interface FormType {
  name: string;
  address: string;
  date?: Date;
  disabled: boolean;
  like: Array<string>;
  gender: string;
}
const FormOneTsx = defineComponent({
  name: "FormOne",
  props: {
    msg: String,
  },
  setup() {
    // 表单配置
    const labelCol = reactive({ span: 4 });
    const wrapperCol = reactive({ span: 14 });

    // 地址select 列表
    const addressList = reactive([
      {
        label: "济南",
        val: "100",
      },
      {
        label: "青岛",
        val: "101",
      },
    ]);

    // 爱好 列表
    const likeList = reactive([
      {
        label: "抽烟",
        val: "1",
      },
      {
        label: "喝酒",
        val: "2",
      },
      {
        label: "烫头",
        val: "3",
      },
    ]);

    const genderList = reactive([
      {
        label: "男",
        val: "male",
      },
      {
        label: "女",
        val: "Female",
      },
      {
        label: "嫐",
        val: "neutral",
      },
    ]);

    // 表单数据
    const form: FormType = reactive({
      name: "222",
      address: "100",
      date: undefined,
      disabled: false,
      like: [],
      gender: "male",
    });

    const rules = reactive({
      name: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
    });
    const ruleForm = ref();

    const onSubmit = () => {
      console.log("ruleForm", ruleForm);
      // 表单验证
      ruleForm.value.validate().then((res: any) => {
        console.log("res2", res);
      });
    };

    return () => (
      <div class="hello ">
        <div>Composition API</div>
        <a-form
          ref={ruleForm}
          rules={rules}
          model={form}
          label-col={labelCol}
          // label-col={{ span: 4 }}
          wrapper-col={wrapperCol}
        >
          <a-form-item label="姓名" name="name">
            <a-input v-model={[form.name, "value"]} />
          </a-form-item>
          <a-form-item label="地区">
            <a-select
              v-model={[form.address, "value"]}
              placeholder="请选择地址"
            >
              {addressList.map((item) => {
                return (
                  <a-select-option key={item.val} value={item.val}>
                    {item.label}
                  </a-select-option>
                );
              })}
            </a-select>
          </a-form-item>

          <a-form-item label="时间">
            <a-date-picker
              v-model={[form.date, "value"]}
              show-time
              type="date"
              placeholder="请选择时间"
              style={{ width: "100%" }}
            />
          </a-form-item>

          <a-form-item label="启用">
            <a-switch v-model={[form.disabled, "checked"]} />
          </a-form-item>

          <a-form-item label="爱好">
            <a-checkbox-group v-model={[form.like, "value"]}>
              {likeList.map((item) => {
                return (
                  <a-checkbox key={item.val} value={item.val} name="type">
                    {item.label}
                  </a-checkbox>
                );
              })}
            </a-checkbox-group>
          </a-form-item>
          <a-form-item label="性别">
            <a-radio-group v-model={[form.gender, "value"]}>
              {genderList.map((item) => {
                return (
                  <a-radio value={item.val} key={item.val}>
                    {item.label}
                  </a-radio>
                );
              })}
            </a-radio-group>
          </a-form-item>

          <a-form-item>
            <a-button type="primary" onClick={onSubmit}>
              确定
            </a-button>
            <a-button class="mx-2">取消</a-button>
          </a-form-item>
        </a-form>
      </div>
    );
  },
});

export default FormOneTsx;
