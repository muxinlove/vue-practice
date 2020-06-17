export default {
  render(h) {
    // 获取当前path所对应的component
    // $options router 实例
    const { routeMap, current } = this.$router
    const component = routeMap[current].component || null
    return h(component)
  }
}