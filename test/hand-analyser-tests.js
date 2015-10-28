'use strict';
const assert = require('chai').assert;
const handAnalyser = require('../hand-analyser');

describe('handAnalyser', () => {
    it('returns false if no hnads', () => {
        var cards = [{rank: '5'}, {rank: '2'}];
        var bestHand = handAnalyser(cards, [{rank: '6'}]);
        assert.deepEqual({ hand: 0, fromHole: false}, bestHand);
    });

    describe('pair', ()=> {
        it('should report if pair from flop', () => {
            var flop = [{rank: '2'}, {rank: '2'}];
            var hole = [{rank: '6'}, {rank: '7'}];
            var bestHand = handAnalyser(hole, flop);
            assert.deepEqual({hand: 1, fromHole: false}, bestHand);
        });
        it('should report if pair from hole', () => {
            var hole = [{rank: '2'}, {rank: '2'}];
            var flop = [{rank: '6'}, {rank: '7'}];
            var bestHand = handAnalyser(hole, flop);
            assert.deepEqual({hand: 1, fromHole: true}, bestHand);
        });
    });
    describe('2- pair', ()=> {
        it('should report if 2 pair from flop', () => {
            var flop = [{rank: '2'}, {rank: '2'}, {rank: '3'}, {rank: '3'}];
            var hole = [{rank: '1'}, {rank:'6' }];
            var bestHand = handAnalyser(hole, flop);
            assert.deepEqual({hand: 2, fromHole: false}, bestHand);
        });
        it('should report if 2 pair from hole', () => {
            var flop = [{rank: '2'}, {rank: '2'}, {rank: '4'}, {rank: '3'}];
            var hole = [{rank: '6'}, {rank:'6' }];
            var bestHand = handAnalyser(hole, flop);
            assert.deepEqual({hand: 2, fromHole: true}, bestHand);
        });
    });
    describe('2- pair', ()=> {
        it('returns 3 if three of a kind', () => {
            var flop = [{rank: '2'}, {rank: '2'}, {rank: '2'}];
            var hole = [{rank: 7},{rank: 7}];
            var bestHand = handAnalyser(hole, flop);
            assert.deepEqual({hand: 3, fromHole: false}, bestHand);
        });
    });
});
