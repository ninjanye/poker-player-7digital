
module.exports = {

  VERSION: "Play always",

  bet_request: function(game_state, bet) {
    var current_buy_in = game_state.current_buy_in;

    console.log("Current buy in is " + current_buy_in);

    bet(current_buy_in);
  },

  showdown: function(game_state) {

  }
};
