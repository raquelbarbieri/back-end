const user = {
    name: 'JoSÉ mARIa sANtoS',
    email: 'JOSEM1@gmail.com',
    age: 23,
    address: 'x stret'
}

for (const key in user) {
    if (key === 'name') {
        const names = user[key].split(' ')
        user[key] = ''

        for (const name of names) {
            const normalizedName = name.toLocaleLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizedName

            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('')
            user[key] = user[key].trim()
        }
    }
    
    if (key === 'email'){
        user[key] = user[key].toLocaleLowerCase()
    }
}

console.log(user)

// quando devo usar for...in? Quando for manipular objetos
// quando devo usar for...of? Quando for manipular arrays

// má prática: evitem ao máximo utilizar for in com arrays