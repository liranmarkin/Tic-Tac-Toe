var app = angular.module("game",[]);

app.controller('gameController',function() {
    this.board = [0,0,0,0,0,0,0,0,0];
    this.clicks = [0,0,0,0,0,0,0,0,0];
    //get display of cells
	this.getPic = function(cell){
		switch(this.board[cell]){
			case 0:
				return 'pics/blank.png';
				break;
			case 1:
				return 'pics/X_pic.png';
				break;
			case 2:
				return 'pics/O_pic.png';
				break;
			default:
				return 'pics/fail.png';
		}
	};
	
	//check winner
	this.checkWinner = function(){
		for(i = 0;i<3;i++){
			var victory = true;
			for(j=1;j<3;j++){
				if(this.board[3*i+j] != this.board[3*i+(j-1)] || this.board[3*i+j] == 0){
					victory = false;
				}
			}
			if(victory)
				return true;
		}
		for(j = 0;j<3;j++){
			var victory = true;
			for(i=1;i<3;i++){
				if(this.board[3*i+j] != this.board[3*(i-1)+j] || this.board[3*i+j] == 0){
					victory = false;
				}
			}
			if(victory)
				return true;
		}
		if(this.board[0] != 0 && this.board[0] == this.board[4] && this.board[0] == this.board[8])
			return true;
		if(this.board[2] != 0 && this.board[2] == this.board[4] && this.board[2] == this.board[6])
			return true;
		return false;
	};
	
	//action
    this.move = function(cell){
    	this.clicks[cell]++;
    	if(this.clicks[0] == 1 && this.clicks[1] == 2 && this.clicks[2] == 3 && this.clicks[3] == 4 && this.clicks[4] == 5 && this.clicks[5] == 6 && this.clicks[6] == 7 && this.clicks[7] == 8 && this.clicks[8] == 9 )
    		alert("oogachaka");
		if(this.board[cell] != 0)
			return false;
		this.board[cell] = 1;
		if(this.checkWinner()){
			alert("Player Won");
			this.refresh();
		}
		else{
			this.board[this.computerPlay()] = 2;
			/*
			var mov = this.computerPlay();
			if(mov == -1){
				for(var i = 0;i<this.board.length;i++)
					if(this.board[i] == 0){
						this.board[i] =2;
						break;
					}
			}
			else
				this.board[mov] = 2;
				*/
			if(this.checkWinner()){
				alert("Computer Won");
				this.refresh();
			}
		}
	};
	//refresh button
	this.refresh = function(){
		this.board = [0,0,0,0,0,0,0,0,0];
    	this.clicks = [0,0,0,0,0,0,0,0,0];
	};
	
	this.boardFilled = function(){
		var ans = 0;
		for(var i = 0;i<this.board.length;i++){
			if(board[i] != 0)
				ans++;
		}
		return ans;
	};
	
	this.factor = function(num){
		return (num == 0)? 1 : factor(num-1)*num;
	};
	
	this.stateAI = function(turn){
		var points = 0,boardfilled = this.boardFilled();
		if(this.checkWinner()) return this.factor(boardfilled-1);
		for(var i = 0;i<this.board.length;i++){
			if(this.board[i] == 0){
				this.board[i] = turn;
				var newPoints = this.stateAI(3-turn);
				points += newPoints;
				this.board[i] = 0;
			}
		}
		return points;
	};
	
	this.computerPlay = function(){
		var bestI,maxPoints=0;
		for(var i = 0;i<this.board.length;i++){
			if(this.board[i] == 0){
				this.board[i] = 2;
				var points = this.stateAI(1);
				if(points > maxPoints){
						maxPoints = points;
						bestI = i;
				}
				this.board[i] = 0;
			}
		}
		return bestI;
	};
	
	/*
	//computer play the best choice
	this.computerPlay=function(){
		if(this.checkWinner())
			return -1;
		var lastI = 0;
		for(var i = 0;i<this.board.length;i++){
			if(this.board[i] == 0){
				lastI = i;
				this.board[i] = 2;
				if(!this.playerPlay()){
					this.board[i] = 0;
					return i;
				}
				this.board[i] = 0;
			}
		}
		return -1;
	};
	//AI for what the player would do
	this.playerPlay=function(){
		if(this.checkWinner())
			return false;
		var lastI = 0;
		for(var i = 0;i<this.board.length;i++){
			if(this.board[i] == 0){
				lastI = i;
				this.board[i] = 1;
				if(this.computerPlay() == -1){
					this.board[i] = 0;
					return true;
				}
				this.board[i] = 0;
			}
		}
		return false;
	};
	*/
});

