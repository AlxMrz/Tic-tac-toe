QUnit.module("Game");


QUnit.test("Game Initialization", function( assert ) {
  var game = new Game();
  assert.ok(game instanceof Game);
});