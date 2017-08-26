QUnit.module( "Hard strategy Tests" );


var game = new Game();

game.Cell1 = 0;
game.Cell2 = 0;
game.Cell3 = 0;
game.Cell4 = 0;
game.Cell5 = 'X';
game.Cell6 = 0;
game.Cell7 = 0;
game.Cell8 = 0;
var stub = sinon.stub( game, 'checkCell' ).callsFake( function () {
  return true;
} );
var hs = new HardStrategy( game );


QUnit.test( "Hard strategy initialization", function ( assert ) {
  var hs = new HardStrategy();
  assert.ok( hs instanceof HardStrategy );
} );
QUnit.test( "Returns 3 whene 1 and 2 cells are marked", function ( assert ) {
  var makedWay = hs.makeWay();
  assert.equal( makedWay, 1 );
} );
QUnit.test( "It markes cell5 when the last is empty", function ( assert ) {
  hs.game.Cell1=0;
  hs.game.Cell2=0;
  hs.game.Cell5=0;
  var makedWay = hs.makeWay();
  assert.equal( makedWay, 5 );
} );
