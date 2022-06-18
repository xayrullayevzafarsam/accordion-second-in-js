
let button = document.getElementsByClassName("btn-icon");

let text = document.getElementsByClassName("content");

for ( let i = 0; i <= button.length; i++) {

  button[i].onclick = function() {


    for ( let k = 0; k < button.length; k++ ) {

      if ( k == i ) {

      } else {
        text[k].classList.remove("show")

      }
    }

    text[i].classList.toggle("show")

  }
}