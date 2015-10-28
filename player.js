
module.exports = {

  VERSION: "Yo yo yo... we win!!!!",

  bet_request: function(game_state, bet) {
    var current_buy_in = game_state.current_buy_in;
    console.log("Current buy in is " + current_buy_in);

    var index = game_state.in_action;
    var cards = game_state.players[index].hole_cards;
    var cardValues = cards.map(card => { return card.rank; });
    console.log(cardValues);
    if (cardValues.indexOf('10') > -1 ||
        cardValues.indexOf('J') > -1 ||
        cardValues.indexOf('Q') > -1 ||
        cardValues.indexOf('K') > -1 ||
        cardValues.indexOf('A') > -1) {
      return bet(current_buy_in);
    }

    return bet(0);
  },

  showdown: function(game_state) {

  }
};
