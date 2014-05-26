// on key press "kill" something

Monster = function(delay, keycode, hp, timer){
  this.dead = false
  this.hp = 1,  // number of times it needs to get hit before it dies
  this.timer = 3 //amount of time it stays out
  this.grid = null//where to spawn it 
  this.keycode = null //what button kills it
  this.signature = null
  this.delay = delay
  this.startDespawn = function(monster, view, timer){
    if (timer == 0 && monster.hp != 0){
      view.decreaseHp()

      if (view.hp==0){

      }
      if ($("#" + monster.grid).attr("signature") == monster.signature){
        $("#" + monster.grid).text("")
      }
    }
    setTimeout(function(){
      timer--
      if(timer >= 0){
        monster.startDespawn(monster, view, timer)
      } 
    }, 1000)

  }
}

Monster.prototype = {
  alive: function(){
    if (this.hp == 0){
      this.dead = true      
    }
  },
  
}



Board = function(){
  this.level = []
  this.complete = false
  this.board = [0,0,0,0,0,0,0,0,0]
  this.despawnList = []
}





Board.prototype = {
  createBasicMonster: function(delay){
    var monster = new Monster(delay)
    return monster
  },
  createLevel: function(amount){
    for ( var times= 0; times <= amount; times++ ) {
      this.level.push(this.createBasicMonster(Math.floor(Math.random()*2500 + 500)))
    }
  },
}


//0 b 66 
//1 h 72 
//2 u 85
//3 n 78 
//4 j 74 
//5 i 73
//6 m 77 
//7 k 75 
//8 l 76



