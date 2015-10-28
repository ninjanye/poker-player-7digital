'use strict';
module.exports = function (hole, flop) {
    let cards = hole.concat(flop);
    let hand = { hand: 0, fromHole: false};
    let cardValues = cards.map(card => { return card.rank; });
    var tally = cardValues.reduce(function (acc, value) {
       if (!acc[value]) {
           acc[value] = 0;
       }
       acc[value] ++;
       return acc;
    }, {});


    var ranked = Object.keys(tally).sort(function (a, b) {
        if(tally[a] < tally[b]) {
            return 1;
        }
        if(tally[a] == tally[b]) {
            return 0;
        } else { return -1; }
    });
    var hasPair = ranked.some((x)=> tally[x] === 2);
    var hasTwoPair = ranked
        .filter((x) => tally[x] === 2).length > 1;
    var hasThreeOfAKind = ranked.some((x)=> tally[x] === 3);

    if(hasThreeOfAKind) {
        hand.hand = 3;
        return hand;
    }

    if (hasTwoPair) {
        hand.hand = 2;
        return hand;
    }

    if (hasPair) {
        hand.hand = 1;
        return hand;
    }
    return hand;
};
