function gerarSenha() {
  var tamanhoSenha = parseInt(document.getElementById("senha-tamanho").value);
  var incluirLetrasMaiusculas = document.getElementById("letras-maiusculas").checked;
  var incluirLetrasMinusculas = document.getElementById("letras-minusculas").checked;
  var incluirNumeros = document.getElementById("numeros").checked;
  var incluirCaracteresEspeciais = document.getElementById("caracteres-especiais").checked;

  var caracteresPermitidos = "";
  var senhaGerada = "";

  if (incluirLetrasMaiusculas) {
    caracteresPermitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (incluirLetrasMinusculas) {
    caracteresPermitidos += "abcdefghijklmnopqrstuvwxyz";
  }

  if (incluirNumeros) {
    caracteresPermitidos += "0123456789";
  }

  if (incluirCaracteresEspeciais) {
    caracteresPermitidos += "!@#$%^&*()_+-={}[]|:;<>,.?/~";
  }

  for (var i = 0; i < tamanhoSenha; i++) {
    var indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
    senhaGerada += caracteresPermitidos.charAt(indiceAleatorio);
  }

  document.getElementById("senha-gerada").value = senhaGerada;
}

document.getElementById("gerar-senha").addEventListener("click", gerarSenha);

document.getElementById("copiar").addEventListener("click", function() {
  var senhaGerada = document.getElementById("senha-gerada");
  senhaGerada.select();
  senhaGerada.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Senha copiada para a área de transferência!");
});
