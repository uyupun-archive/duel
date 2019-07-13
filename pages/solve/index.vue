<template>
  <div class="section">
    <div class="c-h20">
      <button type="button" class="btn btn-danger c-rotateZ180 d-inline-block" @click="notMakePeace('A')">和解しない</button>
      <button type="button" class="btn btn-primary c-rotateZ180 d-inline-block" @click="makePeace('A')">和解する</button>
    </div>
    <div class="c-playerA">プレイヤー: {{ $store.state.playerA }}</div>
    <p class="c-rotateZ90 c-text">和解しますか？</p>
    <div class="c-playerB">プレイヤー: {{ $store.state.playerB }}</div>
    <div class="c-b20">
      <button type="button" class="btn btn-primary c-translateY125 d-inline-block" @click="makePeace('B')">和解する</button>
      <button type="button" class="btn btn-danger c-translateY125 d-inline-block" @click="notMakePeace('B')">和解しない</button>
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
  height: 100vh;
  position: relative;
}

.c-rotateZ {
  &180 {
    transform: rotateZ(180deg) translateY(-125%);
  }
  &90 {
    transform: rotateZ(90deg);
  }
}

.c-playerA {
  position: absolute;
  top: 16vh;
  left: 50%;
  transform: rotate(180deg) translateX(50%);
}

.c-playerB {
  position: absolute;
  bottom: 16vh;
  left: 50%;
  transform: translateX(-50%);
}

.c-text {
  width: 100%;
  position: absolute;
  top: 50%;
  font-size: 30px;
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

.c-b20 {
  height: 20vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
