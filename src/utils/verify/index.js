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
  },
  // 数字
  num: str => {
    const reg = /^[0-9]*$/;
    return reg.test(str);
  },
  // 非0 和0开头
  nozero: str => {
    const reg = /^(0|[1-9][0-9]*)$/;
    return reg.test(str);
  },
  // 至少几位数
  less: str => {
    const reg = /^\d{3,}$/;
    return reg.test(str);
  }
};

// class Rules {
//   // constructor() {
//   //   super();
//   // }
//   zz(val) {
//     const reg = val;
//     return reg.test(str);
//   }
// }

/**
 * @method 生成element验证规则
 * @param {*} validatorOpt
 * @param {*} params
 */
function setValidator(validatorOpt, params) {
  console.log(params);
  let { rule, value, callback } = validatorOpt;
  let [ruleName, message, required = true, opt] = params;
  // 非必填且为空  不进行校验
  if (!required && rules.empty(value)) {
    callback();
    return true;
  } else if (required) {
    // 必填进行非空校验
    if (!rules.empty(value)) {
      callback(new Error("内容不能为空"));
      return false;
    }
  }
  // 对输入内容进行校验
  if (!rules[ruleName](value)) {
    callback(new Error(message));
    return false;
  }
  return true;
}

function generateValidator(...optArr) {
  console.log(optArr);
  // let [ruleName, message, required = true, opt] = params;
  return [
    {
      validator: (rule, value, callback) => {
        // 循环验证规则
        for (let index = 0; index < optArr.length; index++) {
          const item = optArr[index];
          let res = setValidator({ rule, value, callback }, item);
          if (!res) {
            return;
          }
        }
        callback();
      },
      trigger: ["change", "blur"]
    }
  ];
}

export default generateValidator;
