/**
 * Основной класс приложения. Вызывает метод mainProcess() при нажатии на кнопку.
 * TODO: переписать класс в терминах Class es6
 */
function Game()
{
  var self = this;
  /**
   * Значения свободных ячеек
   * @type {number}
   */
  var Cell1 = 0;
  var Cell2 = 0;
  var Cell3 = 0;
  var Cell4 = 0;
  var Cell5 = 0;
  var Cell6 = 0;
  var Cell7 = 0;
  var Cell8 = 0;
  var Cell9 = 0;
  var gameOverWatcher = new GameOverWatcher( this );
  var logger = new Logger();
  var diflvl = document.getElementById( 'lvl' ) ? document.getElementById( 'lvl' ).value : 'Легко';
  //var AI = new ArtificialIntelligent( this );
  var gameover = false;
  /**
   *Начальный игрок
   * @type {string}
   */
  var player = "X";

  /**
   * Основной процесс в этой функции. Меняем значение ячейки
   * проверяем результат, выйграл ли игрок.
   * @param obj Текущая ячейка
   */
  this.mainProcess = function ( obj ) {
    if ( checkCell( obj ) ) {
      changeVal( obj );
    } else {
      return false;
    }
    gameOverWatcher.reloadPageIfGameIsOverAndSetGameOverInTrue();
    changePlayer();
    if ( gameover === false ) {
     // AI.makeWayByAI();
      gameOverWatcher.reloadPageIfGameIsOverAndSetGameOverInTrue();
    }
    changePlayer();
    return true;
  };
  /**
   * Проверяет, свободна ли ячейка
   * @param obj Текущая ячейка
   * @returns {boolean}
   */
  checkCell = function ( obj ) {
    if ( obj == null )
      return 'none';
    if ( obj.value !== " " )
      return false;
    return true;
  };

  /**
   * Меняет значение ячейки в системе
   * @param obj Текущая ячейка
   */
  changeVal = function ( obj ) {
    if ( obj == null ) {
      return false;
    }

    obj.value = player;
    this.changeCell( obj.id );
    return true;
  };

  /**
   * Меняет игрока
   * return void
   */
  changePlayer = function () {
    if ( player === "X" ) {
      player = "O";
    } else if ( player === "O" ) {
      player = "X";
    }
  };

  /**
   * Меняет значение ячейки на экране
   * @param cell
   */
  changeCell = function ( cell ) {
    switch ( cell ) {
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
  };

  this.setBackGround = function ( cellsValue, playerValue = 'X' ) {
    Cell1 = cellsValue.Cell1;
    Cell2 = cellsValue.Cell2;
    Cell3 = cellsValue.Cell3;
    Cell4 = cellsValue.Cell4;
    Cell5 = cellsValue.Cell5;
    Cell6 = cellsValue.Cell6;
    Cell7 = cellsValue.Cell7;
    Cell8 = cellsValue.Cell8;
    Cell9 = cellsValue.Cell9;
    player = playerValue;
  };
  this.getCell = function ( cellName ) {
    switch ( cellName ) {
      case 'Cell1' :
        return Cell1;
      case 'Cell2' :
        return Cell2;
      case 'Cell3' :
        return Cell3;
      case 'Cell4' :
        return Cell4;
      case 'Cell5' :
        return Cell5;
      case 'Cell6' :
        return Cell6;
      case 'Cell7' :
        return Cell7;
      case 'Cell8' :
        return Cell8;
    }
    ;
  };
  this.getPlayer = function () {
    return player;
  };
  this.getDifLvl = function () {
    return diflvl;
  };
  this.setGameOver = function ( set ) {
    gameover = set;
  };
}