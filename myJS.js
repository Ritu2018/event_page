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
$(".event_name").click(function () {
    this.style.opacity = 0;
    var parent_class = $(this).parent();
    $(".dept").slideUp(200 , model_fun(this , parent_class ));
    $(".nav-top").slideUp(100);
    parent_class["0"].style.zIndex = 999;
    parent_class["0"].style.backgroundColor = "white";
    $(parent_class["0"]).addClass(' animate');
    console.log(parent_class);
});
var return_event_list = function (current , parent) {
    $(".dept").slideDown(200);
    $(".nav-top").slideDown(100);
    parent["0"].style.zIndex = 1;
    parent["0"].style.backgroundColor = "inherit";
    $(parent["0"]).removeClass(' animate');
    $(parent["0"]).addClass(' de-animate');
    setTimeout($(parent["0"]).removeClass(' de-animate'),300)
    current.style.opacity = 1;


};

// Model
var model_fun = function (current , parent) {
// Get the modal
    var modal = document.getElementById('model');

// Get the button that opens the modal

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
        modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        return_event_list(current , parent);
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
//End Model

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
