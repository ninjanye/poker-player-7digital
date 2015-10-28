'use strict';
const assert = require('chai').assert;
const handAnalyser = require('../hand-analyser');

describe('handAnalyser', () => {
    it('returns false if no hnads', () => {
        var cards = [{rank: '5'}, {rank: '2'}];
        var bestHand = handAnalyser(cards);
        assert.equal(0, bestHand);
    });
    it('should report if pair', () => {
        var cards = [{rank: '2'}, {rank: '2'}];
        var bestHand = handAnalyser(cards);
        assert.equal(1, bestHand);
    });
    it('should report if 2 pair', () => {
        var cards = [{rank: '2'}, {rank: '2'}, {rank: '3'}, {rank: '3'}];
        var bestHand = handAnalyser(cards);
        assert.equal(2, bestHand);
    });
    it('returns 3 if three of a kind', () => {
        var cards = [{rank: '2'}, {rank: '2'}, {rank: '2'}];
        var bestHand = handAnalyser(cards);
        assert.equal(3, bestHand);
    });
    it('returns 4 if straight', () => {
        var cards = [{rank: '2'}, {rank: '3'}, {rank: '4'}];
        var bestHand = handAnalyser(cards);
        assert.equal(3, bestHand);
    });
});
