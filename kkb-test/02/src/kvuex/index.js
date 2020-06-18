// 保存构造函数引用 避免import
let Vue

class Store {
  constructor(options) {
    // this.$options = options;
    // 保存mutation
    this._mutations = options.mutations;
    this._actions = options.actions;
    this._wrapperGetters = options.getters

    //响应化处理state
    // 这里data可以是对象 因为是根组件 不会出现复用的情况
    // this.state = new Vue({
    //   data: options.state
    // })

    // doubleCount(state, getters){
    // return ...
    // }
    this.getters = {};
    let computed = {}

    const store = this
    Object.keys(this._wrapperGetters).forEach(key => {
      // 获取用户定义的getter
      const fn = store._wrapperGetters[key]
      // 转换为compited 无参数形式
      computed[key] = function () {
        return fn(store.state)
      }

      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key]
      })
    })

    this._vm = new Vue({
      data: {
        // $$ 2个$ vue 不做代理， this.$$data 获取不到
        $$state: options.state
      },
      computed
    })




    // 绑定this
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    return this._vm._data.$$state
  }

  set state(v) {
    console.error('state 不给改！！！');
  }

  // store.commit('add', 1)
  // type mutation 
  // payload 载荷
  // add(state, payload)
  commit(type, payload) {
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    }
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    }
  }
}

function install(_Vue) {
  Vue = _Vue

  // 混入
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}