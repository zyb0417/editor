<template>
  <div>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        layout="prev, pager, next, total"
        :total="50"
        :page-size="5"
        background
      ></el-pagination>
    </div>
    <el-button type="info" plain size="small" @click.native="video">111</el-button>
    <el-button
      type="info"
      class="palyVideo_btn"
      plain
      size="small"
      @click.native="playVideo"
    >播放视频</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      video() {
        console.log('11111');
      },
      playVideo() {
        console.log('22222');
      },
    },
  };
</script>

<style  scoped>
  .block {
    font-size: 20px;
  }
  .palyVideo_btn {
    float: right;
    position: relative;
    right: 50px;
  }
</style>