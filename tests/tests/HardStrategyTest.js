'use strict';
QUnit.module( "Hard strategy Tests" );


var game = new Game();
game.cellAgregator = new CellAgregator( game );

game.cellAgregator.Cell1 = 0;
game.cellAgregator.Cell2 = 0;
game.cellAgregator.Cell3 = 0;
game.cellAgregator.Cell4 = 0;
game.cellAgregator.Cell5 = 'X';
game.cellAgregator.Cell6 = 0;
game.cellAgregator.Cell7 = 0;
game.cellAgregator.Cell8 = 0;
var stub = sinon.stub( game, 'checkCell' ).callsFake( function () {
  return true;
} );
var hs = new HardStrategy( game );


QUnit.test( "Hard strategy initialization", function ( assert ) {
  var hs = new HardStrategy();
  assert.ok( hs instanceof HardStrategy );
} );
QUnit.test( "Returns 3 when 1 and 2 cells are marked", function ( assert ) {
  hs.game.cellAgregator.Cell1 = 'X';
  hs.game.cellAgregator.Cell2 = 'X';
  hs.game.cellAgregator.Cell5 = 0;
  var makedWay = hs.makeWay();
  assert.equal( makedWay, 3 );
} );
QUnit.test( "It markes cell5 when the last is empty", function ( assert ) {
  hs.game.cellAgregator.Cell1 = 0;
  hs.game.cellAgregator.Cell2 = 0;
  hs.game.cellAgregator.Cell5 = 0;
  var makedWay = hs.makeWay();
  assert.equal( makedWay, 5 );
} );
