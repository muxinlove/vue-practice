// 闭包
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
        val = newVal;
        // 更新函数
        update()
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
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function set(obj, key, val) {
  defineReactive(obj, key, val)
}

// 页面更新
function update() {

}

let obj = {
  foo: 'foo',
  bar: 'bar',
  baz: {
    a: 1
  }
}

observe(obj)

// obj.foo
// obj.foo = 'foooooo'
// obj.bar
// obj.bar = 'barrrrrr'
// obj.baz
// obj.baz.a = '100000'
// obj.baz = {
//   a: 11111,
//   b: 222
// }
// obj.baz.b = 22222222

// 新增 $set 社会主义洗礼
// set(obj.baz, 'c', '333')
// obj.baz.c
// obj.baz.c = '333333'

// Object.defineProperty 对数组无效
// 改变数组 只有7个 覆盖这7个方法
// push unshfit pop shift reverse sort splice
// 解决方案：替换数组实例的原型方法，原实现之外 通知更新