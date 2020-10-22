//DADI
var risultati = document.getElementById("risultati");
var invia = document.getElementById("invia"); //lancia dadi
invia.addEventListener("click",
	function() {
      var nGiocatore = Math.floor(Math.random()*6) +1;;
      var nPc = Math.floor(Math.random()*6) +1;;
      var msgVittoria = "Congratulazioni, hai vinto !";
      var msgSconfitta = "Mi dispiace ma hai perso, ritenta";

      // OUTPUT
      document.getElementById("nGiocatore").innerHTML = nGiocatore;
      document.getElementById("nPc").innerHTML = nPc;
      if (nGiocatore > nPc) {
         document.getElementById("msgRisultato").innerHTML = msgVittoria;
      } else {
         document.getElementById("msgRisultato").innerHTML = msgSconfitta;
      }

      //DISPLAY RISULTATI ON
      // document.getElementById("risultati").reset();
      risultati.className = "dBlock";

	}
);
