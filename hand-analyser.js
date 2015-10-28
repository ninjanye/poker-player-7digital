'use strict';
module.exports = function (cards) {
    let cardValues = cards.map(card => { return card.rank; });
    var tally = cardValues.reduce(function (acc, value) {
       if (!acc[value]) {
           acc[value] = 0;
       }
       acc[value] ++;
       return acc;
    }, {});
    var hasPair = Object.keys(tally).some((x)=> tally[x] === 2);
    var hasTwoPair = Object.keys(tally)
        .filter((x) => tally[x] === 2).length > 1;
    var hasThreeOfAKind = Object.keys(tally).some((x)=> tally[x] === 3);
    
    if(hasThreeOfAKind) {
        return 3;
    }

    if (hasTwoPair) {
        return 2;
    }

    if (hasPair) {
        return 1;
    }
    return 0;
};
