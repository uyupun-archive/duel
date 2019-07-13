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
  }
};
