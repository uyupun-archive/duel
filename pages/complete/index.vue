<template>
  <div class="section">
    <h2 class="h2">和解成立！</h2>
    <div v-for="index in 65" :key="index" class="star-area">
      <div class="star">
        <div class="star-cover is-right"></div>
        <div class="star-cover is-left"></div>
      </div>
    </div>
    <img src="@/assets/family_isan_happy.png" alt="和解" class="c-solve">
    <button type="button" class="btn btn-primary btn-position" @click="initialize">トップへ</button>
  </div>
</template>

<script>
export default {
  methods: {
    initialize() {
      this.$store.commit('setInitialize');
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.c-solve {
  width: 80%;
  max-width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.h2 {
  padding-top: 100px;
}

.btn-position {
  display: inline-block;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.star {
  position: relative;
  height: 30px;
  width: 30px;
  background-color: #ffc402;
  opacity: 1;
  animation: star 1s linear infinite;
  &:nth-of-type(2n) {
    animation-delay: 0.5s;
    transform: rotate(25deg) scale(0.5);
  }
  &:nth-of-type(2n - 1) {
    transform: rotate(-25deg) scale(0.5);
  }
  &-cover {
    &:before,
    &:after {
      background-color: #fff;
      position: absolute;
      content: "";
      display: block;
      height: 18px;
      width: 18px;
      box-sizing: border-box;
    }
    &.is-left {
      &:before {
        top: 18px;
        left: 0;
        border-right: 1px solid #f2c820;
        border-top: 1px solid #f2c820;
        border-top-right-radius: 70%;
      }
      &:after {
        top: 0;
        left: 0;
        border-bottom: 1px solid #f2c820;
        border-right: 1px solid #f2c820;
        border-bottom-right-radius: 70%;
      }
    }
    &.is-right {
      &:before {
        top: 18px;
        left: 18px;
        border-top: 1px solid #f2c820;
        border-left: 1px solid #f2c820;
        border-top-left-radius: 70%;
      }
      &:after {
        top: 0;
        left: 18px;
        border-left: 1px solid #f2c820;
        border-bottom: 1px solid #f2c820;
        border-bottom-left-radius: 70%;
      }
    }
  }
  &-area {
    position: absolute;
    &:nth-of-type(1) {
      top: 0;
      left: 0;
    }
    &:nth-of-type(2) {
      top: 30px;
      left: 0;
    }
    &:nth-of-type(3) {
      top: 60px;
      left: 0;
    }
    &:nth-of-type(4) {
      top: 90px;
      left: 0;
    }
    &:nth-of-type(5) {
      top: 120px;
      left: 0;
    }
    &:nth-of-type(6) {
      top: 148px;
      left: 0;
    }
    &:nth-of-type(7) {
      top: 180px;
      left: 0;
    }
    &:nth-of-type(8) {
      top: 210px;
      left: 0;
    }
    &:nth-of-type(9) {
      top: 240px;
      left: 0;
    }
    &:nth-of-type(10) {
      top: 270px;
      left: 0;
    }
    &:nth-of-type(11) {
      top: 300px;
      left: 0;
    }
    &:nth-of-type(12) {
      top: 330px;
      left: 0;
    }
    &:nth-of-type(13) {
      top: 360px;
      left: 0;
    }
    &:nth-of-type(14) {
      top: 390px;
      left: 0;
    }
    &:nth-of-type(15) {
      top: 420px;
      left: 0;
    }
    &:nth-of-type(16) {
      top: 450px;
      left: 0;
    }
    &:nth-of-type(17) {
      top: 480px;
      left: 0;
    }
    &:nth-of-type(18) {
      top: 510px;
      left: 0;
    }
    &:nth-of-type(19) {
      top: 540px;
      left: 0;
    }
    &:nth-of-type(20) {
      top: 570px;
      left: 0;
    }
    &:nth-of-type(21) {
      top: 600px;
      left: 0;
    }
    &:nth-of-type(22) {
      top: 600px;
      left: 30px;
    }
    &:nth-of-type(23) {
      top: 600px;
      left: 60px;
    }
    &:nth-of-type(24) {
      top: 600px;
      left: 90px;
    }
    &:nth-of-type(25) {
      top: 600px;
      left: 120px;
    }
    &:nth-of-type(26) {
      top: 600px;
      left: 150px;
    }
    &:nth-of-type(27) {
      top: 600px;
      left: 180px;
    }
    &:nth-of-type(28) {
      top: 600px;
      left: 210px;
    }
    &:nth-of-type(29) {
      top: 600px;
      left: 240px;
    }
    &:nth-of-type(30) {
      top: 600px;
      left: 270px;
    }
    &:nth-of-type(31) {
      top: 600px;
      left: 300px;
    }
    &:nth-of-type(32) {
      top: 600px;
      left: 330px;
    }
    &:nth-of-type(33) {
      top: 570px;
      right: 13px;
    }
    &:nth-of-type(34) {
      top: 540px;
      right: 13px;
    }
    &:nth-of-type(35) {
      top: 510px;
      right: 13px;
    }
    &:nth-of-type(36) {
      top: 480px;
      right: 13px;
    }
    &:nth-of-type(37) {
      top: 450px;
      right: 13px;
    }
    &:nth-of-type(38) {
      top: 420px;
      right: 13px;
    }
    &:nth-of-type(39) {
      top: 390px;
      right: 13px;
    }
    &:nth-of-type(40) {
      top: 360px;
      right: 13px;
    }
    &:nth-of-type(41) {
      top: 330px;
      right: 13px;
    }
    &:nth-of-type(42) {
      top: 360px;
      right: 13px;
    }
    &:nth-of-type(43) {
      top: 300px;
      right: 13px;
    }
    &:nth-of-type(44) {
      top: 270px;
      right: 13px;
    }
    &:nth-of-type(45) {
      top: 240px;
      right: 13px;
    }
    &:nth-of-type(46) {
      top: 210px;
      right: 13px;
    }
    &:nth-of-type(47) {
      top: 180px;
      right: 13px;
    }
    &:nth-of-type(48) {
      top: 150px;
      right: 13px;
    }
    &:nth-of-type(49) {
      top: 120px;
      right: 13px;
    }
    &:nth-of-type(50) {
      top: 90px;
      right: 13px;
    }
    &:nth-of-type(51) {
      top: 60px;
      right: 13px;
    }
    &:nth-of-type(52) {
      top: 30px;
      right: 13px;
    }
    &:nth-of-type(53) {
      top: 0px;
      right: 13px;
    }
    &:nth-of-type(54) {
      top: 0px;
      right: 13px;
    }
    &:nth-of-type(54) {
      top: 0px;
      right: 43px;
    }
    &:nth-of-type(55) {
      top: 0px;
      right: 73px;
    }
    &:nth-of-type(56) {
      top: 0px;
      right: 103px;
    }
    &:nth-of-type(57) {
      top: 0px;
      right: 133px;
    }
    &:nth-of-type(58) {
      top: 0px;
      right: 163px;
    }
    &:nth-of-type(59) {
      top: 0px;
      right: 193px;
    }
    &:nth-of-type(60) {
      top: 0px;
      right: 223px;
    }
    &:nth-of-type(61) {
      top: 0px;
      right: 253px;
    }
    &:nth-of-type(62) {
      top: 0px;
      right: 283px;
    }
    &:nth-of-type(63) {
      top: 0px;
      right: 313px;
    }
  }
}

@keyframes star {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
