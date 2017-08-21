QUnit.module("General Tests");

var Cell1 = 0,
    Cell2 = 0,
    Cell3 = 0,
    Cell4 = 0,
    Cell5 = 0,
    Cell6 = 0,
    Cell7 = 0,
    Cell8 = 0,
    Cell9 = 0,
    gameover = false;
    
let cell = class {
    constructor() {
        this.value = "X";
        this.id = 'cell1';
    }
}
var player = 'Y';

QUnit.test("Check Cell Function Test", function (assert) {
    assert.notOk(checkCell(cell));
    cell.value = ' ';
    assert.ok(checkCell(cell));
});
QUnit.test("Change Value Test", function (assert) {
    changeVal(cell);
    assert.ok(cell.value === 'Y');
});
QUnit.test("Change Cell Value Test", function (assert) {
    changeCell('cell2');
    console.log(Cell1);
    assert.ok(Cell2 === 'Y');
});