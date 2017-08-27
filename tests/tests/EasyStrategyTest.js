 'use strict';
QUnit.module( "Easy strategy Tests" );

QUnit.test( "Easy strategy initialization", function ( assert ) {
  var es = new EasyStrategy();
  assert.ok( es instanceof EasyStrategy );
} );
QUnit.test( "Test of making a way with AI_Random method", function ( assert ) {
  var es = new EasyStrategy();
  es.game = new Game();
  es.game.cellAgregator = new CellAgregator( es.game );
  var stub = sinon.stub( es.game.cellAgregator, 'isCellNotMarked' ).callsFake( function () {
    return true;
  } );
  es.cell = class {
    constructor() {
      this.value = " ";
      this.id = 'cell1';
    }
  }
  var result = es.game.cellAgregator.isCellNotMarked();

  assert.ok( result );
  var madedWay = es.makeWay();
  assert.ok( madedWay < 10 && madedWay > 0 );

} );