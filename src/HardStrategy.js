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
    console.log(aiWay);
    if ( this.game.Cell5 === "X" ) {
      if ( aiWay === false ) {
        if ( this.game.Cell1 === 0 ) {
          aiWay = 1;
        } else if ( this.game.Cell3 === 0 ) {
          aiWay = 3;
        } else if ( this.game.Cell7 === 0 ) {
          aiWay = 7;
        } else if ( this.game.Cell9 === 0 ) {
          aiWay = 9;
        } else {
          console.log("IMPOSSIBLE");
          if ( this.game.Cell2 === 0 ) {
            aiWay = 2;
          } else if ( this.game.Cell4 === 0 ) {
            aiWay = 4;
          } else if ( this.game.Cell6 === 0 ) {
            aiWay = 6;
          } else if ( this.game.Cell8 === 0 ) {
            aiWay = 8;
          }
        }
      }
    }
    console.log(aiWay);
    if ( this.game.Cell5 === 0 ) {
      var aiWay = 5;
    }
    console.log(aiWay);
    if ( this.game.Cell5 === "O" ) {
      console.log("I AM HERE");
      if ( aiWay === false ) {
        if ( this.game.Cell1 === "X" && this.game.Cell3 === 0 ) {
          aiWay = 3;
        } else if ( this.game.Cell3 === "X" && this.game.Cell1 === 0 ) {
          aiWay = 1;
        } else if ( this.game.Cell7 === "X" && this.game.Cell9 === 0 ) {
          aiWay = 9;
        } else if ( this.game.Cell9 === "X" && this.game.Cell7 === 0 ) {
          aiWay = 7;
        } else {
          if ( this.game.Cell2 === 0 ) {
            aiWay = 2;
          } else if ( this.game.Cell4 === 0 ) {
            aiWay = 4;
          } else if ( this.game.Cell6 === 0 ) {
            aiWay = 6;
          } else if ( this.game.Cell8 === 0 ) {
            aiWay = 8;
          } else {
            aiWay = this.easyStrategy.makeWay()();
          } 
        }
        if ( this.game.Cell1 === "X" && this.game.Cell9 === "X" || this.game.Cell3 === "X" && this.game.Cell7 === "X" ) {
          if ( this.game.Cell2 === 0 ) {
            aiWay = 2;
          } else if ( this.game.Cell4 === 0 ) {
            aiWay = 4;
          } else if ( this.game.Cell6 === 0 ) {
            aiWay = 6;
          } else if ( this.game.Cell8 === 0 ) {
            aiWay = 8;
          }
        }

      }
    }
    console.log('AIWAY BY HARD: ' + aiWay);
    return aiWay;
  }
}