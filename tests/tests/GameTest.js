 'use strict';
QUnit.module( "Game Tests" );
var game = new Game();
game.setAI( new ArtificialIntelligent( game ) );
let cell = class {
  constructor() {
    this.value = " ";
    this.id = 'cell1';
  }
}
var player = 'X';

QUnit.test( "Game Initialization", function ( assert ) {
  var game = new Game();
  assert.ok( game instanceof Game );
} );

QUnit.test( "MainProcess returns TRUE when cell is empty and can be marked", function ( assert ) {
  cell.value = " ";
  assert.ok( game.mainProcess( cell ) );
} );
QUnit.test( "MainProcess returns FALSE when cell is not empty and can not be marked", function ( assert ) {
  cell.value = "X";
  assert.notOk( game.mainProcess( cell ) );
} );
QUnit.test( "While mainProcess a value of a cell will be changed if it was empty", function ( assert ) {
  cell.value = " ";

  game.mainProcess( cell );
  console.log( cell.value );
  assert.equal( cell.value, 'X', 'Value of cell was changed to X' );
} );
QUnit.test( "While mainProcess a value of a cell will not be changed, because the cell is not empty", function ( assert ) {
  cell.value = "X";
  var gameResult = game.mainProcess( cell )
  assert.equal( cell.value, 'X', 'Value of cell was not changed' );
  assert.notOk( gameResult );
} );

/*QUnit.test( "Set background for game object", function ( assert ) {
  game.setBackGround( class {
    constructor() {
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
  } );
  assert.equal( game.getCell( 'Cell6' ), 'O', 'Setting backround for tests' );
} );*/
QUnit.test( "Make gameover as false,show message and reload page", function ( assert ) {
  cell.value = 'X';
  game.setBackGround( function () {
    this.Cell1 = 'X';
    this.Cell2 = 'X';
    this.Cell3 = 'X';
    this.Cell4 = 'X';
    this.Cell5 = 'X';
    this.Cell6 = 'X';
    this.Cell7 = 'X';
    this.Cell8 = 'X';
    this.Cell9 = 'X';
  } );
  var gameResult = game.mainProcess( cell )
  assert.equal( cell.value, 'X', 'Value of cell was changed to X' );
  assert.notOk( gameResult );
} );
QUnit.test( "Class Game returns diffcult lvl", function ( assert ) {
  var diflvl = game.getDifLvl();
  console.log( 'getDifLvl' in game );
  assert.equal( diflvl, 'Легко', 'Difficulty level' );
} );

