// import validator from "validator";
let formRules = {
  isEmpty: (rule, value, callback, options) => {
    // 校验规则
    let verify =
      value === "" ||
      value === null ||
      value === undefined ||
      value.trim() === "";
    return creationformRule(verify, rule, value, callback, options);
  }
};
// 生成校验函数
function creationformRule(ruleValidator, ...params) {
  let [rule, value, callback, options] = params;
  console.log(rule, value);
  if (ruleValidator) {
    callback(new Error(options.msg));
    return false;
  }
  return true;
}
/**
 * * 验证代码生成函数
 * @param {Object} opt
 */
function generateValidator(opt) {
  let validatorArr = opt;
  return [
    {
      // params = rule, value, callback
      validator: (rule, value, callback) => {
        for (let i = 0; i < validatorArr.length; i++) {
          let fnName = validatorArr[i].type;
          let options = validatorArr[i];
          //判断是否生成下一个验证条件
          if (!formRules[fnName](rule, value, callback, options)) {
            return;
          }
        }
        callback();
      },
      trigger: ["change", "blur"]
    }
  ];
}
/**
 * 需要导出的规则,外部直接调用
 */
let exportValidator = {
  // 是否为空
  isEmpty: (msg = "参数不能为空") => {
    console.log(this);
    // console.log(this.name);
    // opt维数组 可以有多个验证规则方法
    let opt = [
      {
        type: "isEmpty",
        msg
      }
    ];
    return generateValidator(opt);
  }
};
export default {
  generateValidator,
  ...exportValidator
};
