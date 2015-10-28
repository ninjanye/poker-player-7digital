var request = require("request");
var assert = require("chai").assert;
var gameState = require("../game_state");
var player = require("../player");

describe("playing highcard greater than 10", function(){

  it("does not play a high card of 9", function(done){
    gameState.players[1].hole_cards = [
      {"rank": "6","suit": "hearts"},
      {"rank": "9","suit": "spades"}];
    player.bet_request(gameState, function(bet){
      assert.equal(bet, 0);
      done();
    });
  });

  ['10', 'J', 'Q', 'K', 'A'].forEach((card) => {
    it(`plays hands with a card ${card} or greater`, function(done) {
      gameState.players[1].hole_cards = [
        {"rank": "6","suit": "hearts"},
        {"rank": `${card}`, "suit": "spades"}];
      player.bet_request(gameState, function(bet) {
        assert.equal(bet, gameState.current_buy_in);
        done();
      });
    })
  });
});

describe("current buy in is greater than 30% of pot", function(){
  it("does not play on high card", function(done){
    gameState.current_buy_in = 40;
    gameState.players[1].stack = 100
    gameState.players[1].hole_cards = [
      {"rank": "6","suit": "hearts"},
      {"rank": "K","suit": "spades"}];
    player.bet_request(gameState, function(bet){
      assert.equal(bet, 0);
      done();
    });
  });
});


describe("when I have a pair", function(){
  it("plays a pair", function(done){
    gameState.players[1].hole_cards = [
      {"rank": "2","suit": "hearts"},
      {"rank": "2","suit": "spades"}];
    player.bet_request(gameState, function(bet){
      assert.equal(bet, gameState.current_buy_in);
      done();
    });
  });
  it("plays a high pair all in", function(done){
    gameState.players[1].hole_cards = [
      {"rank": "K","suit": "hearts"},
      {"rank": "K","suit": "spades"}];
    player.bet_request(gameState, function(bet){
      assert.equal(bet, 999999);
      done();
    });
  });
});

describe("when I have matching suits", function(){
  it("calls", function(done){
    gameState.players[1].hole_cards = [
      {"rank": "2","suit": "hearts"},
      {"rank": "4","suit": "hearts"}];
    player.bet_request(gameState, function(bet){
      assert.equal(bet, gameState.current_buy_in);
      done();
    })
  });

  it("raises on high suits", function(done){
    gameState.players[1].hole_cards = [
      {"rank": "J","suit": "hearts"},
      {"rank": "4","suit": "hearts"}];
    player.bet_request(gameState, function(bet){
      assert.equal(bet, gameState.minimum_raise);
      done();
    })
  });
});

describe('when things break', () => {
    it('folds', (done) => {
        player.bet_request({random: 'crap'}, (bet) => {
            assert.equal(bet, 0);
            done();
        });
    });
});
