$(document).ready(function() {
  var board = new Board()
  var view = new View(board)
  var controller = new Controller(view, board)
  controller.bindListeners()
  controller.start()
})

Controller = function(view,board){
  this.gameover = false
  this.view = view
  this.board = board
}


Controller.prototype = {
  bindListeners: function(){
    $('body').keydown(this.whack.bind(this))
  },
  start: function(){
    this.board.createLevel(9, this.board.createBasicMonster)
    this.spawnMonstersLoop(this.view, this, this.board, 0)
    this.despawnMonstersLoop(this.view, this, this.board, 0)
  },
  spawnMonstersLoop: function(view, controller, board, i){
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
    var monsterLocation = board.level[i].grid
    view.spawn(monsterLocation, board.level[i])          //  your code here
    i++                     //  increment the counter
    if (i < board.level.length) {            //  if the counter < 10, call the loop function
      controller.spawnMonstersLoop(view, controller, board, i);             //  ..  again which will trigger another 
    }                        //  ..  setTimeout(
    }, board.level[i].delay)
  },
  despawnMonstersLoop: function(view, controller, board, i){
    setTimeout(function () {  // loop through level and do a .kill and such
      var monsterLocation = board.level[i].grid // look at the first thing in despawn
      setTimeout(function() {view.dKill("#"+ monsterLocation)}, 3000)
      i++
      if (i < board.level.length) {
        controller.despawnMonstersLoop(view,controller,board, i)
      }
    }, board.level[i].delay)
  },
  whack: function(e){
    if (this.view.hp <= 0 || this.view.win){
      return 0
    }
    else if (e.keyCode == 84){
      this.view.kill("#0")
    }
    else if (e.keyCode == 89) {
      this.view.kill("#1")
    }
    else if (e.keyCode == 85) {
      this.view.kill("#2")
    }
    else if (e.keyCode == 71) {
      this.view.kill("#3")

    }
    else if (e.keyCode == 72) {
      this.view.kill("#4")

    }
    else if (e.keyCode == 74) {
      this.view.kill("#5")

    }
    else if (e.keyCode == 66) {
      this.view.kill("#6")

    }
    else if (e.keyCode == 78) {
      this.view.kill("#7")

    }
    else if (e.keyCode == 77) {
      this.view.kill("#8")

    }
    else{

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