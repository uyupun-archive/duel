export const state = () => ({
  fightName: '',
  playerA: '',
  playerB: '',
  isTargetPlayerA: true,
  turnCount: 1
});

export const mutations = {
  setFightName (state, fightName) {
    state.fightName = fightName;
  },
  setPlayerA (state, player) {
    state.playerA = player;
  },
  setPlayerB (state, player) {
    state.playerB = player;
  },
  setIsTargetPlayerA (state, player) {
    state.isTargetPlayerA = player;
  },
  setTurnCount (state, count) {
    state.turnCount = ++count;
  },
  setInitialize (state) {
    state.fightName = '';
    state.playerA = '';
    state.playerB = '';
    state.isTargetPlayerA = true;
    state.turnCount = 1;
  }
}
