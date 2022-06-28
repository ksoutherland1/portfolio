let resume = document.querySelector("#resume");

resume.addEventListener("click", function(play){
    play.open("/Resume.pdf", '_blank')
        return "done"
    }
)


const navbar = document.querySelectorAll(".top")
function colorChange (e) {
    e.target.style.color = 'black';
    setTimeout(function() {
    e.target.style.color = "black";
    }, 500);
    } false;

navbar.forEach(p => p.addEventListener("mouseover", colorChange))
navbar.forEach(p => p.addEventListener("mouseout", colorChange))




