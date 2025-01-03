const idade = 19
const temCNH = true

const podeDirigir = idade > 18 && temCNH

const numeroDePassageiros = podeDirigir ? 4 : 0

if (podeDirigir) {
    console.log ('Pessoa está habilitada para conduzir veículo')
} else {
    console.log ('Pessoa não está habilitada para conduzir veículo')
}

// let numeroDePassageiros
// if (podeDirigir) {
//     numeroDePassageiros = 4
// } else {
//     numeroDePassageiros = 0
// }

console.log({ numeroDePassageiros })


