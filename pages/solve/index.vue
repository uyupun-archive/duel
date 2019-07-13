<template>
  <div class="section">
    <div class="c-h20">
      <button type="button" class="btn btn-primary c-translateY125 d-inline-block" @click="makePeace('A')">和解する</button>
      <button type="button" class="btn btn-danger" @click="notMakePeace('A')">和解しない</button>
    </div>
    <div class="c-h60">
      <p class="c-rotateZ90 c-font30">和解しますか？</p>
    </div>
    <div class="c-h20">
      <button type="button" class="btn btn-primary c-translateY125 d-inline-block" @click="makePeace('B')">和解する</button>
      <button type="button" class="btn btn-danger" @click="notMakePeace('B')">和解しない</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canMakePeaceA: false,
      canMakePeaceB: false,
      isSelectedA: false,
      isSelectedB: false,
    }
  },
  methods: {
    // 和解した場合
    makePeace(player) {
      if (player === 'A') {
        this.canMakePeaceA = true;
        this.isSelectedA = true;
      }
      else {
        this.canMakePeaceB = true;
        this.isSelectedB = true;
      }

      if (this.isSelectedA === true && this.isSelectedB === true) this.moveNextTurn();
    },
    // 和解しない場合
    notMakePeace(player) {
      if (player === 'A') {
        this.canMakePeaceA = false;
        this.isSelectedA = true;
      }
      else {
        this.canMakePeaceB = false;
        this.isSelectedB = true;
      }

      if (this.isSelectedA === true && this.isSelectedB === true) this.moveNextTurn();

    },
    // 次ターン or 終了画面へ遷移
    moveNextTurn() {
      if (this.canMakePeaceA === true && this.canMakePeaceB === true) {
        this.$router.push('/complete');
        return;
      }
      this.$router.push('/duel');
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  overflow: hidden;
}

.c-font30 {
  font-size: 30px;
}

.c-rotateZ {
  &180 {
    transform: rotateZ(180deg) translateY(-125%);
  }
  &90 {
    transform: rotateZ(90deg) translateX(50%);
  }
}

.c-translateY125 {
  transform: translateY(125%);
}

.c-h {
  &60 {
    height: 60vh;
  }
  &20 {
    height: 20vh;
  }
}
</style>
