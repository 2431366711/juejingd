<template>
  <div class="headermain">
    <div class="left">
      <ul>
        <li>
          <img
            src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
            alt=""
            class="logo"
          />
        </li>
        <li v-for="item in headerleft" :key="item">
          <a href="javascript:;">{{ item }}</a>
        </li>
        <li>
          <img
            src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7482b3ad2cd14edda31f05399c2ae759~tplv-k3u1fbpfcp-zoom-1.image?"
            alt=""
            class="image"
          />
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li style="width:250px">
          <el-input
            placeholder="探索掘金"
            class="input-with-select inputwidth"
            @focus="inputFocus"
            @blur="inputBlur"
            :class="{ inputwidthchange: isShow }"
          >
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </li>
        <li>
          <el-button type="primary" class="button-left">创作者中心</el-button>
          <el-button type="primary" class="button-right"><div></div></el-button>
        </li>
        <li>
          <img
            class="vip"
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
            alt=""
          />
          <span class="vip-font">会员</span>
        </li>
        <li>
          <div class="message-counter"><span>6</span></div>
          <el-icon :size="20"><Bell /></el-icon>
        </li>
        <li>
          <img
            class="userimage"
            src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3791/5070639578~300x300.image"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
export default {
  setup() {
    const headerleft = ref([
      "首页",
      "沸点",
      "课程",
      "直播",
      "活动",
      "商城",
      "APP",
      "插件",
    ]);
    const isShow = ref(false);
    const inputFocus = () => {
      isShow.value = true;
    };
    const inputBlur= ()=>{
      isShow.value = false
    }
    return {
      headerleft,
      Search,
      inputFocus,
      isShow,
      inputBlur
    };
  },
};
</script>

<style lang="less" scoped>

.right ul .disappear {
  display: none;
}
.right ul li inputtrasniton {
  transition: width 1s ease;
}
.headermain {
  width: 1500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left .logo {
  height: 22px;
}

.left ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 25px;
}

.left ul li a {
  line-height: 64px;
  height: 64px;
  font-size: 14px;
  font-weight: 400;
  color: #919192;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}
.left ul li:nth-child(2) a {
  color: #3491d2;
}
.left ul li:nth-child(2) a:hover {
  color: #919192;
}
.left ul li:nth-last-child(2) a:hover {
  color: black;
  border-bottom: 2px solid transparent;
}
.left ul li:nth-last-child(3) a:hover {
  color: black;
  border-bottom: 2px solid transparent;
}
.left ul li:nth-last-child(4) a:hover {
  color: black;
  border-bottom: 2px solid transparent;
}
.left ul li:hover a {
  color: #3491d2;
  border-bottom: 2px solid #3491d2;
}

.image {
  height: 34px;
  width: 120px;
}

.right ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    cursor: pointer;
    position: relative;
    margin-right: 25px;
    display: flex;
    align-items: center;
    .el-input {
      position: absolute;
      width: 250px !important;
      transition: width 1s ease;
      z-index: 1000;
    }
    .inputwidthchange {
      width: 410px !important;
    }
    .button-left {  
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .button-right {  
      margin: 0;
      border-top-left-radius: 0;
      border-end-start-radius: 0;
      width: 20px;
      display: flex;
      align-items: center;
      div {
        border: 4px solid transparent;
        border-top: 4px solid white;
      }
    }
    .vip {
      height: 30px;
      width: 30px;
      margin-right: 5px;
    }
    .vip-font {
      color: #919192;
      font-size: 14px;
    }
    .message-counter {
      height: 14px;
      width: 14px;
      border-radius: 50%;
      background: red;
      text-align: center;
      line-height: 14px;
      position: absolute;
      right: -50%;
      top: -50%;
      span {
        font-size: 8px;
        color: white;
      }
    }
    .userimage {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }
}
</style>