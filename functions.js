var recebidos = JSON.parse(localStorage.getItem("@LR.Tech/messagens")) 
|| [];
var contato = document.getElementById("contato");

contato.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    
    recebidos.push(info)
    localStorage.setItem("@LR.Tech/messagens", JSON.stringify(recebidos));

    contato.reset();
    alert("Mensagem enviada com sucesso!")
})