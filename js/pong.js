(function() {
  if (typeof Pong === "undefined") {
    window.Pong = {};
  }

  // Make a config class for custom configuration.

  var Game = Pong.Game = function (context, width, height) {
  	this.context = context;
  	this.width = width;
  	this.height = height;
  	this.board = new Game.Board(this.context, this.width, this.height);
  	this.leftPaddle = new Game.Paddle(this.context, this.board, true);
  	this.rightPaddle = new Game.Paddle(this.context, this.board, false);
  	this.ball = new Game.Ball(this.context, this.board);
  	this.score = [0, 0];
  };

  Game.prototype.step = function () {
  	// Change the positions of the ball based on velocity and directions
  	// Paddles positions will be changed using user input
  	// Make sure that the game will be rendered every interval step.
  	// 

  };

  Game.prototype.render = function () {
  		this.board.render();
  		this.leftPaddle.render();
  		this.rightPaddle.render();
  		this.ball.render();	
  };

  Game.prototype.start = function () {
  	this.pongInterval = window.setInterval(this.step.bind(this), 150);
  };

  Game.prototype.isNotOver = function () {
  	return this.score[0] < 10 && this.score[1] < 10;
  };

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

  	// Middle line
  	this.context.beginPath();
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

  var Paddle = Game.Paddle = function (context, board, leftOrRight) {
  	this.context = context;
  	this.board = board;
  	this.left = leftOrRight;
  	this.posY = this.board.height / 2;
  };

  // Make sure to draw two paddles.
  // Whether the paddle is drawn left or right, depends on the posX.
  Paddle.prototype.render = function () {
  	var posX = this.left ? 0 : this.board.width - 13;
  	this.context.beginPath();
  	this.context.rect(posX, this.posY, 13, 40);
  	this.context.fillStyle = "#f2f20c";
 		this.context.fill();
  };

  Paddle.prototype.move = function () {

  };

  Paddle.prototype.isHit = function () {

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

  Ball.prototype.move = function () {

  };

  Ball.prototype.randomDirection = function () {

  };

}) ();
