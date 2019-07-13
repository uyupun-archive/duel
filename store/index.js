export const state = () => ({
  fightName: '',
  playerA: '',
  playerB: '',
  targetPlayer: '',
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
    state.playerB = player
  },
};
