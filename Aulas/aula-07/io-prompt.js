const { rejects } = require('assert')
const { resolve } = require('path')
const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

const promptPromisse = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta))
        }   catch (error) {
            reject(erro)
        }
    }),
    close: () => prompt.close()
}

async function askUser () {
    const numero = await promptPromisse.question('Qual é o seu número favorito?: ')
    console.log (`O dobro do seu número favorito é: ${parseInt(numero) * 2}`)

    const cor = await promptPromisse.question('Qual é a sua cor favorita?: ')
    console.log(`Sua cor favorita é ${cor}`) 
    promptPromisse.close()
}

askUser()