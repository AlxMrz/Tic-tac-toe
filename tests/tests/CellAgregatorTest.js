'use strict';
QUnit.module( "Cell agregator Tests", {
  beforeEach: function () {
    // prepare something before each test
  },
} );

var cellAgregator = new CellAgregator();
QUnit.test( "Cell agregator Initialization", function ( assert ) {
  var cellAgregator = new CellAgregator( { } );
  assert.ok( cellAgregator instanceof CellAgregator );
} );

QUnit.test( "Set background for cellAgregator object", function ( assert ) {
  function cellArray() {
    this.Cell1 = 'X';
    this.Cell2 = 'X';
    this.Cell3 = 'X';
    this.Cell4 = 'X';
    this.Cell5 = 'X';
    this.Cell6 = 'O';
    this.Cell7 = 'X';
    this.Cell8 = 'X';
    this.Cell9 = 'X';
  }
  var cellsa = new cellArray();
  cellAgregator.setBackGround( new cellArray() );
  assert.equal( cellAgregator.getCell( 'Cell6' ), 'O', 'Setting backround for tests' );
} );

QUnit.test( "Class Game returns diffcult lvl", function ( assert ) {
  var diflvl = game.getDifLvl();
  assert.equal( diflvl, 'Легко', 'Difficulty level' );
} );

