QUnit.module("General Tests");
var game = new Game();
    
let cell = class {
    constructor() {
        this.value = "X";
        this.id = 'cell1';
    }
}
var player = 'Y';

QUnit.test("Check Cell Function Test", function (assert) {
    
    assert.notOk(game.checkCell(cell));
    cell.value = ' ';
    assert.ok(game.checkCell(cell));
});
QUnit.test("Change Value Test", function (assert) {
    game.changeVal(cell);
    assert.ok(cell.value === 'Y');
});
QUnit.test("Change Cell Value Test", function (assert) {
    game.changeCell('cell2');
    assert.ok(game.Cell2 === 'Y');
});