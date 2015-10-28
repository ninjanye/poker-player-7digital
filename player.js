const highCards = ['10', 'J', 'Q', 'K', 'A'];
const pairHighCards = highCards.concat(['8','9']);
const reraiseCards = ['Q', 'K', 'A'];
const playableCards = ['8', '9', '10', 'J', 'Q', 'K', 'A'];


module.exports = {

  VERSION: "OVER CONFIDENT",

  bet_request: function(game_state, bet) {
    return bet(999999);
  },
  showdown: function(game_state) {

  }
};
