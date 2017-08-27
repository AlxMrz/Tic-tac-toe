 'use strict';
class HardStrategy extends DifficultStrategy {
  constructor( game ) {
    super( game );
    this.easyStrategy = new EasyStrategy( game );
    this.normalStrategy = new NormalStrategy( game );
  }
  makeWay() {
    return this.AIHardWay();
  }
  AIHardWay() {
    var aiWay = this.normalStrategy.AI_Way();
    var cellAgregator = this.game.cellAgregator;
    if ( cellAgregator.Cell5 === "X" ) {
      if ( aiWay === false ) {
        if ( this.game.Cell1 === 0 ) {
          aiWay = 1;
        } else if ( cellAgregator.Cell3 === 0 ) {
          aiWay = 3;
        } else if ( cellAgregator.Cell7 === 0 ) {
          aiWay = 7;
        } else if ( cellAgregator.Cell9 === 0 ) {
          aiWay = 9;
        } else {
          if ( cellAgregator.Cell2 === 0 ) {
            aiWay = 2;
          } else if ( cellAgregator.Cell4 === 0 ) {
            aiWay = 4;
          } else if ( cellAgregator.Cell6 === 0 ) {
            aiWay = 6;
          } else if ( cellAgregator.Cell8 === 0 ) {
            aiWay = 8;
          }
        }
      }
    }
    if ( !aiWay && cellAgregator.Cell5 === 0 ) {
      var aiWay = 5;
    }
    if ( !aiWay && cellAgregator.Cell5 === "O" ) {
      if ( aiWay === false ) {
        if ( cellAgregator.Cell1 === 'X' && cellAgregator.Cell8 === 'X' && cellAgregator.Cell7 === 0) {
          aiWay = 7;
        } else if ( cellAgregator.Cell8 === 'X' && cellAgregator.Cell2 === 'X' && cellAgregator.Cell3 === 0) {
          aiWay = 3;
        } else if ( cellAgregator.Cell2 === 'X' && cellAgregator.Cell7 === 'X' && cellAgregator.Cell1 === 0) {
          aiWay = 1;
        } else if ( cellAgregator.Cell3 === 'X' && cellAgregator.Cell8 === 'X' && cellAgregator.Cell9 === 0) {
          aiWay = 9;
        }  else if ( cellAgregator.Cell1 === "X" && cellAgregator.Cell3 === 0 ) {
          aiWay = 3;
        } else if ( cellAgregator.Cell3 === "X" && cellAgregator.Cell1 === 0 ) {
          aiWay = 1;
        } else if ( cellAgregator.Cell7 === "X" && cellAgregator.Cell9 === 0 ) {
          aiWay = 9;
        } else if ( cellAgregator.Cell9 === "X" && cellAgregator.Cell7 === 0 ) {
          aiWay = 7;
        } else {
          if ( cellAgregator.Cell2 === 0 ) {
            aiWay = 2;
          } else if ( cellAgregator.Cell4 === 0 ) {
            aiWay = 4;
          } else if ( cellAgregator.Cell6 === 0 ) {
            aiWay = 6;
          } else if ( cellAgregator.Cell8 === 0 ) {
            aiWay = 8;
          } else {
            aiWay = this.easyStrategy.makeWay()();
          } 
        }
        if ( cellAgregator.Cell1 === "X" && cellAgregator.Cell9 === "X" || cellAgregator.Cell3 === "X" && cellAgregator.Cell7 === "X" ) {
          if ( cellAgregator.Cell2 === 0 ) {
            aiWay = 2;
          } else if ( cellAgregator.Cell4 === 0 ) {
            aiWay = 4;
          } else if ( cellAgregator.Cell6 === 0 ) {
            aiWay = 6;
          } else if ( cellAgregator.Cell8 === 0 ) {
            aiWay = 8;
          }
        }

      }
    }
    return aiWay;
  }
}