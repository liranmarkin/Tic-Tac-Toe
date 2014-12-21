var app = angular.module("game",[]);
var board = [0,0,0,0,0,0,0,0,0];
var turn = 1;
function move(cell){
	if(board[cell] != 0)
		return false;
	board[cell] = turn;
	turn = 3-turn;
}
