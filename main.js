const sendMail = document.querySelector("#mail").addEventListener('click', function runSendMail(){
    let email="katesoutherland8@gmail.com";
    location.href = "mailto:"+email
})

const window = document.querySelector("#resume").addEventListener("click", function openPdf(){
    window.open("Here Download PDF url", '_blank');
})
