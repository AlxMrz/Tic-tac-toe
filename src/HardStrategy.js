class HardStrategy {
  makeWay() {
    return this.AIHardWay();
  }
  AIHardWay() {
    if ( Cell5 === "X" ) {
      var aiWay = AI_Way();
      if ( aiWay === false ) {
        if ( Cell1 === 0 ) {
          aiWay = 1
        } else if ( Cell3 === 0 ) {
          aiWay = 3;
        } else if ( Cell7 === 0 ) {
          aiWay = 7;
        } else if ( Cell9 === 0 ) {
          aiWay = 9;
        } else {
          if ( Cell2 === 0 ) {
            aiWay = 2;
          } else if ( Cell4 === 0 ) {
            aiWay = 4;
          } else if ( Cell6 === 0 ) {
            aiWay = 6;
          } else if ( Cell8 === 0 ) {
            aiWay = 8;
          }
        }
      }
    }
    if ( Cell5 === 0 ) {
      var aiWay = 5;
    }
    if ( Cell5 === "O" ) {
      var aiWay = AI_Way();
      if ( aiWay === false ) {
        if ( Cell1 === "X" && Cell3 === 0 ) {
          aiWay = 3;
        } else if ( Cell3 === "X" && Cell1 === 0 ) {
          aiWay = 1;
        } else if ( Cell7 === "X" && Cell9 === 0 ) {
          aiWay = 9;
        } else if ( Cell9 === "X" && Cell7 === 0 ) {
          aiWay = 7;
        } else {
          if ( Cell2 === 0 ) {
            aiWay = 2;
          } else if ( Cell4 === 0 ) {
            aiWay = 4;
          } else if ( Cell6 === 0 ) {
            aiWay = 6;
          } else if ( Cell8 === 0 ) {
            aiWay = 8;
          } else
            aiWay = AI_Random();
        }
        if ( Cell1 === "X" && Cell9 === "X" || Cell3 === "X" && Cell7 === "X" ) {
          if ( Cell2 === 0 ) {
            aiWay = 2;
          } else if ( Cell4 === 0 ) {
            aiWay = 4;
          } else if ( Cell6 === 0 ) {
            aiWay = 6;
          } else if ( Cell8 === 0 ) {
            aiWay = 8;
          }
        }

      }
    }
  }
}