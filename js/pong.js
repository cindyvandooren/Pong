(function() {
  if (typeof Pong === "undefined") {
    window.Pong = {};
  }

  var Game = Pong.Game = function (context, width, height) {
  	this.context = context;
  	this.width = width;
  	this.height = height;
  	this.board = new Game.Board(this.context, this.width, this.height);
  	// this.leftPaddle = new Game.Paddle(this.context, this.board);
  	// this.rightPaddle = new Game.Paddle(this.context, this.board);
  	this.ball = new Game.Ball(this.context, this.board);
  };

  Game.prototype.step = function () {
  	this.board.render();
  	// this.leftPaddle.render();
  	// this.rightPaddle.render();
  	this.ball.render();
  }

  // Make a config class for custom configuration.
  // Think about how to pass less things from game to board to ball.
  // Possible to let the ball not be a part of the board?

  // Game needs a step method that should render the board and the movement of the ball every time

  // Game needs a ball and two paddles
  // Make a ball, board and a paddle class
  // Make a game over method



  var Board = Game.Board = function (context, width, height) {
  	this.context = context;
    this.width = width;
    this.height = height;
  };

  Board.prototype.render = function () {
  	var middleX = this.width / 2;
  	var middleY = this.height / 2;

  	// Background of the board
  	this.context.beginPath();
  	this.context.rect(0, 0, this.width, this.height);	
  	this.context.fillStyle = "#078C22";
  	this.context.fill();
  	this.context.stroke();

  	// Middle line
  	this.context.strokeStyle = "#ffffff";
  	this.context.lineWidth = 5;
  	this.context.moveTo(middleX, 0);
  	this.context.lineTo(middleX, this.height);

  	// Left gutter
  	this.context.moveTo(15, 0);
  	this.context.lineTo(15, this.height);

  	// Right gutter
  	this.context.moveTo(this.width - 15, 0);
  	this.context.lineTo(this.width - 15, this.height);
  	this.context.stroke();

  	// Outer middle circle
  	this.context.beginPath();
  	this.context.arc(middleX, middleY, 80, 0, 2 * Math.PI, false);
  	this.context.strokeStyle = "#ffffff";
  	this.context.stroke();

  	// Inner middle circle
  	this.context.beginPath();
  	this.context.arc(middleX, middleY, 20, 0, 2 * Math.PI, false);
  	this.context.fillStyle = "#ffffff";
  	this.context.fill();
  };

  var Paddle = Game.Paddle = function (context, board) {
  	this.context = context;
  	this.board = board;
  };

  // Make sure to draw two paddles. Different approach when left and right paddle.
  Paddle.prototype.render = function () {
  	this.context.strokeStyle = "#f2f20c";
  	this.context.lineWidth = 10;

  };

  var Ball = Game.Ball = function (context, board) {
  	this.context = context;
  	this.board = board;
  	this.posX = this.board.width / 2;
  	this.posY = this.board.height / 2;
  };

  Ball.prototype.render = function () {
  	this.context.beginPath();
  	this.context.arc(this.posX, this.posY, 20, 0, 2 * Math.PI, false);
  	this.context.fillStyle = "#f2f20c";
  	this.context.fill();
  };

}) ();
