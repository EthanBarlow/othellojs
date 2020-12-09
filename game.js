const boardSize = 8;
const players = {
  PLAYER1: "x",
  PLAYER2: "o",
  EMPTY: "empty",
};

/*Build the 8*8 board */
function buildBoard() {
  //let board = document.getElementById('board');
  let board = document.createElement("table");
  let boardContents = board.innerHTML;

  for (i = 0; i < boardSize; i++) {
    boardContents += "<tr>";
    console.log("hi");
    for (j = 0; j < boardSize; j++) {
      boardContents += "<td ";
      boardContents += "class='" + players.EMPTY + "'>hi";
      boardContents += "</td>";
    }

    boardContents += "</tr>";
  }

  console.log(boardContents);
  document.getElementById("board").appendChild(board);
}

function addTableRow() {}

function addTableData(row, className, contents) {}
