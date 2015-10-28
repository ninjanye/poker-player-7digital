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

    hand = findMany(ranked, hand, hole, tally, 2, 1);

    hand = findTwoPair(ranked, hand, hole, tally);

    hand = findMany(ranked, hand, hole, tally, 3, 3);

    return hand;
};
function findTwoPair (ranked, hand, hole, tally) {
    var has2Pair = ranked.filter((x) => tally[x] === 2).length > 1;
    if (! has2Pair) {
        return hand;
    }
    ranked.forEach((x) => {
        if (tally[x] === 2) {
           hand.hand = 2;
            if(hole.map((c)=> {return c.rank;}).indexOf(x) != -1) {
                hand.fromHole = true;
            }
        }
    });
    return hand;
}

function findMany (ranked, hand, hole, tally, number, score) {
    ranked.forEach((x) => {
        if (tally[x] === number) {
           hand.hand = score;
            if(hole.map((c)=> {return c.rank;}).indexOf(x) != -1) {
                hand.fromHole = true;
            }
        }
    });
    return hand;
}
