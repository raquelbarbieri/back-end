const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Zeca', 'Rubens', 'Josué', 'Natália', 'Bianca']

let econtrouUsuarioOuPercorreuLista = false
let indiceDoUsuario = 0

do {
    const usuarioAtual = listaDeContatos[indiceDoUsuario]
    if (usuarioAtual && usuarioAtual.startsWith('Z')) {
        econtrouUsuarioOuPercorreuLista = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    indiceDoUsuario = indiceDoUsuario + 1

    if(indiceDoUsuario >= listaDeContatos.length) {
        econtrouUsuarioOuPercorreuLista = true
        console.log(`Usuário não foi encontrado`)
    }
} while (!econtrouUsuarioOuPercorreuLista)