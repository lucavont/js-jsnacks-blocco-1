// JSNACK 4A

var squadre = [{
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    }
]

// JSNACK 4B

// Juventus

squadre[0].puntiFatti = Math.floor((Math.random() * 6))
squadre[0].falliSubiti = Math.floor((Math.random() * 6))

// Milan

squadre[1].puntiFatti = Math.floor((Math.random() * 6))
squadre[1].falliSubiti = Math.floor((Math.random() * 6))

// Inter

squadre[2].puntiFatti = Math.floor((Math.random() * 6))
squadre[2].falliSubiti = Math.floor((Math.random() * 6))

console.log(squadre)