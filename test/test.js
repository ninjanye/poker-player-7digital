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
  })

  it("plays hands with a card 10 or greater", function(done) {
    gameState.players[1].hole_cards = [
      {"rank": "6","suit": "hearts"},
      {"rank": "10","suit": "spades"}];
    player.bet_request(gameState, function(bet) {
      assert.equal(bet, gameState.current_buy_in);
      done();
    });
  });

  it("plays hands with a card J or greater", function(done) {
    gameState.players[1].hole_cards = [
      {"rank": "6","suit": "hearts"},
      {"rank": "J","suit": "spades"}];
    player.bet_request(gameState, function(bet) {
      assert.equal(bet, gameState.current_buy_in);
      done();
    });
  });

  it("plays hands with a card Q or greater", function(done) {
    gameState.players[1].hole_cards = [
      {"rank": "6","suit": "hearts"},
      {"rank": "Q","suit": "spades"}];
    player.bet_request(gameState, function(bet) {
      assert.equal(bet, gameState.current_buy_in);
      done();
    });
  });

  it("plays hands with a card K or greater", function(done) {
    gameState.players[1].hole_cards = [
      {"rank": "6","suit": "hearts"},
      {"rank": "K","suit": "spades"}];
    player.bet_request(gameState, function(bet) {
      assert.equal(bet, gameState.current_buy_in);
      done();
    });
  });

  it("plays hands with a card A or greater", function(done) {
    gameState.players[1].hole_cards = [
      {"rank": "6","suit": "hearts"},
      {"rank": "A","suit": "spades"}];
    player.bet_request(gameState, function(bet) {
      assert.equal(bet, gameState.current_buy_in);
      done();
    });
  });

})
