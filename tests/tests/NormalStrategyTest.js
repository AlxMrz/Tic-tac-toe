QUnit.module( "Normal strategy Tests" );


var game = new Game();

game.Cell1 = "X";
game.Cell2 = "X";
game.Cell3 = 0;
game.Cell4 = 0;
game.Cell5 = 0;
game.Cell6 = 0;
game.Cell7 = 0;
game.Cell8 = 0;

var ns = new NormalStrategy( game );


QUnit.test( "Normal strategy initialization", function ( assert ) {
  var ns = new NormalStrategy();
  assert.ok( ns instanceof NormalStrategy );
} );
QUnit.test( "Returns 3 whene 1 and 2 cells are marked", function ( assert ) {
  console.log( ns.game );
  assert.equal( ns.makeWay(), 3 );
} );
QUnit.test( "Returns 6 whene 4 and 5 cells are marked", function ( assert ) {
  ns.game.Cell1 = 0;
  ns.game.Cell2 = 0;
  ns.game.Cell4 = "O";
  ns.game.Cell5 = "O";
  assert.equal( ns.makeWay(), 6 );
} );