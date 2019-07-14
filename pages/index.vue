<template>
  <div>
    <img src="@/assets/logo.png" alt="ロゴ" class="c-logo">
    <h1 class="c-h1">Duel</h1>
    <input type="text" placeholder="争いの種" class="form-control mb-4" v-model="fightName" />
    <div class="row mb-5">
      <div class="col pr-2">
        <input type="text" class="form-control" placeholder="プレイヤーA" v-model="playerA">
      </div>
      <div class="col pl-2">
        <input type="text" class="form-control" placeholder="プレイヤーB" v-model="playerB">
      </div>
    </div>
    <button type="button" class="btn btn-primary" :disabled="validateForm()" @click="standby()">スタンバイ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fightName: '',
      playerA: '',
      playerB: '',
    }
  },
  methods: {
    // バリデーション
    validateForm() {
      if (this.fightName.length < 5 || this.fightName.length > 20) return true;
      if (this.playerA.length < 1 || this.playerA.length > 15) return true;
      if (this.playerB.length < 1 || this.playerB.length > 15) return true;
      return false;
    },
    //　スタンバイ
    standby() {
      this.$store.commit('setFightName', this.fightName);
      this.$store.commit('setPlayerA', this.playerA);
      this.$store.commit('setPlayerB', this.playerB);
      this.$router.push('/duel');
    }
  }
}
</script>

<style lang="scss" scoped>
.c-h1 {
  margin-bottom: 30px;
  font-size: 50px;
  &::first-letter {
    color: #C00000;
    font-size: 60px;
  }
}

.c-logo {
  width: 50%;
  max-width: 150px;
  margin-top: 30px;
  margin-bottom: 30px;
  transform: rotate(0);
  animation: logo 5s infinite linear;
}

@keyframes logo {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
