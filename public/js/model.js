// on key press "kill" something

Monster = function(grid, delay, keycode, hp, timer){
  this.dead = false
  this.hp = 1  // number of times it needs to get hit before it dies
  this.timer = 4 //amount of time it stays out
  this.grid = grid//where to spawn it 
  this.keycode = null //what button kills it\
  this.delay = delay
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
}





Board.prototype = {
  createBasicMonster: function(grid, delay){
    var monster = new Monster(grid, delay)
    return monster
  },
  createLevel: function(amount){
    for ( var times= 0; times <= amount; times++ ) {
      var grid = Math.floor(Math.random()*9)
      this.level.push(this.createBasicMonster(grid, Math.floor(Math.random()*2500 + 500)))
    }
  }
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



