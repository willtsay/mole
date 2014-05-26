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
  this.completed = 0
}


Controller.prototype = {
  bindListeners: function(){
    $('body').keydown(this.whack.bind(this))
  },
  start: function(){
    this.board.createLevel(10, this.board.createBasicMonster)
    this.spawnMonstersLoop(this.view, this, this.board, 0)
    // this.despawnMonstersLoop(this.view, this, this.board, 0) 
  },
  spawnMonstersLoop: function(view, controller, board, i){
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
    var monsterLocation = Math.floor(Math.random()*9)
    var monster = board.level[i]
    view.spawn(monsterLocation, board.level[i])
    i++                     //  increment the counter
    if (i < board.level.length) {            //  if the counter < 10, call the loop function
      controller.spawnMonstersLoop(view, controller, board, i);             //  ..  again which will trigger another 
    }
    if (i==board.level.length) {
      controller.checkWin(4, view, controller)
    }
    }, board.level[i].delay)
  },
  checkWin: function(timer, view, controller){
    setTimeout(function(){
      if (timer>0){
        timer--
        controller.checkWin(timer, view, controller)
      }
      if (timer==0){
        controller.gameover = view.win()
      }
    }, 1000)
  },
  whack: function(e){
    if (this.view.hp <= 0 || this.gameover){
      return 0
    }
    else if (e.keyCode == 84){
      this.view.kill(0)
    }
    else if (e.keyCode == 89) {
      this.view.kill(1)
    }
    else if (e.keyCode == 85) {
      this.view.kill(2)
    }
    else if (e.keyCode == 71) {
      this.view.kill(3)

    }
    else if (e.keyCode == 72) {
      this.view.kill(4)

    }
    else if (e.keyCode == 74) {
      this.view.kill(5)

    }
    else if (e.keyCode == 66) {
      this.view.kill(6)

    }
    else if (e.keyCode == 78) {
      this.view.kill(7)

    }
    else if (e.keyCode == 77) {
      this.view.kill(8)

    }
    else{

    }
 }
   // despawnMonstersLoop: function(view, controller, board, i){
  //   setTimeout(function () {  // loop through level and do a .kill and such

  //     setTimeout(function() {view.dKill(i)}, 3000)
  //     i++
  //     if (i < board.level.length) {
  //       controller.despawnMonstersLoop(view,controller,board, i)
  //     }
  //     if (i == board.level.length){
  //       controller.checkCompleteLoop(view, controller)
  //     }
  //   }, board.level[i].delay)
  // },
  // checkCompleteLoop: function(view, controller){
  //   setTimeout(function() {
  //     controller.completed++
  //     if (view.hp > 0 && controller.completed <= 4){
  //       console.log(controller.completed)
  //       controller.checkCompleteLoop(view,controller)
  //     }
  //     if (controller.completed >= 4){
  //       console.log("hello")
  //       view.win()
  //     }
  //   }, 1000)
  // },
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