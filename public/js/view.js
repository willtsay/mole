View  = function(board, controller){
  this.board = board
  this.hp = 5
  this.points = 0
  this.win = false
}

View.prototype = {
  spawn: function(location, monster){
    if (this.checkEmpty(location) === true){
      // set the monster grid location here?
      monster.grid = location
      $("#" + location.toString()).text("Ba")
    }
    else { 
      this.spawn(this.checkEmpty(location), monster)
    }
  },
  kill: function(id){
    if ($(id).text() == ""){
      this.decreaseHp()
    }
    else {
      this.points++
      $("#points").text(this.points)
    }
    if (this.hp == 0){
      $("#death").text("GAME OVER")
      $("#gridplacer").css("display", "none")
    }
    // NEED A KILL CHECK HERE. IF A GOOD KILL POINT INCREASE ETC ETC ETC.
    $(id).text("")
  },
  dKill: function(id){
    if ($(id).text() != ""){
      this.decreaseHp()
    }
    if (this.hp == 0){
      $("#death").text("GAME OVER")
      $("#gridplacer").css("display", "none")
    }
    $(id).text("")
  },
  checkEmpty: function(location){
    if ($("#" + location).text() == ""){
      return true
    }
    else {
      return Math.floor(Math.random()*9 )
    }
  },
  decreaseHp: function(){
    if (this.hp > 0) {
    this.hp--
    $("#hp").text(this.hp)
  }
  }
}
