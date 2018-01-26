window.onload = function() {
    var rippleElements = document.getElementsByClassName("ripple");
    for(var i = 0; i < rippleElements.length; i++) {
        rippleElements[i].onclick = function(e) {
            X = e.pageX - this.offsetLeft;
            Y = e.pageY - this.offsetTop;
            var rippleDiv = document.createElement("div");
            rippleDiv.classList.add('ripple');
            rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
            var customColor = this.getAttribute('ripple-color');
            if(customColor) rippleDiv.style.background = customColor;
            this.appendChild(rippleDiv);
            setTimeout(function(){
                rippleDiv.parentElement.removeChild(rippleDiv);
            }, 500);
        }
    }
};

//Expansion of vertical event

// Model
// Get the modal
var modal = document.getElementById('rapid_model');

// Get the button that opens the modal
var btn = document.getElementById("rapid");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//End Model

