<template>
  <div>
    <h1 class="h1">Duel</h1>
    <input type="text" placeholder="争いの種" class="form-control" v-model="fightName" />
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
