// let watcher = []

function defineReactive(obj, key, val) {
  // 递归
  observe(obj[key])

  // dep 和 key  一一对应
  const dep = new Dep()

  Object.defineProperty(obj, key, {
    get() {
      console.log('get ', key);
      // 依赖收集
      Dep.target && dep.addDep(Dep.target);
      return val
    },
    set(newVal) {
      console.log('set ', key, ':', newVal);
      if (newVal !== val) {
        observe(newVal)
        val = newVal
        // watcher.forEach(w => w.update())
        dep.notify()
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

function proxy(vm, sourceKey) {
  Object.keys(vm[sourceKey]).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key]
      },
      set(newVal) {
        if (newVal !== vm[sourceKey].key) {
          vm[sourceKey][key] = newVal
        }
      }
    })
  })
}

class KVue {
  constructor(options) {
    // 保存选项
    this.$options = options
    this.$data = options.data
    // 响应化处理
    observe(this.$data)

    // 代理
    proxy(this, '$data')

    // 编译
    new Compiler(options.el, this)
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

// 观察者：保存更新函数，数据更新时，执行更新函数
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn

    // watcher实例保存在Dep的静态属性上，做依赖收集
    Dep.target = this
    this.vm[this.key] // 触发getter
    Dep.target = null // 置空
  }

  update() {
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}

// 依赖：管理某个key对应的watcher实例
class Dep {
  constructor(dep) {
    this.deps = []
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach(dep => dep.update())
  }
}