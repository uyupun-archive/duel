<template>
  <div>
    <h1 class="c-h1">Duel</h1>
    <div class="c-logo">ロゴ</div>
    <input type="text" placeholder="争いの種" class="form-control c-textBox" v-model="fightName" />
    <button type="button" class="btn btn-primary" :disabled="validateFightName()" @click="standby()">スタンバイ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fightName: '',
    }
  },
  methods: {
    validateFightName() {
      if (this.fightName.length >= 5 && this.fightName.length <= 20) return false;
      return true;
    },
    standby() {
      this.$store.commit('setFightName', this.fightName);
      this.$router.push('/duel');
    }
  }
}
</script>

<style lang="scss" scoped>
.c-h1 {
  padding-top: 30px;
  margin-bottom: 50px;
}

.c-logo {
  margin-bottom: 30px;
}

.c-textBox {
  margin-bottom: 30px;
}
</style>
