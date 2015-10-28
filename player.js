const highCards = ['10', 'J', 'Q', 'K', 'A'];
const pairHighCards = highCards.concat(['8','9']);

module.exports = {

  VERSION: "noahs ark",

  bet_request: function(game_state, bet) {
      try {
        var current_buy_in = game_state.current_buy_in;
        console.log("Current buy in is " + current_buy_in);

        var index = game_state.in_action;
        var cards = game_state.players[index].hole_cards;
        var stack = game_state.players[index].stack;
        var cardValues = cards.map(card => { return card.rank; });
        var hasHighCard = highCards.some((value) => {return cardValues.indexOf(value) > -1});
        var isPair = cardValues[0] === cardValues[1];
        var isHighPair = isPair &&  pairHighCards.indexOf(cardValues[0]) > -1;
        var isSuited = cards[0].suit === cards[1].suit;
        console.log('has high card: ' + hasHighCard);

        if (isHighPair) {
          return bet(999999);
        }
        if (isSuited && hasHighCard) {
          //Check against the flop and only bet if we have something
          return bet(game_state.minimum_raise);
        }

        if (hasHighCard) {
          if ((current_buy_in / stack) > 0.3) {
            return bet(0);
          }
          return bet(current_buy_in);
        }

        if (isSuited) {
          console.log('**********');
          console.log((current_buy_in / stack));
          if ((current_buy_in / stack) > 0.3) {
            return bet(0);
          }
          return bet(current_buy_in);
        }

        if (isPair) {
          return bet(current_buy_in);
        }

        return bet(0);
      } catch (err) {
        return bet(0);
      }
  },
  showdown: function(game_state) {

  }
};
