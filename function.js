document.getElementById('expanding-input').addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});


function adicionarCampoObjetivo() {
    var containerObjetivo = document.getElementById("containerObjetivo");
    var novoCampo = document.createElement("div");
    novoCampo.innerHTML = '<textarea type="text" name="objetivo[]"></textarea><br><button class="no-print" type="button" value="Remover" onclick="removerCampoObjetivo(this)">Remover</button>';
    containerObjetivo.appendChild(novoCampo);
}

function removerCampoObjetivo(elemento) {
    var containerObjetivo = document.getElementById("containerObjetivo");
    containerObjetivo.removeChild(elemento.parentNode);
}

function adicionarCampoExperiencia() {
    var containerExperiencia = document.getElementById("containerExperiencia");
    var novoCampo = document.createElement("div");
    novoCampo.innerHTML = '<textarea type="text" name="experiencia[]"></textarea><br><button class="no-print" type="button" value="Remover" onclick="removerCampoExperiencia(this)">Remover</button>';
    containerExperiencia.appendChild(novoCampo);
}

function removerCampoExperiencia(elemento) {
    var containerExperiencia = document.getElementById("containerExperiencia");
    containerExperiencia.removeChild(elemento.parentNode);
}

function adicionarCampoFormacao() {
    var containerFormacao = document.getElementById("containerFormacao");
    var novoCampo = document.createElement("div");
    novoCampo.innerHTML = '<textarea type="text" name="formacao[]"></textarea><br><button class="no-print" type="button" value="Remover" onclick="removerCampoFormacao(this)">Remover</button>';
    containerFormacao.appendChild(novoCampo);
}

function removerCampoFormacao(elemento) {
    var containerFormacao = document.getElementById("containerFormacao");
    containerFormacao.removeChild(elemento.parentNode);
}

function imprimirCurriculo() {
    window.print();
    exibirMensagemRecarregar();
    function exibirMensagemRecarregar() {
        alert('Por favor, recarregue a página após a impressão.');
    }
}