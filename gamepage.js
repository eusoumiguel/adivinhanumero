

var y = Math.floor(Math.random() * 10 + 1);
    


function submit() {
var x = document.getElementById("guessField").value; 
    
 if(x == y) {
    guessField++;
    alert("PAREBÉNS!!!"+playername+", você acertou em" + guessField + " tentativa(s)! ");
    
    }
 else if(x > y){
    guessField++;
    alert("Opa,resposta errada!!! tente um número menor");
    }
 else {
    guessField++;
    alert("Opa,resposta errada!!! tente um número maior");
    }
 
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
   }
