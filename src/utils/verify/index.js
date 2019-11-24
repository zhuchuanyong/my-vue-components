let rules = {
  name: str => {
    const reg = /^[\u4e00-\u9fa5]{2,10}$/;
    return reg.test(str);
  },
  empty: str => {
    if (str !== "" && str !== null) {
      return false;
    } else {
      return true;
    }
  }
};

function generateValidator(...params) {
  console.log(params);
  let [ruleName, message, required = true, opt] = params;
  return [
    {
      validator: (rule, value, callback) => {
        console.log(value);

        // 非必填且为空  不进行校验
        if (!required && rules.empty(value)) {
          callback();
        } else if (required) {
          // 必填进行非空校验
          if (!rules.empty(value)) {
            return callback(new Error("内容不能为空"));
          }
        }
        // 对输入内容进行校验
        if (!rules[ruleName](value)) {
          return callback(new Error(message));
        }
        callback();
      },
      trigger: ["change", "blur"]
    }
  ];
}

export default generateValidator;
