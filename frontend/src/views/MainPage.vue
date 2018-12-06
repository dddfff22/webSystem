<template>
  <div class="main-page">
      <main-top/> 
       <main-body/>
       <main-body/>
  </div>
</template>


<script>

import MainBody from '@/components/MainBody.vue'
import MainTop from '@/components/MainTop.vue'

export default {


  name: 'mainpage',
  components: {
    MainBody,
    MainTop
  }
}


</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.B1JlO{display:inline-block;width:100%;-webkit-tap-highlight-color:transparent}.OAXCp{display:block;overflow:hidden;padding-bottom:100%}.oJub8{height:calc(100% + 1px);position:absolute;width:100%}.QvAa1,.oujXn{bottom:0;left:0;position:absolute;right:0;top:0}.video-js{position:static}.QvAa1{display:block}.B2xwy{opacity:0;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;-webkit-transition-delay:.1s;transition-delay:.1s}.PTIMp{opacity:1}._3G0Ji,.y4vpg{position:absolute}._3G0Ji{display:block;height:135px;left:50%;margin-left:-67px;margin-top:-67px;top:50%;width:135px}.y4vpg{opacity:1;right:0;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;-webkit-transition-delay:.1s;transition-delay:.1s}.B1JlO:hover .y4vpg,.VXgpI{opacity:0}.P6lRB,.wymO0{position:absolute}.P6lRB{display:block;border-radius:100px;background:rgba(0,0,0,.85);padding:5px 10px;color:#fff;left:10px;bottom:10px}.B1JlO .text-track-display,.B1JlO .vjs-big-play-button,.B1JlO .vjs-control,.B1JlO .vjs-control-bar,.B1JlO .vjs-loading-spinner{display:none!important}.wymO0{top:0;left:0;right:0;bottom:0}.Q8nQz img,.Q8nQz video{height:50vh}.Q8nQz img{margin:0 auto;width:auto;position:initial}.OAXCp.VLtd4{padding-bottom:50vh}.oujXn .y3x6d{color:#fff;display:block;text-decoration:none;line-height:18px;margin-left:20px;font-size:14px;font-weight:600;z-index:3}.hq6SN{z-index:3}.QvAa1.Pcar0{background-color:rgba(0,0,0,.5)}._3G0Ji.hq6SN{background-size:20px 20px;display:block;width:16px;height:16px;left:0;margin:0;overflow:hidden;top:0}span.jNBsH{display:none}.oujXn ._7mVm3{margin:auto}
</style>
