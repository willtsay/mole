View  = function(board){
  this.board = board
  this.hp = 5
  this.points = 0
  this.signature = 0
}

View.prototype = {
  spawn: function(location, monster){
    if (this.checkEmpty(location) === true){
      //ONLY HAPPENS IF A MONSTER ACTUALLY GETS PLACED
      monster.grid = location //OKAY MONSTER, YOUR TRUE LOCATION IS HERE.
      this.board.board[location] = monster
      monster.signature = this.signature
      $("#" + location).attr("signature", this.signature) // OKAY YOU APPEAR HERE
      var timer = monster.timer
      monster.startDespawn(monster,this, timer)
      this.signature ++
      $("#" + location.toString()).text("1") // OKAY YOU APPEAR HERE. 

    }
    else { 
      this.spawn(this.checkEmpty(location), monster)
    }
  },
  kill: function(id){
    if ($("#"+id).text() == ""){
      this.decreaseHp()
    }
    else {
      this.board.board[id].hp--
      if (this.board.board[id].hp == 0){
        $("#" + id).text("")
      }
      this.points++
      $("#points").text(this.points)
    }

    // NEED A KILL CHECK HERE. IF A GOOD KILL POINT INCREASE ETC ETC ETC.
  },
  // dKill: function(id){
  //   var monster = this.board.despawnList[id]
  //   if (this.board.despawnList[id].hp != 0){
  //     this.decreaseHp()
  //     if (this.board.board[monster.grid].signature == monster.signature){
  //       $("#"+monster.grid).text("")
  //     }

  //   }
  //   if (this.hp == 0){
  //     $("#death").text("GAME OVER")
  //     $("#gridplacer").css("display", "none")
  //   }
  // },
  checkEmpty: function(location){
    if ($("#" + location).text() == ""){
      return true
    }
    else {
      return Math.floor(Math.random()*9)
    }
  },
  decreaseHp: function(){
  if (this.hp > 0) {
    this.hp--
    $("#hp").text(this.hp)
  }
  if (this.hp == 0){
    $("#gridplacer").css("display", "none")
    $("#death").text("GAME OVER")
  }
  },
  win: function(){
    $("#gridplacer").css("display", "none")
    $("#death").text("LEVEL COMPLETE")
    return true
  }
}
