// 编译器
// 遍历节点
// 如果是文本 判断是否是插值绑定
// 如果是元素 遍历属性
class Compiler {
  constructor(el, vm) {
    this.$el = document.querySelector(el)
    this.$vm = vm

    this.compile(this.$el)
  }

  compile(el) {
    // 遍历el树
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      // 判断是否是元素
      if (this.isElement(node)) {
        console.log('编译元素', node.nodeName);
        this.compileElement(node)

      } else if (this.isInterpolation(node)) {
        // 判断是否是插值
        console.log('编译插值绑定', node.textContent);
        this.compileText(node)
      }

      // 递归
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }

    })
  }

  isElement(node) {
    return node.nodeType === 1
  }

  isInterpolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compileText(node) {
    this.update(node, RegExp.$1, 'text')
  }
  compileElement(node) {
    // 遍历属性
    const attributes = node.attributes
    Array.from(attributes).forEach(attr => {
      // 规定 指令以k-开头 事件以@开头
      // k-xx='oo'
      const attrName = attr.name
      const exp = attr.value
      if (this.isDirective(attrName)) {
        const dir = attrName.substring(2); // xx
        // this[dir] && this[dir](node, exp)
        this.update(node, exp, dir)
      } else if (this.isEvent(attrName)) {

      }
    })
  }

  update(node, exp, dir) {
    // 初始化
    // xxUpdater函数
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])

    // 更新处理 封装一个更新函数
    new Watcher(this.$vm, exp, val => {
      fn && fn(node, val)
    })
  }

  isDirective(attrName) {
    return attrName.indexOf('k-') === 0
  }
  isEvent(attrName) {
    return attrName.indexOf('@') === 0
  }
  text(node, exp) {
    this.update(node, exp, 'text')
  }
  html(node, exp) {
    this.update(node, exp, 'html')
  }
  textUpdater(node, val) {
    node.textContent = val
  }
  htmlUpdater(node, val) {
    node.innerHTML = val
  }
}