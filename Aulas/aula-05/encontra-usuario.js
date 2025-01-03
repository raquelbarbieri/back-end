const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Zeca', 'Rubens', 'Josué', 'Natália', 'Bianca']

let econtrouUsuario = false
let atingiuFimDaLista = false
let indiceDoUsuario = 0

while (!econtrouUsuario && !atingiuFimDaLista) {
    const usuarioAtual = listaDeContatos[indiceDoUsuario]
    if (usuarioAtual.startsWith('Z')) {
        econtrouUsuario = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    indiceDoUsuario = indiceDoUsuario + 1

    if(indiceDoUsuario === listaDeContatos.length) {
        atingiuFimDaLista = true
        console.log(`Usuário não foi encontrado`)
    }
}
