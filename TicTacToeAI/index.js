function makeMove(value) {
	if (value == "TopLeft") {
		if (document.getElementById('TopLeft').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('TopLeft').value = "X";
			changeTurn();
		}
		else if (document.getElementById('TopLeft').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('TopLeft').value = "O";
			changeTurn();
		}
	}
	else if (value == "TopMiddle") {
		if (document.getElementById('TopMiddle').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('TopMiddle').value = "X";
			changeTurn();
		}
		else if (document.getElementById('TopMiddle').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('TopMiddle').value = "O";
			changeTurn();
		}
	}
	else if (value == "TopRight") {
		if (document.getElementById('TopRight').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('TopRight').value = "X";
			changeTurn();
		}
		else if (document.getElementById('TopRight').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('TopRight').value = "O";
			changeTurn();
		}
	}
	if (value == "MiddleLeft") {
		if (document.getElementById('MiddleLeft').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('MiddleLeft').value = "X";
			changeTurn();
		}
		else if (document.getElementById('MiddleLeft').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('MiddleLeft').value = "O";
			changeTurn();
		}
	}
	if (value == "MiddleMiddle") {
		if (document.getElementById('MiddleMiddle').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('MiddleMiddle').value = "X";
			changeTurn();
		}
		else if (document.getElementById('MiddleMiddle').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('MiddleMiddle').value = "O";
			changeTurn();
		}
	}
	if (value == "MiddleRight") {
		if (document.getElementById('MiddleRight').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('MiddleRight').value = "X";
			changeTurn();
		}
		else if (document.getElementById('MiddleRight').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('MiddleRight').value = "O";
			changeTurn();
		}
	}
	if (value == "BottomLeft") {
		if (document.getElementById('BottomLeft').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('BottomLeft').value = "X";
			changeTurn();
		}
		else if (document.getElementById('BottomLeft').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('BottomLeft').value = "O";
			changeTurn();
		}
	}
	if (value == "BottomMiddle") {
		if (document.getElementById('BottomMiddle').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('BottomMiddle').value = "X";
			changeTurn();
		}
		else if (document.getElementById('BottomMiddle').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('BottomMiddle').value = "O";
			changeTurn();
		}
	}
	if (value == "BottomRight") {
		if (document.getElementById('BottomRight').value == "" && document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
			document.getElementById('BottomRight').value = "X";
			changeTurn();
		}
		else if (document.getElementById('BottomRight').value == "" && document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
			document.getElementById('BottomRight').value = "O";
			changeTurn();
		}
	}

	checkForWin();

	if(document.getElementById('playerCount').innerHTML=="1" && document.getElementById('playerType').innerHTML=="X" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
		oAIMove();
	}
	else if(document.getElementById('playerCount').innerHTML=="1" && document.getElementById('playerType').innerHTML=="O" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
		xAIMove();
	}
	checkForWin();
}

function changeTurn() {
	if (document.getElementById('TurnIndicator').innerHTML == "X's Turn") {
		document.getElementById('TurnIndicator').innerHTML = "O's Turn";
	}
	else {
		document.getElementById('TurnIndicator').innerHTML = "X's Turn";
	}
	incrementTurnCount();
}

function setPlayerCount(value){
/*	if(value=="0 Player"){
		viewBoard();
		document.getElementById('0player').style.display='none';
		document.getElementById('1player').style.display='none';
		document.getElementById('2player').style.display='none';
		document.getElementById('MiddleMiddle').value="X";
		document.getElementById('TurnCount').innerHTML="1";
		document.getElementById('TurnIndicator').innerHTML="O's Turn";
		oAIMove();
		xAIMove();
		oAIMove();
		xAIMove();
		oAIMove();
		xAIMove();
		oAIMove();
		xAIMove();
		checkForWin();
	}*/
	if(value=="1 Player"){
		document.getElementById('playerCount').innerHTML="1";
		document.getElementById('playerX').style.display='inline';
		document.getElementById('playerO').style.display='inline';
		//document.getElementById('0player').style.display='none';
		document.getElementById('1player').style.display='none';
		document.getElementById('2player').style.display='none';
	}
	if(value=="2 Player"){
		document.getElementById('playerCount').innerHTML="2";
		//document.getElementById('0player').style.display='none';
		document.getElementById('1player').style.display='none';
		document.getElementById('2player').style.display='none';
		viewBoard();
	}
}

function viewBoard() {

	document.getElementById('playerX').style.display = 'none';
	document.getElementById('playerO').style.display = 'none';
	document.getElementById('TurnIndicator').style.display = 'inline';
	document.getElementById('gameBoard').style.display = 'flex';
	document.getElementById('TopLeft').style.display = 'inline';
	document.getElementById('TopMiddle').style.display = 'inline';
	document.getElementById('TopRight').style.display = 'inline';
	document.getElementById('MiddleLeft').style.display = 'inline';
	document.getElementById('MiddleMiddle').style.display = 'inline';
	document.getElementById('MiddleRight').style.display = 'inline';
	document.getElementById('BottomLeft').style.display = 'inline';
	document.getElementById('BottomMiddle').style.display = 'inline';
	document.getElementById('BottomRight').style.display = 'inline';

}

function setPlayerType(value) {

	if (value == "Play as X") {
		document.getElementById('playerType').innerHTML = "X";
		viewBoard();
	}
	else if(value=="Play as O"){
		document.getElementById('playerType').innerHTML="O";
		document.getElementById('MiddleMiddle').value="X";
		document.getElementById('TurnIndicator').innerHTML="O's Turn";
		document.getElementById('TurnCount').innerHTML="1";
		viewBoard();
		document.getElementById('MiddleMiddle').value = "X";
	}


}

function incrementTurnCount() {
	var TC = document.getElementById('TurnCount').innerHTML;
	if (TC == "0") {
		document.getElementById('TurnCount').innerHTML = "1";
	}
	else if (TC == "1") {
		document.getElementById('TurnCount').innerHTML = "2";
	}
	else if (TC == "2") {
		document.getElementById('TurnCount').innerHTML = "3";
	}
	else if (TC == "3") {
		document.getElementById('TurnCount').innerHTML = "4";
	}
	else if (TC == "4") {
		document.getElementById('TurnCount').innerHTML = "5";
	}
	else if (TC == "5") {
		document.getElementById('TurnCount').innerHTML = "6";
	}
	else if (TC == "6") {
		document.getElementById('TurnCount').innerHTML = "7";
	}
	else if (TC == "7") {
		document.getElementById('TurnCount').innerHTML = "8";
	}
	else if (TC == "8") {
		document.getElementById('TurnCount').innerHTML = "9";
	}
}

function tryWin() {
	var TL = document.getElementById('TopLeft').value;
	var TM = document.getElementById('TopMiddle').value;
	var TR = document.getElementById('TopRight').value;
	var ML = document.getElementById('MiddleLeft').value;
	var MM = document.getElementById('MiddleMiddle').value;
	var MR = document.getElementById('MiddleRight').value;
	var BL = document.getElementById('BottomLeft').value;
	var BM = document.getElementById('BottomMiddle').value;;
	var BR = document.getElementById('BottomRight').value;
	var TI = document.getElementById('TurnIndicator').innerHTML;
	if (TI == "O's Turn") {

		if (TL == "O" && TM == "O" && TR == "" || MR == "O" && BR == "O" & TR == "" || BL == "O" && MM == "O" && TR == "") {
			document.getElementById('TopRight').value = "O";
		}
		else if (TL == "O" && TR == "O" && TM == "" || MM == "O" && BM == "O" & TM == "") {
			document.getElementById('TopMiddle').value = "O";
		}
		else if (TR == "O" && TM == "O" && TL == "" || ML == "O" && BL == "O" & TL == "" || BR == "O" && MM == "O" && TL == "") {
			document.getElementById('TopLeft').value = "O";
		}
		else if (ML == "O" && MM == "O" && MR == "" || TR == "O" && BR == "O" & MR == "") {
			document.getElementById('MiddleRight').value = "O";
		}
		else if (MR == "O" && MM == "O" && ML == "" || TL == "O" && BL == "O" & ML == "") {
			document.getElementById('MiddleLeft').value = "O";
		}
		else if (BL == "O" && BM == "O" && BR == "" || MR == "O" && TR == "O" & BR == "" || TL == "O" && MM == "O" && BR == "") {
			document.getElementById('BottomRight').value = "O";
		}
		else if (MM == "O" && TM == "O" && BM == "" || BR == "O" && BL == "O" & BM == "") {
			document.getElementById('BottomMiddle').value = "O";
		}
		else if (BR == "O" && BM == "O" && BL == "" || ML == "O" && TL == "O" & BL == "" || TR == "O" && MM == "O" && BL == "") {
			document.getElementById('BottomLeft').value = "O";
		}

		checkForWin();
	}
	else if (TI == "X's Turn") {

		if (TL == "X" && TM == "X" && TR == "" || MR == "X" && BR == "X" & TR == "" || BL == "X" && MM == "X" && TR == "") {
			document.getElementById('TopRight').value = "X";
		}
		else if (TL == "X" && TR == "X" && TM == "" || MM == "X" && BM == "X" & TM == "") {
			document.getElementById('TopMiddle').value = "X";
		}
		else if (TR == "X" && TM == "X" && TL == "" || ML == "X" && BL == "X" & TL == "" || BR == "X" && MM == "X" && TL == "") {
			document.getElementById('TopLeft').value = "X";
		}
		else if (ML == "X" && MM == "X" && MR == "" || TR == "X" && BR == "X" & MR == "") {
			document.getElementById('MiddleRight').value = "X";
		}
		else if (MR == "X" && MM == "X" && ML == "" || TL == "X" && BL == "X" & ML == "") {
			document.getElementById('MiddleLeft').value = "X";
		}
		else if (BL == "X" && BM == "X" && BR == "" || MR == "X" && TR == "X" & BR == "" || TL == "X" && MM == "X" && BR == "") {
			document.getElementById('BottomRight').value = "X";
		}
		else if (MM == "X" && TM == "X" && BM == "" || BR == "X" && BL == "X" & BM == "") {
			document.getElementById('BottomMiddle').value = "X";
		}
		else if (BR == "X" && BM == "X" && BL == "" || ML == "X" && TL == "X" & BL == "" || TR == "X" && MM == "X" && BL == "") {
			document.getElementById('BottomLeft').value = "X";
		}

		checkForWin();
	}
}

function tryBlock() {

	var TL = document.getElementById('TopLeft').value;
	var TM = document.getElementById('TopMiddle').value;
	var TR = document.getElementById('TopRight').value;
	var ML = document.getElementById('MiddleLeft').value;
	var MM = document.getElementById('MiddleMiddle').value;
	var MR = document.getElementById('MiddleRight').value;
	var BL = document.getElementById('BottomLeft').value;
	var BM = document.getElementById('BottomMiddle').value;;
	var BR = document.getElementById('BottomRight').value;
	var TI = document.getElementById('TurnIndicator').innerHTML;

	if (TI == "O's Turn") {

		if (TL == "X" && TM == "X" && TR == "" || MR == "X" && BR == "X" & TR == "" || BL == "X" && MM == "X" && TR == "") {
			document.getElementById('TopRight').value = "O";
			changeTurn();
		}
		else if (TL == "X" && TR == "X" && TM == "" || MM == "X" && BM == "X" & TM == "") {
			document.getElementById('TopMiddle').value = "O";
			changeTurn();
		}
		else if (TR == "X" && TM == "X" && TL == "" || ML == "X" && BL == "X" & TL == "" || BR == "X" && MM == "X" && TL == "") {
			document.getElementById('TopLeft').value = "O";
			changeTurn();
		}
		else if (ML == "X" && MM == "X" && MR == "" || TR == "X" && BR == "X" & MR == "") {
			document.getElementById('MiddleRight').value = "O";
			changeTurn();
		}
		else if (MR == "X" && MM == "X" && ML == "" || TL == "X" && BL == "X" & ML == "") {
			document.getElementById('MiddleLeft').value = "O";
			changeTurn();
		}
		else if (BL == "X" && BM == "X" && BR == "" || MR == "X" && TR == "X" & BR == "" || TL == "X" && MM == "X" && BR == "") {
			document.getElementById('BottomRight').value = "O";
			changeTurn();
		}
		else if (MM == "X" && TM == "X" && BM == "" || BR == "X" && BL == "X" & BM == "") {
			document.getElementById('BottomMiddle').value = "O";
			changeTurn();
		}
		else if (BR == "X" && BM == "X" && BL == "" || ML == "X" && TL == "X" & BL == "" || TR == "X" && MM == "X" && BL == "") {
			document.getElementById('BottomLeft').value = "O";
			changeTurn();
		}
	}
	else if (TI == "X's Turn") {

		if (TL == "O" && TM == "O" && TR == "" || MR == "O" && BR == "O" & TR == "" || BL == "O" && MM == "O" && TR == "") {
			document.getElementById('TopRight').value = "X";
			changeTurn();
		}
		else if (TL == "O" && TR == "O" && TM == "" || MM == "O" && BM == "O" & TM == "") {
			document.getElementById('TopMiddle').value = "X";
			changeTurn();
		}
		else if (TR == "O" && TM == "O" && TL == "" || ML == "O" && BL == "O" & TL == "" || BR == "O" && MM == "O" && TL == "") {
			document.getElementById('TopLeft').value = "X";
			changeTurn();
		}
		else if (ML == "O" && MM == "O" && MR == "" || TR == "O" && BR == "O" & MR == "") {
			document.getElementById('MiddleRight').value = "X";
			changeTurn();
		}
		else if (MR == "O" && MM == "O" && ML == "" || TL == "O" && BL == "O" & ML == "") {
			document.getElementById('MiddleLeft').value = "X";
			changeTurn();
		}
		else if (BL == "O" && BM == "O" && BR == "" || MR == "O" && TR == "O" & BR == "" || TL == "O" && MM == "O" && BR == "") {
			document.getElementById('BottomRight').value = "X";
			changeTurn();
		}
		else if (MM == "O" && TM == "O" && BM == "" || BR == "O" && BL == "O" & BM == "") {
			document.getElementById('BottomMiddle').value = "X";
			changeTurn();
		}
		else if (BR == "O" && BM == "O" && BL == "" || ML == "O" && TL == "O" & BL == "" || TR == "O" && MM == "O" && BL == "") {
			document.getElementById('BottomLeft').value = "X";
			changeTurn();
		}
	}
}

function oAIMove() {
	var TL = document.getElementById('TopLeft').value;
	var TM = document.getElementById('TopMiddle').value;
	var TR = document.getElementById('TopRight').value;
	var ML = document.getElementById('MiddleLeft').value;
	var MM = document.getElementById('MiddleMiddle').value;
	var MR = document.getElementById('MiddleRight').value;
	var BL = document.getElementById('BottomLeft').value;
	var BM = document.getElementById('BottomMiddle').value;;
	var BR = document.getElementById('BottomRight').value;
	var TC = document.getElementById('TurnCount').innerHTML;
	var Random = Math.floor(Math.random() * 10) % 4;
	var Random2 = Math.floor(Math.random() * 10) % 3;

	if (document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
		tryWin();
		tryBlock();
	}
	if (document.getElementById('TurnIndicator').innerHTML == "O's Turn") {
		if (TC == "1") {
			if (MM != "X") {
				document.getElementById('MiddleMiddle').value = "O";
			}
			else if (MM == "X") {
				if (Random == "0") {
					document.getElementById('TopLeft').value = "O";
				}
				else if (Random == "1") {
					document.getElementById('BottomLeft').value = "O";
				}
				else if (Random == "2") {
					document.getElementById('TopRight').value = "O";
				}
				else if (Random == "3") {
					document.getElementById('BottomRight').value = "O";
				}
			}
		}
		else if (TC == "3") {
			if (MM != "X") {
				if (TL == "X" && BR == "X" || TR == "X" && BL == "X") {
					if (Random == "0") {
						document.getElementById('TopMiddle').value = "O";
					}
					else if (Random == "1") {
						document.getElementById('BottomMiddle').value = "O";
					}
					else if (Random == "2") {
						document.getElementById('MiddleLeft').value = "O";
					}
					else if (Random == "3") {
						document.getElementById('MiddleRight').value = "O";
					}
				}
				else if (TM == "X" && BM == "X" || ML == "X" && MR == "X") {
					if (Random == "0") {
						document.getElementById('TopLeft').value = "O";
					}
					else if (Random == "1") {
						document.getElementById('BottomLeft').value = "O";
					}
					else if (Random == "2") {
						document.getElementById('TopRight').value = "O";
					}
					else if (Random == "3") {
						document.getElementById('BottomRight').value = "O";
					}
				}
				else if (TM == "X" && ML == "X" || ML == "X" && BM == "X" || BM == "X" && MR == "X" || MR == "X" && TM == "X") {
					if (TM == "X" && ML == "X") {
						document.getElementById('TopLeft').value = "O";
					}
					else if (ML == "X" && BM == "X") {
						document.getElementById('BottomLeft').value = "O";
					}
					else if (MR == "X" && TM == "X") {
						document.getElementById('TopRight').value = "O";
					}
					else if (BM == "X" && MR == "X") {
						document.getElementById('BottomRight').value = "O";
					}
				}
				else if (TL == "X" && BM == "X") {
					if (Random2 == "0") {
						document.getElementById('BottomLeft').value = "O";
					}
					else if (Random2 == "1") {
						document.getElementById('BottomRight').value = "O";
					}
					else if (Random2 == "2") {
						document.getElementById('MiddleRight').value = "O";
					}
				}
				else if (TL == "X" && MR == "X") {
					if (Random2 == "0") {
						document.getElementById('TopLeft').value = "O";
					}
					else if (Random2 == "1") {
						document.getElementById('BottomRight').value = "O";
					}
					else if (Random2 == "2") {
						document.getElementById('BottomMiddle').value = "O";
					}
				}
				else if (TR == "X" && BM == "X") {
					if (Random2 == "0") {
						document.getElementById('BottomLeft').value = "O";
					}
					else if (Random2 == "1") {
						document.getElementById('BottomRight').value = "O";
					}
					else if (Random2 == "2") {
						document.getElementById('MiddleLeft').value = "O";
					}
				}
				else if (TR == "X" && ML == "X") {
					if (Random2 == "0") {
						document.getElementById('BottomLeft').value = "O";
					}
					else if (Random2 == "1") {
						document.getElementById('BottomMiddle').value = "O";
					}
					else if (Random2 == "2") {
						document.getElementById('TopLeft').value = "O";
					}
				}
				else if (TM == "X" && BR == "X") {
					if (Random2 == "0") {
						document.getElementById('TopLeft').value = "O";
					}
					else if (Random2 == "1") {
						document.getElementById('TopRight').value = "O";
					}
					else if (Random2 == "2") {
						document.getElementById('MiddleLeft').value = "O";
					}
				}
				else if (ML == "X" && BR == "X") {
					if (Random2 == "0") {
						document.getElementById('TopLeft').value = "O";
					}
					else if (Random2 == "1") {
						document.getElementById('BottomLeft').value = "O";
					}
					else if (Random2 == "2") {
						document.getElementById('TopMiddle').value = "O";
					}
				}
				else if (MR == "X" && BL == "X") {
					if (Random2 == "0") {
						document.getElementById('TopMiddle').value = "O";
					}
					else if (Random2 == "1") {
						document.getElementById('TopRight').value = "O";
					}
					else if (Random2 == "2") {
						document.getElementById('BotomRight').value = "O";
					}
				}
				else if (TM == "X" && BL == "X") {
					if (Random2 == "0") {
						document.getElementById('TopLeft').value = "O";
					}
					else if (Random2 == "1") {
						document.getElementById('TopRight').value = "O";
					}
					else if (Random2 == "2") {
						document.getElementById('MiddleRight').value = "O";
					}
				}
			}
			else if (MM == "X") {
				if (TL == "O" && BR == "X" || TL == "X" && BR == "O") {
					if (Random == "1" || Random == "3") {
						document.getElementById('TopRight').value = "O";
					}
					else if (Random == "2" || Random == "0") {
						document.getElementById('BottomLeft').value = "O";
					}
				}
				else if (TR == "O" && BL == "X" || TR == "X" && BL == "O") {
					if (Random == "1" || Random == "3") {
						document.getElementById('TopLeft').value = "O";
					}
					else if (Random == "2" || Random == "0") {
						document.getElementById('BottomRight').value = "O";
					}
				}
			}
		}
		if (TC == "5") {
			if (TM == "" && MR == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('TopMiddle').value = "O";
				}
				else if (Random == "2" || Random == "0") {
					document.getElementById('BottomMiddle').value = "O";
				}
			}	
			else if (TM=="" && BM==""){
				if(Random=="1"||Random=="3"){
					document.getElementById('TopMiddle').value="O";
				}
				else if(Random=="2"||Random=="0"){
					document.getElementById('BottomMiddle').value="O";
				}
			}
			else if(ML==""&&MR==""){
				if(Random=="1"||Random=="3"){
					document.getElementById('MiddleLeft').value="O";
				}
				else if (Random == "2" || Random == "0") {
					document.getElementById('MiddleRight').value = "O";
				}
			}
			else if (ML == "" && BM == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('MiddleLeft').value = "O";
				}
				else if (Random == "2" || Random == "0") {
					document.getElementById('BottomMiddle').value = "O";
				}
			}
			else if (TM == "" && MR == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('TopMiddle').value = "O";
				}
				else if (Random == "2" || Random == "0") {
					document.getElementById('MiddleRight').value = "O";
				}
			}
			else if (ML == "" && TM == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('MiddleLeft').value = "O";
				}
				else if (Random == "2" || Random == "0") {
					document.getElementById('TopMiddle').value = "O";
				}
			}
			else if (BM == "" && MR == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('BottomMiddle').value = "O";
				}
				else if (Random == "2" || Random == "0") {
					document.getElementById('MiddleRight').value = "O";
				}
			}
		}
		if (TC == "7") {
			if (TL == "" && TM == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('TopLeft').value = "O";
				}
				else if (Random == "0" || Random == "2") {
					document.getElementById('TopMiddle').value = "O";
				}
			}
			else if (TR == "" && TM == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('TopRight').value = "O";
				}
				else if (Random == "0" || Random == "2") {
					document.getElementById('TopMiddle').value = "O";
				}
			}
			else if (TR == "" && MR == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('TopRight').value = "O";
				}
				else if (Random == "0" || Random == "2") {
					document.getElementById('MiddleRight').value = "O";
				}
			}
			else if (BR == "" && MR == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('BottomRight').value = "O";
				}
				else if (Random == "0" || Random == "2") {
					document.getElementById('MiddleRight').value = "O";
				}
			}
			else if (BR == "" && BM == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('BottomRight').value = "O";
				}
				else if (Random == "0" || Random == "2") {
					document.getElementById('BottomMiddle').value = "O";
				}
			}
			else if (BL == "" && BM == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('BottomLeft').value = "O";
				}
				else if (Random == "0" || Random == "2") {
					document.getElementById('BottomMiddle').value = "O";
				}
			}
			else if (BL == "" && ML == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('BottomLeft').value = "O";
				}
				else if (Random == "0" || Random == "2") {
					document.getElementById('MiddleLeft').value = "O";
				}
			}
			else if (TL == "" && ML == "") {
				if (Random == "1" || Random == "3") {
					document.getElementById('TopLeft').value = "O";
				}
				else if (Random == "0" || Random == "2") {
					document.getElementById('MiddleLeft').value = "O";
				}
			}
		}
		changeTurn();
		checkForWin();
	}
}

function checkForWin() {
	var TL = document.getElementById('TopLeft').value;
	var TM = document.getElementById('TopMiddle').value;
	var TR = document.getElementById('TopRight').value;
	var ML = document.getElementById('MiddleLeft').value;
	var MM = document.getElementById('MiddleMiddle').value;
	var MR = document.getElementById('MiddleRight').value;
	var BL = document.getElementById('BottomLeft').value;
	var BM = document.getElementById('BottomMiddle').value;;
	var BR = document.getElementById('BottomRight').value;


	if (TL == "X" && TM == "X" && TR == "X" || ML == "X" && MM == "X" && MR == "X" || BL == "X" && BM == "X" && BR == "X" || TL == "X" && ML == "X" && BL == "X" || TM == "X" && MM == "X" && BM == "X" || TR == "X" && MR == "X" && BR == "X" || TL == "X" && MM == "X" && BR == "X") {
		document.getElementById('TurnIndicator').innerHTML = "X WINS";
	}
	if (TR == "X" && MM == "X" && BL == "X") {
		document.getElementById('TurnIndicator').innerHTML = "X WINS";
	}
	if (TL == "O" && TM == "O" && TR == "O" || ML == "O" && MM == "O" && MR == "O" || BL == "O" && BM == "O" && BR == "O" || TL == "O" && ML == "O" && BL == "O" || TM == "O" && MM == "O" && BM == "O" || TR == "O" && MR == "O" && BR == "O" || TL == "O" && MM == "O" && BR == "O") {
		document.getElementById('TurnIndicator').innerHTML = "O WINS";
	}
	if (TR == "O" && MM == "O" && BL == "O") {
		document.getElementById('TurnIndicator').innerHTML = "O WINS";
	}

	if (document.getElementById('TurnCount').innerHTML == "9") {
		document.getElementById('TurnIndicator').innerHTML = "DRAW";
	}

	if (document.getElementById('TurnIndicator').innerHTML == "X WINS" || document.getElementById('TurnIndicator').innerHTML == "O WINS" || document.getElementById('TurnIndicator').innerHTML == "DRAW") {
		document.getElementById('gameReset').style.visibility = 'visible';
	}
}

function resetGame(){
	if(document.getElementById('playerType').innerHTML=="O"){
		document.getElementById('MiddleMiddle').value="X";
		document.getElementById('TurnIndicator').innerHTML="O's Turn";
		document.getElementById('TurnCount').innerHTML="1";
	}
	else if(document.getElementById('playerType').innerHTML!="O"){
		document.getElementById('TurnIndicator').innerHTML="X's Turn";
		document.getElementById('TurnCount').innerHTML="0"
		document.getElementById('MiddleMiddle').value="";
	}
	document.getElementById('TopLeft').value="";
	document.getElementById('TopMiddle').value="";
	document.getElementById('TopRight').value="";
	document.getElementById('MiddleLeft').value="";
	document.getElementById('MiddleRight').value="";
	document.getElementById('BottomLeft').value="";
	document.getElementById('BottomMiddle').value="";
	document.getElementById('BottomRight').value="";
	document.getElementById('gameReset').style.visibility='hidden';
/*	if(value=="0 Player"){
		viewBoard();
		document.getElementById('0player').style.display='none';
		document.getElementById('1player').style.display='none';
		document.getElementById('2player').style.display='none';
		document.getElementById('MiddleMiddle').value="X";
		document.getElementById('TurnCount').innerHTML="1";
		document.getElementById('TurnIndicator').innerHTML="O's Turn";
		oAIMove();
		xAIMove();
		oAIMove();
		xAIMove();
		oAIMove();
		xAIMove();
		oAIMove();
		xAIMove();
		checkForWin();
	}*/
}


function xAIMove() {

	var TL = document.getElementById('TopLeft').value;
	var TM = document.getElementById('TopMiddle').value;
	var TR = document.getElementById('TopRight').value;
	var ML = document.getElementById('MiddleLeft').value;
	var MM = document.getElementById('MiddleMiddle').value;
	var MR = document.getElementById('MiddleRight').value;
	var BL = document.getElementById('BottomLeft').value;
	var BM = document.getElementById('BottomMiddle').value;;
	var BR = document.getElementById('BottomRight').value;
	var TC = document.getElementById('TurnCount').innerHTML;
	var Random = Math.floor(Math.random()*10)%4;
	var Random2 = Math.floor(Math.random()*100)%4;
	var Random3 = Math.floor(Math.random()*100)%3;

	//TRY TO WIN AND IF NOT WIN THEN BLOCK
	
	if(document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
		tryWin();
		tryBlock();
	}

	// IF NO WIN OR BLOCK MAKE A MOVE

	if (document.getElementById('TurnIndicator').innerHTML == "X's Turn") {

		if (TC == "0") {
			document.getElementById('MiddleMiddle') = "X";
		}

		if (TC == "2") {
			if (TL == "O" || TR == "O" || BR == "O" || BL == "O") {
				if (TL == "O") {
					document.getElementById('BottomRight').value = "X";
				}
				else if (TR == "O") {
					document.getElementById('BottomLeft').value = "X";
				}
				else if (BL == "O") {
					document.getElementById('TopRight').value = "X";
				}
				else if (BR == "O") {
					document.getElementById('TopLeft').value = "X";
				}
			}

			if (TM == "O" || MR == "O" || BM == "O" || ML == "O") {
				if (Random2 == "0") {
					document.getElementById('TopLeft').value = "X";
				}
				else if (Random2 == "1") {
					document.getElementById('TopRight').value = "X";
				}
				else if (Random2 == "2") {
					document.getElementById('BottomLeft').value = "X";
				}
				else if (Random2 == "3") {
					document.getElementById('BottomRight').value = "X";
				}
				else if (Random2 == "4") {
					if (TM == "O") {
						document.getElementById('MiddleRight').value = "X";
					}
					else {
						document.getElementById('TopMiddle').value = "X";
					}
				}
				else if (Random2 == "5") {
					if (MR == "O") {
						document.getElementById('BottomMiddle').value = "X";
					}
					else {
						document.getElementById('MiddleRight').value = "X";
					}
				}
				else if (Random2 == "6") {
					if (BM == "O") {
						document.getElementById('MiddleLeft').value = "X";
					}
					else {
						document.getElementById('BottomMiddle').value = "X";
					}
				}
				else if (Random2 == "7") {
					if (ML == "O") {
						document.getElementById('TopMiddle').value = "X";
					}
					else {
						document.getElementById('MiddleLeft').value = "X";
					}
				}
			}
		}
		if (TC == "4") {
			if (TL == "O" && MR == "O" && BR == "X" || TM == "O" && BR == "O" && TL == "X") {
				document.getElementById('BottomLeft').value = "X";
			}
			else if (TR == "O" && ML == "O" && BL == "X" || TM == "O" && BL == "O" && TR == "X") {
				document.getElementById('BottomRight').value = "X";
			}
			else if (BL == "O" && MR == "O" && TR == "X" || BM == "O" && TR == "O" && BL == "X") {
				document.getElementById('TopLeft').value = "X";
			}
			else if (TL == "O" && BM == "O" && BR == "X" || ML == "O" && BR == "O" && TL == "X") {
				document.getElementById('TopRight').value = "X";
			}
			else if (TM == "O" && ML == "O" && MR == "X"||BM=="O"&&ML=="O"&&MR=="X") {
				if ((Random % 2) == "0") {
					document.getElementById('TopRight').value = "X";
				} else {
					document.getElementById('BottomRight').value = "X";
				}
			}
			else if (BM == "O" && ML == "O" && TM == "X"||BM=="O"&&ML=="O"&&TM=="X") {
				if ((Random % 2) == "0") {
					document.getElementById('TopRight').value = "X";
				} else {
					document.getElementById('TopLeft').value = "X";
				}
			}
			else if (BM == "O" && MR == "O" && ML == "X"||MR=="O"&&TM=="O"&&ML=="X") {
				if ((Random % 2) == "0") {
					document.getElementById('TopLeft').value = "X";
				} else {
					document.getElementById('BottomLeft').value = "X";
				}
			}
			else if (TM == "O" && MR == "O" && BM == "X"||TM=="O"&&ML=="O"&&BM=="X") {
				if ((Random % 2) == "0") {
					document.getElementById('BottomRight').value = "X";
				} else {
					document.getElementById('BottomLeft').value = "X";
				}
			}
		}

		if(TC=="4"){
			if(TL=="O"){
				if(TR==""&&BL==""){
					if(MR==""){
						document.getElementById('TopRight').value="X";
					}
					else{
						document.getElementById('BottomLeft').value="X";
					}
				}
			}
			else if(TR=="O"){
				if(TL==""&&BR==""){
					if(BM==""){
						document.getElementById('BottomRight').value="X";
					}
					else{
						document.getElementById('TopLeft').value="X";
					}
				}
			}
			else if(BR=="O"){
				if(TR==""&&BL==""){
					if(ML==""){
						document.getElementById('BottomLeft').value="X";
					}
					else{
						document.getElementById('TopRight').value="X";
					}
				}
			}
			else if(BL=="O"){
				if(TL==""&&BR==""){
					if(MR==""){
						document.getElementById('BottomRight').value="X";
					}
					else{
						document.getElementById('TopLeft').value="X";
					}
				}
			}
		}
		if(TC=="6"){
			if(TL==""||TR==""&&TM==""&&BM==""){
				if(Random3=="0"){
					if(TL==""){
						document.getElementById('TopLeft').value="X";
					}
					else if(TR==""){
						document.getElementById('TopRight').value="X";
					}
				}
				if(Random3=="1"){
					document.getElementById('TopMiddle').value="X";
				}
				if(Random3=="2"){
					document.getElementById('BottomMiddle').value="X";
				}
			}
			else if(BR==""||TR==""&&MR==""&&ML==""){
				if(Random3=="0"){
					if(BR==""){
						document.getElementById('BottomRight').value="X";
					}
					else if(TR==""){
						document.getElementById('TopRight').value="X";
					}
				}
				if(Random3=="1"){
					document.getElementById('MiddleLeft').value="X";
				}
				if(Random3=="2"){
					document.getElementById('MiddleRight').value="X";
				}
			}
			else if(BL==""||BR==""&&TM==""&&BM==""){
				if(Random3=="0"){
					if(BL==""){
						document.getElementById('BottomLeft').value="X";
					}
					else if(BR==""){
						document.getElementById('BottomRight').value="X";
					}
				}
				if(Random3=="1"){
					document.getElementById('TopMiddle').value="X";
				}
				if(Random3=="2"){
					document.getElementById('BottomMiddle').value="X";
				}
			}
			else if(BL==""||TL==""&&MR==""&&ML==""){
				if(Random3=="0"){
					if(BL==""){
						document.getElementById('BottomLeft').value="X";
					}
					else if(TL==""){
						document.getElementById('TopLeft').value="X";
					}
				}
				if(Random3=="1"){
					document.getElementById('MiddleLeft').value="X";
				}
				if(Random3=="2"){
					document.getElementById('MiddleRight').value="X";
				}
			}
		}
		if(TC=="8"){
			if(TL==""){
				document.getElementById('TopLeft').value="X";
			}
			if(TM==""){
				document.getElementById('TopMiddle').value="X";
			}
			if(TR==""){
				document.getElementById('TopRight').value="X";
			}
			if(ML==""){
				document.getElementById('MiddleLeft').value="X";
			}
			if(MM==""){
				document.getElementById('MiddleMidddle').value="X";
			}
			if(MR==""){
				document.getElementById('MiddleRight').value="X";
			}
			if(BL==""){
				document.getElementById('BottomLeft').value="X";
			}
			if(BM==""){
				document.getElementById('BottomMiddle').value="X";
			}
			if(BR==""){
				document.getElementById('BottomRight').value="X";
			}
		}
		changeTurn();
		checkForWin();
	}
}
