function defineReactive(obj, key, val) {
  // 递归
  observe(obj[key])
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ', key);
      return val
    },
    set(newVal) {
      console.log('set ', key, ':', newVal);
      if (newVal !== val) {
        observe(newVal)
        val = newVal
      }
    }
  })
}

// 社会主义洗礼 响应化处理
function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    // 希望传入的是obj
    return
  }
  new Observer(obj)
}

class KVue {
  constructor(options) {
    // 保存选项
    this.$options = options
    this.$data = options.data

    // 响应化处理
    observe(this.$data)
  }
}

class Observer {
  constructor(value) {
    this.value = value

    // 判断类型
    if (typeof value === 'object') {
      this.walk(value)
    }
  }

  // 对象数据响应化
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }

  // 数组数据响应化
}