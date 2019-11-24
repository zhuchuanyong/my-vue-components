<template>
  <el-row>
    <el-col :span="12">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="自定义校验" prop="diy">
          <el-input v-model="ruleForm.diy"></el-input>
        </el-form-item>
        <el-form-item label="自定义校验2" prop="diy2">
          <el-input v-model="ruleForm.diy2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import generateValidator from "../../utils/verify/index";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        diy2: "",
        diy: "",
        resource: "",
        desc: ""
      },
      rules: {
        // name: [
        //   {
        //     required: true,
        //     message: "请输入活动名称",
        //     trigger: ["change", "blur"]
        //   },
        //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        // ],
        name: generateValidator("name", "请输入正确姓名", false),
        diy: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error("diy不能为空"));
              } else if (value <= 18) {
                callback(new Error("请输入数字不能小于18"));
              }
            },
            trigger: "change"
          }
        ],
        diy2: this.validator.isEmpty("hsh不能为空", "233"),
        desc: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                return callback(new Error("年龄不能为空"));
              }
              setTimeout(() => {
                if (!Number.isInteger(value)) {
                  callback(new Error("请输入数字值"));
                } else {
                  if (value < 18) {
                    callback(new Error("必须年满18岁"));
                  } else {
                    callback();
                  }
                }
              }, 1000);
            },
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
