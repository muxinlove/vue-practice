export default {
  render(h) {
    // 标记当前router-view深度
    this.$vnode.data.routerView = true

    let depth = 0;
    let parent = this.$parent
    while (parent) {
      let vnodeData = parent.$vnode && parent.$vnode.data
      if (vnodeData && vnodeData.routerView) {
        depth++
      }
      parent = parent.$parent
    }

    // 获取当前path所对应的component
    // $options router 实例
    // const { routeMap, current } = this.$router
    // const component = routeMap[current].component || null

    let component = null
    const route = this.$router.matched[depth]
    if (route) {
      component = route.component
    }
    return h(component)
  }
}