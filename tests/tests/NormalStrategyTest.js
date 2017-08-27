 'use strict';
QUnit.module( "Normal strategy Tests" );

var game = new Game();

game.cellAgregator = new CellAgregator( game );
game.cellAgregator.Cell1 = "X";
game.cellAgregator.Cell2 = "X";
game.cellAgregator.Cell3 = 0;
game.cellAgregator.Cell4 = 0;
game.cellAgregator.Cell5 = 0;
game.cellAgregator.Cell6 = 0;
game.cellAgregator.Cell7 = 0;
game.cellAgregator.Cell8 = 0;

var ns = new NormalStrategy( game );


QUnit.test( "Normal strategy initialization", function ( assert ) {
  var ns = new NormalStrategy();
  assert.ok( ns instanceof NormalStrategy );
} );
QUnit.test( "Returns 3 whene 1 and 2 cells are marked", function ( assert ) {
  console.dir(ns.game.cellAgregator);
  assert.equal(3,ns.makeWay() );
} );
QUnit.test( "Returns 6 whene 4 and 5 cells are marked", function ( assert ) {
  ns.game.cellAgregator.Cell1 = 0;
  ns.game.cellAgregator.Cell2 = 0;
  ns.game.cellAgregator.Cell4 = "O";
  ns.game.cellAgregator.Cell5 = "O";
  assert.equal( ns.makeWay(), 6 );
} );