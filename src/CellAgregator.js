class CellAgregator {
  constructor( game ) {
    this.game = game;
    this.Cell1 = 0;
    this.Cell2 = 0;
    this.Cell3 = 0;
    this.Cell4 = 0;
    this.Cell5 = 0;
    this.Cell6 = 0;
    this.Cell7 = 0;
    this.Cell8 = 0;
    this.Cell9 = 0;
  }
  changeCellValueIfNotMarked( cell ) {
    if ( this.isCellNotMarked( cell ) ) {
      this.changeVal( cell );
      return true;
    }
    return false;
  }
  /**
   * Проверяет, свободна ли ячейка
   * @param obj Текущая ячейка
   * @returns {boolean}
   */
  isCellNotMarked( cell ) {
    /*if( obj === null) {
      throw new Error("NULL object is given!");
    }*/
    if ( cell.value !== " " ) {
      return false;
    }
    return true;
  }

  /**
   * Меняет значение ячейки в системе
   * @param obj Текущая ячейка
   */
  changeVal( cell ) {
    if ( cell === null ) {
      return false;
    }

    cell.value = this.game.player;
    this.changeCell( cell.id );
    return true;
  }
  /**
   * Меняет значение ячейки на экране
   * @param cell
   */
  changeCell( cell ) {
    switch ( cell ) {
      case "cell1":
        this.Cell1 = this.game.player;
        break;
      case "cell2":
        this.Cell2 = this.game.player;
        break;
      case "cell3":
        this.Cell3 = this.game.player;
        break;
      case "cell4":
        this.Cell4 = this.game.player;
        break;
      case "cell5":
        this.Cell5 = this.game.player;
        break;
      case "cell6":
        this.Cell6 = this.game.player;
        break;
      case "cell7":
        this.Cell7 = this.game.player;
        break;
      case "cell8":
        this.Cell8 = this.game.player;
        break;
      case "cell9":
        this.Cell9 = this.game.player;
        break;
    }
  }

  setBackGround( cellsValue ) {
    this.Cell1 = cellsValue.Cell1;
    this.Cell2 = cellsValue.Cell2;
    this.Cell3 = cellsValue.Cell3;
    this.Cell4 = cellsValue.Cell4;
    this.Cell5 = cellsValue.Cell5;
    this.Cell6 = cellsValue.Cell6;
    this.Cell7 = cellsValue.Cell7;
    this.Cell8 = cellsValue.Cell8;
  }
  getCell( cellName ) {
    switch ( cellName ) {
      case 'Cell1':
        return this.Cell1;
      case 'Cell2' :
        return this.Cell2;
      case 'Cell3' :
        return this.Cell3;
      case 'Cell4' :
        return this.Cell4;
      case 'Cell5' :
        return this.Cell5;
      case 'Cell6' :
        return this.Cell6;
      case 'Cell7' :
        return this.Cell7;
      case 'Cell8' :
        return this.Cell8;
      case 'Cell9' :
        return this.Cell9;
    }
  }

}