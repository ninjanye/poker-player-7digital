var request = require("request");
var assert = require("chai").assert;
var gameState = require("../game_state");
var player = require("../player");

describe("checking game state", function() {
  it("gets cards", function(done) {
    player.bet_request(gameState, function(bet) {
      assert.equal(bet, gameState.current_buy_in);
      done();
    });
  });
});
