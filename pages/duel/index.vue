<template>
  <div class="section">
    <b-modal id="turn-modal" hide-header hide-footer>
      <h3 class="h3 text-center">{{ $store.state.turnCount }}ターン目</h3>
      <b-button variant="primary" block @click="$bvModal.hide('turn-modal')">OK</b-button>
    </b-modal>

    <b-modal id="card-modal" hide-header hide-footer>
      <p class="text-center">{{ setCard() }}</p>
      <b-button variant="primary" block @click="$bvModal.hide('card-modal'); addCardContent()">OK</b-button>
    </b-modal>

    <div class="reverse c-h15">
      <p class="mb-2">
        <span>{{ $store.state.playerA }}: </span>
        <span v-if="isTargetPlayerA" :class="{ 'text-danger': timeLimit }">{{ count }}</span>
      </p>
      <button class="btn btn-primary" :disabled="!isTargetPlayerA" @click="endOpinion()">主張終了</button>
    </div>

    <div class="deck c-h70" @click="draw()">
      <div class="card-contents card-right" :class="{ 'card-rotate': isTargetPlayerA }">{{ cardContent }}</div>
      <div class="card-contents card-left" :class="{ 'card-rotate': isTargetPlayerA }">{{ cardContent }}</div>
    </div>

    <div class="c-h15 c-translateY50">
      <p class="mb-2">
        <span>{{ $store.state.playerB }}: </span>
        <span v-if="!isTargetPlayerA" :class="{ 'text-danger': timeLimit }">{{ count }}</span>
      </p>
      <button class="btn btn-primary" :disabled="isTargetPlayerA" @click="endOpinion()">主張終了</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTargetPlayerA: this.$store.state.isTargetPlayerA,
      canDraw: true,
      count: 30,
      timer: null,
      timeLimit: false,
      cards: [
        '🤖「「これ」という単語を使わないで」',
        '🤖「「えっと」という単語を使わないで」',
        '🤖「一人称を普段使わないものにして話して」',
        '🤖「あなたが思う「関西人」の口調で話して」',
        '🤖「何かの歌にのせて喋って」',
        '🤖「英語っぽく日本語で喋って」',
        '🤖「何かのモノマネをしながら喋って」',
        '🤖「会話のどこかで生き物の鳴き真似をして」',
        '🤖「限界まで低い声で喋って」',
        '🤖「限界まで高い声で喋って」',
        '🤖「鼻をつまんで喋って」',
      ],
      cardContent: ""
    }
  },
  created() {
    this.shuffleCards();
  },
  mounted() {
    this.showTurnModal();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    // ターンの表示
    showTurnModal() {
      this.$bvModal.show('turn-modal')
    },
    // ドローする
    draw() {
      if (this.canDraw === true) this.$bvModal.show('card-modal');
      if (this.canDraw) {
        this.canDraw = false;
      }
    },
    // カウントダウン
    countDown() {
      this.timer = setInterval(() => {
        if (--this.count < 0) this.timeLimit = true;
        if (this.timeLimit) this.rotatePatramp();
      }, 1000);
    },
    // タイマーの削除
    clearTimer() {
      clearInterval(this.timer);
    },
    // 話の終了
    endOpinion() {
      this.$store.commit('setTurnCount', this.$store.state.turnCount);
      this.$store.commit('setIsTargetPlayerA', !this.isTargetPlayerA);
      this.$router.push('/solve');
    },
    // カードのシャッフル
    shuffleCards() {
      if (this.$store.state.turnCount !== 1) return;
      for (let m = this.cards.length - 1; m > 0; m--) {
        const i = Math.floor(Math.random() * m);
        [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
      }
    },
    // カードをセット
    setCard() {
      const index = this.$store.state.turnCount - 1 % this.cards.length;
      return this.cards[index]
    },
    // カード内容を追加
    addCardContent() {
      this.countDown();
      this.cardContent = this.setCard()
    },
    // パトランプの制御
    rotatePatramp() {
      this.$axios.get('/');
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  overflow: hidden;
}

.deck {
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  border: 8px solid #333333;
  box-sizing: border-box;
  background: repeating-linear-gradient(45deg, #dc143c 0px, #dc143c 15px, #fffafa 15px, #fffafa 30px);
}

.reverse {
  transform:rotate(180deg) translateY(10%);
}

.c-h {
  &15 {
    height: 15vh;
  }
  &70 {
    height: 70vh;
  }
}

.c-translateY {
  &50 {
    transform: translateY(10%);
  }
}

.card {
  &-contents {
    position: absolute;
    background-color: white;
    writing-mode: vertical-rl;
    text-align: left;
    font-size: 20px;
  }
  &-right {
    top: 0;
    right: 0;
    margin: 20px 20px 80px;
  }
  &-left {
    bottom: 0;
    left: 0;
    margin: 80px 20px 20px;
    transform: rotate(180deg);
  }
}
</style>
