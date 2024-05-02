document.getElementById("mostrarBtn").addEventListener("click", function() {
    var mensagem = document.createElement("p");
    mensagem.textContent = "Olá Mundo";
    document.body.appendChild(mensagem);
    
    setTimeout(function() {
      mensagem.remove();
    }, 5000);
  });
  