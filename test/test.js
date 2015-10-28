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
    })
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

describe("when I have a pair", function(){
  it("plays a pair", function(done){
    gameState.players[1].hole_cards = [
      {"rank": "2","suit": "hearts"},
      {"rank": "2","suit": "spades"}];
    player.bet_request(gameState, function(bet){
      assert.equal(bet, gameState.current_buy_in);
      done();
    })
  });
  it("plays a high pair all in", function(done){
    gameState.players[1].hole_cards = [
      {"rank": "K","suit": "hearts"},
      {"rank": "K","suit": "spades"}];
    player.bet_request(gameState, function(bet){
      assert.equal(bet, 999999);
      done();
    })
  });
})
