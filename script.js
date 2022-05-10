function formataDinheiro(value) {
    <!-- arredondar para cima -->
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value
}

function formataPagantes(value) {
    if (value == 1) return value + ' pessoa'
    return value + ' pessoas'
}
function atualiza() {
    let conta = Number(document.getElementById('suaConta').value)
    let porcentoGorjeta = document.getElementById('entradaGorjeta').value
    let numPagantes = document.getElementById('entradaNumPagantes').value
    let gorjeta = conta * porcentoGorjeta/100
    let total = conta + gorjeta
    let gorjetaPorPagante = gorjeta / numPagantes
    let contaPorPagante = total / numPagantes
    <!-- console.log({gorjeta, total, gorjetaPorPagante, contaPorPagante}) -->

    document.getElementById('porcentoGorjeta').innerHTML = porcentoGorjeta + "%"
    document.getElementById('valorGorjeta').innerHTML = formataDinheiro(gorjeta)
    document.getElementById('numPagantes').innerHTML = formataPagantes(numPagantes)
    document.getElementById('totalComGorjeta').innerHTML = formataDinheiro(total)
    document.getElementById('contaPorPagante').innerHTML = formataDinheiro(contaPorPagante)
    document.getElementById('gorjetaPorPagante').innerHTML = formataDinheiro(gorjetaPorPagante)
}

let container = document.getElementById('container')
container.addEventListener('input', atualiza)