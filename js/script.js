
const selectBox = document.getElementById("select_box");
const btnGame = document.getElementById("start_game");



btnGame.addEventListener("click", function () {
    const difficulty = selectBox.value;
    console.log(difficulty);

    const totalCell = cellsNum(difficulty);

});
/////////////////////////////////////////////////
//FUNZIONI
///////////

//funzione per stabilire il numero di celle in base alla difficoltà
function cellsNum(difficulty) {
    if (difficulty === "1") {
        let cell = 100;
        console.log("il numero di celle per la difficoltà selezionata è: " + cell);
    }
    if (difficulty === "2") {
        let cell = 81;
        console.log("il numero di celle per la difficoltà selezionata è: " + cell);
    }
    if (difficulty === "3") {
        let cell = 49;
        console.log("il numero di celle per la difficoltà selezionata è: " + cell);
    }
}
