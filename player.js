
module.exports = {

  VERSION: "Feeling lucky...",

  bet_request: function(game_state, bet) {
    bet(game_state.current_buy_in);
  },

  showdown: function(game_state) {

  }
};
