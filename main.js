let resume = document.querySelector("#resume");

resume.addEventListener("click", function(play){
    play.open("/Resume.pdf", '_blank')
        return "done"
    }
)


const navbar = document.querySelectorAll(".top")
function colorChange (e) {
    
    e.target.style.color = '#897CA6';
}
navbar.forEach(p => p.addEventListener("mouseover", colorChange))
navbar.forEach(p => p.addEventListener("mouseover", colorChange))
changeNav.addEventListener('mouseout', function (over) {
    over.style.color = 'black';
})

let test = document.getElementById("test");

