QUnit.module("Game Tests");
var game = new Game();
    
let cell = class {
    constructor() {
        this.value = " ";
        this.id = 'cell1';
    }
}
var player = 'Y';

QUnit.test("Game Initialization", function( assert ) {
  var game = new Game();
  assert.ok(game instanceof Game);
});

QUnit.test("MainProcess returns TRUE when cell is empty and can be marked", function (assert) {
       cell.value = " ";
       assert.ok(game.mainProcess(cell));
});
QUnit.test("MainProcess returns FALSE when cell is not empty and can not be marked", function (assert) {
       cell.value = "X";
       assert.notOk(game.mainProcess(cell));
});
QUnit.test("While mainProcess a value of a cell will be changed if it was empty", function (assert) {
       cell.value = " ";
       game.mainProcess(cell)
       assert.equal(cell.value,'X','Value of cell was changed to X');
});
QUnit.test("While mainProcess a value of a cell will be changed if it was empty", function (assert) {
       cell.value = " ";
       game.mainProcess(cell)
       assert.equal(cell.value,'X','Value of cell was changed to X');
});
