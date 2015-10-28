const highCards = ['10', 'J', 'Q', 'K', 'A'];
const pairHighCards = highCards.concat(['8','9']);

module.exports = {

  VERSION: "the eagle has landed",

  bet_request: function(game_state, bet) {
    var current_buy_in = game_state.current_buy_in;
    console.log("Current buy in is " + current_buy_in);

    var index = game_state.in_action;
    var cards = game_state.players[index].hole_cards;
    var cardValues = cards.map(card => { return card.rank; });
    var hasHighCard = highCards.some((value) => {return cardValues.indexOf(value) > -1});
    var isPair = cardValues[0] === cardValues[1];
    var isHighPair = isPair &&  pairHighCards.indexOf(cardValues[0]) > -1;
    console.log('has high card: ' + hasHighCard);

    if (isHighPair) {
      return bet(999999);
    }
    if (hasHighCard) {
      return bet(current_buy_in);
    }
    if (isPair) {
      return bet(current_buy_in);
    }


    return bet(0);
  },

  showdown: function(game_state) {

  }
};
