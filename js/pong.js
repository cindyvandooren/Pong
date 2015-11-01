(function() {
  if (typeof Pong === "undefined") {
    window.Pong = {};
  }

  var Game = Pong.Game = function () {
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 400;
  Game.BG_COLOR = "#078C22";
  Game.LINE_COLOR = "#ffffff";
  Game.L_CIRCLE_R = 80;
  Game.S_CIRCLE_R = 20;
  Game.BALL_COLOR = "#F2F20C";

}) ();
