function calcularIdade() {
    var dataNascimento = new Date(document.getElementById("dataNascimento").value);
    var dataAtual = new Date();
    var diferenca = dataAtual.getTime() - dataNascimento.getTime();
    var idade = new Date(diferenca);

    var anos = Math.abs(idade.getFullYear() - 1970);
    var meses = idade.getUTCMonth();
    var dias = idade.getUTCDate() - 1;

    document.getElementById("anos").innerHTML = "<p>" + anos + "</p><h2>Anos</h2>";
    document.getElementById("meses").innerHTML = "<p>" + meses + "</p><h2>Meses</h2>";
    document.getElementById("dias").innerHTML = "<p>" + dias + "</p><h2>Dias</h2>";

    // Exibir a div de resultados
    document.getElementById("resultados").style.display = "flex";
}
