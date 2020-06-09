<template>
  <div>
    <!-- el-row el-col -->
    <!-- <el-row>
      <el-col :span="24">24</el-col>
    </el-row>
    <el-row>
      <el-col :span="12">12</el-col>
      <el-col :span="12">12</el-col>
    </el-row>

    <el-row>
      <el-col :span="8">8</el-col>
      <el-col :span="8">8</el-col>
      <el-col :span="8">8</el-col>
    </el-row>-->

    <!-- el-container el-header el-main el-footer el-aside -->
    <el-container>
      <el-aside width="100px">aside</el-aside>
      <el-container>
        <el-header>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary">
            搜索
            <i class="el-icon-search el-icon--right"></i>
          </el-button>
          <el-button type="primary">
            搜索
            <i class="el-icon-search"></i>
          </el-button>
        </el-header>
        <el-main>main</el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Basic"
};
</script>

<style lang="scss" scoped>
.el-aside {
  background: #dcdcdc;
  line-height: 300px;
}
.el-header,
.el-footer {
  line-height: 50px;
}
.el-main {
  line-height: 200px;
}
</style>