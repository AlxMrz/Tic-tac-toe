
function Game()
{

    var self = this;
    /**
     * Значения свободных ячеек
     * @type {number}
     */
    this.Cell1 = 0;
    this.Cell2 = 0;
    this.Cell3 = 0;
    this.Cell4 = 0;
    this.Cell5 = 0;
    this.Cell6 = 0;
    this.Cell7 = 0;
    this.Cell8 = 0;
    this.Cell9 = 0;
    this.gameover = false;
    /**
     *Начальный игрок
     * @type {string}
     */
    this.player = "X";
    /**
     * @return void Пишет в логи значение каждой ячейки в каждом шаге.
     */
    this.inLog = function () {
        console.log("cell1: " + Cell1);
        console.log("cell2: " + Cell2);
        console.log("cell3: " + Cell3);
        console.log("cell4: " + Cell4);
        console.log("cell5: " + Cell5);
        console.log("cell6: " + Cell6);
        console.log("cell7: " + Cell7);
        console.log("cell8: " + Cell8);
        console.log("cell9: " + Cell9);
    }
    /**
     * Основной процесс в этой функции. Меняем значение ячейки
     * проверяем результат, выйграл ли игрок.
     * @param obj Текущая ячейка
     */
    this.mainProcess = function( obj ) {
        if (checkCell(obj)) {
            changeVal(obj);
        } else {
            return false;
        }
        isGameOver();
        changePlayer();
        if (gameover === false) {
            AI();
            isGameOver();
        }
        changePlayer();
    }
    /**
     * Проверяет, свободна ли ячейка
     * @param obj Текущая ячейка
     * @returns {boolean}
     */
    this.checkCell = function (obj) {
        if (obj.value !== " ")
            return false;
        return true;
    }

    /**
     * Меняет значение ячейки в системе
     * @param obj Текущая ячейка
     */
    this.changeVal = function (obj) {
        obj.value = player;
        this.changeCell(obj.id);
    }
    /**
     * Проверяет, занял ли игрок 3 клетки подряд.
     * @return void
     */
    this.isGameOver = function () {
        var check = checkIfWin();
        if (check === true) {
            alert("Выйграл игрок: " + player);
            location.reload();
            gameover = true;
        } else if (check === 'ничья') {
            alert("Да тут Ничья");
            location.reload();
            gameover = true;
        }

    }

    /**
     * Меняет игрока
     * return void
     */
    this.changePlayer = function () {
        if (player === "X") {
            player = "O";
        } else if (player === "O") {
            player = "X";
        }
    }

    /**
     * Меняет значение ячейки на экране
     * @param cell
     */
    this.changeCell = function (cell) {
        switch (cell) {
            case "cell1":
                this.Cell1 = player;
                break;
            case "cell2":
                this.Cell2 = player;
                break;
            case "cell3":
                this.Cell3 = player;
                break;
            case "cell4":
                this.Cell4 = player;
                break;
            case "cell5":
                this.Cell5 = player;
                break;
            case "cell6":
                this.Cell6 = player;
                break;
            case "cell7":
                this.Cell7 = player;
                break;
            case "cell8":
                this.Cell8 = player;
                break;
            case "cell9":
                this.Cell9 = player;
                break;
        }
    }

    /**
     * Проверяет игру на завершенность шагов.
     * @returns mixed Возвращает true в случае окончания свободных шагов и есть победитель
     * Возвращает false, если есть доступные шаги
     * Возвращает "ничья", если шагов свободных нет и победителя тоже
     */
    function checkIfWin() {
        if (areThreeCellsInARowCompleted()) {
            return true;
        } else if (areThereAnyFreeCells()) {
            return false;
        }
        return 'ничья';
    }
    function areThreeCellsInARowCompleted() {
        return is123Equivalent() ||
                is456Equivalent() ||
                is789Equivalent() ||
                is147Equivalent() ||
                is258Equivalent() ||
                is369Equivalent() ||
                is159Equivalent() ||
                is357Equivalent();
    }
    function is123Equivalent() {
        return (Cell1 === Cell2 && Cell2 === Cell3 && (Cell3 === player));
    }
    function is456Equivalent() {
        return (Cell4 === Cell5 && Cell5 === Cell6 && (Cell6 === player));
    }
    function is789Equivalent() {
        return (Cell2 === Cell5 && Cell5 === Cell8 && (Cell8 === player));
    }

    function is147Equivalent() {
        return (Cell1 === Cell4 && Cell4 === Cell7 && (Cell7 === player));
    }
    function is258Equivalent() {
        return (Cell2 === Cell5 && Cell5 === Cell8 && (Cell8 === player));
    }
    function is369Equivalent() {
        return (Cell3 === Cell6 && Cell6 === Cell9 && (Cell9 === player));
    }

    function is159Equivalent() {
        return (Cell1 === Cell5 && Cell5 === Cell9 && (Cell9 === player));
    }
    function is357Equivalent() {
        return (Cell3 === Cell5 && Cell5 === Cell7 && (Cell7 === player));
    }

    function areThereAnyFreeCells() {
        return (Cell1 == 0 || Cell2 == 0 || Cell3 == 0 ||
                Cell4 == 0 || Cell5 == 0 || Cell6 == 0 ||
                Cell7 == 0 || Cell8 == 0 || Cell9 == 0);
    }
    /**
     * Имитация Искуственного интеллекта
     * @constructor
     */
    function AI() {
        var diflvl = document.getElementById('lvl').value;
        if (diflvl === "Легко") {
            aiWay = AI_Random();
        }
        if (diflvl === "Нормально") {

            var aiWay = AI_Way();
            if (aiWay === false) {
                aiWay = AI_Random();
            }

        }

        if (diflvl === "Сложно") {
            if (Cell5 === "X") {
                var aiWay = AI_Way();
                if (aiWay === false) {
                    if (Cell1 === 0) {
                        aiWay = 1
                    } else if (Cell3 === 0) {
                        aiWay = 3;
                    } else if (Cell7 === 0) {
                        aiWay = 7;
                    } else if (Cell9 === 0) {
                        aiWay = 9;
                    } else {
                        if (Cell2 === 0) {
                            aiWay = 2;
                        } else if (Cell4 === 0) {
                            aiWay = 4;
                        } else if (Cell6 === 0) {
                            aiWay = 6;
                        } else if (Cell8 === 0) {
                            aiWay = 8;
                        }
                    }
                }
            }
            if (Cell5 === 0) {
                var aiWay = 5;
            }
            if (Cell5 === "O") {
                var aiWay = AI_Way();
                if (aiWay === false) {
                    if (Cell1 === "X" && Cell3 === 0) {
                        aiWay = 3;
                    } else if (Cell3 === "X" && Cell1 === 0) {
                        aiWay = 1;
                    } else if (Cell7 === "X" && Cell9 === 0) {
                        aiWay = 9;
                    } else if (Cell9 === "X" && Cell7 === 0) {
                        aiWay = 7;
                    } else {
                        if (Cell2 === 0) {
                            aiWay = 2;
                        } else if (Cell4 === 0) {
                            aiWay = 4;
                        } else if (Cell6 === 0) {
                            aiWay = 6;
                        } else if (Cell8 === 0) {
                            aiWay = 8;
                        } else
                            aiWay = AI_Random();
                    }
                    if (Cell1 === "X" && Cell9 === "X" || Cell3 === "X" && Cell7 === "X") {
                        if (Cell2 === 0) {
                            aiWay = 2;
                        } else if (Cell4 === 0) {
                            aiWay = 4;
                        } else if (Cell6 === 0) {
                            aiWay = 6;
                        } else if (Cell8 === 0) {
                            aiWay = 8;
                        }
                    }

                }
            }
        }
        var obj = document.getElementById("cell" + aiWay);
        switch (aiWay) {
            case 1:
                obj.value = player;
                this.Cell1 = player;
                break;
            case 2:
                obj.value = player;
                this.Cell2 = player;
                break;
            case 3:
                obj.value = player;
                this.Cell3 = player;
                break;
            case 4:
                obj.value = player;
                this.Cell4 = player;
                break;
            case 5:
                obj.value = player;
                this.Cell5 = player;
                break;
            case 6:
                obj.value = player;
                this.Cell6 = player;
                break;
            case 7:
                obj.value = player;
                this.Cell7 = player;
                break;
            case 8:
                obj.value = player;
                this.Cell8 = player;
                break;
            case 9:
                obj.value = player;
                this.Cell9 = player;
                break;
        }

    }
    /**
     * Ищет ячейки, которые могут завершить игру, т.е. 2 занятые подряд от любого игрока
     * @returns {*}
     * @constructor
     */
    function AI_Way() {
// Первая горизонтальная строка
        if (Cell1 === Cell2 && Cell2 !== 0 && Cell3 === 0) {
            return aiWay = 3;
        } else if (Cell1 === Cell3 && Cell3 !== 0 && Cell2 === 0) {
            return aiWay = 2;
        } else if (Cell2 === Cell3 && Cell3 !== 0 && Cell1 === 0) {
            return aiWay = 1;
        }
// Вторая горизонтальная строка
        else if (Cell4 === Cell5 && Cell5 !== 0 && Cell6 === 0) {
            return aiWay = 6;
        } else if (Cell5 === Cell6 && Cell6 !== 0 && Cell4 === 0) {
            return aiWay = 4;
        } else if (Cell4 === Cell6 && Cell6 !== 0 && Cell5 === 0) {
            return aiWay = 5;
        }
//Третья горизонтальная строка
        else if (Cell7 === Cell8 && Cell8 !== 0 && Cell9 === 0) {
            return aiWay = 9;
        } else if (Cell7 === Cell9 && Cell9 !== 0 && Cell8 === 0) {
            return aiWay = 8;
        } else if (Cell8 === Cell9 && Cell9 !== 0 && Cell7 === 0) {
            return aiWay = 7;
        }
//Первая вертикальная строка
        else if (Cell1 === Cell4 && Cell4 !== 0 && Cell7 === 0) {
            return aiWay = 7;
        } else if (Cell1 === Cell7 && Cell7 !== 0 && Cell4 === 0) {
            return aiWay = 4;
        } else if (Cell4 === Cell7 && Cell7 !== 0 && Cell1 === 0) {
            return aiWay = 1;
        }
//Вторая вертикальная строка
        else if (Cell2 === Cell5 && Cell5 !== 0 && Cell8 === 0) {
            return aiWay = 8;
        } else if (Cell2 === Cell8 && Cell8 !== 0 && Cell5 === 0) {
            return aiWay = 5;
        } else if (Cell5 === Cell8 && Cell8 !== 0 && Cell2 === 0) {
            return aiWay = 2;
        }
//Третья вертикальная строка
        else if (Cell3 === Cell6 && Cell6 !== 0 && Cell9 === 0) {
            return aiWay = 9;
        } else if (Cell3 === Cell9 && Cell9 !== 0 && Cell6 === 0) {
            return aiWay = 6;
        } else if (Cell6 === Cell9 && Cell9 !== 0 && Cell3 === 0) {
            return aiWay = 3;
        }
//Первая наклонная строка
        else if (Cell1 === Cell5 && Cell5 !== 0 && Cell9 === 0) {
            return aiWay = 9;
        } else if (Cell1 === Cell9 && Cell9 !== 0 && Cell5 === 0) {
            return aiWay = 5;
        } else if (Cell5 === Cell9 && Cell9 !== 0 && Cell1 === 0) {
            return aiWay = 1;
        }
//Вторая наклонная строка
        else if (Cell3 === Cell5 && Cell5 !== 0 && Cell7 === 0) {
            return aiWay = 7;
        } else if (Cell3 === Cell7 && Cell7 !== 0 && Cell5 === 0) {
            return aiWay = 5;
        } else if (Cell5 === Cell7 && Cell7 !== 0 && Cell3 === 0) {
            return aiWay = 3;
        } else {
            return false
        }
        ;
    }
    /**
     * Делает рандомный ход в свободную клетку
     * Используется при слабом уровне сложности и при не возможности расчитать дальнейший ход
     * @returns {number}
     */
    function AI_Random() {
        for (var x = true; x === true; ) {
            var aiWay = Math.floor((Math.random() * 9) + 1);
            var obj = document.getElementById("cell" + aiWay);
            if (checkCell(obj) === false) {
                continue;
            } else {
                x = false;
            }
        }
        return aiWay;
    }
}
var game = new Game();