var bici = [{
        tipo: "mountain-bike",
        marca: "torpedo",
        peso: 15
    },
    {
        tipo: "da-corsa",
        marca: "bianchi",
        peso: 10
    },
    {
        tipo: "downhill",
        marca: "santa-cruz",
        peso: 7
    }
];

for (var i = 0; i < bici.length; i++) {
    $('.lista-bici').append("<b>Nome</b>: " + bici[i].tipo)
    $('.lista-bici').append(" <b>Marca</b>: " + bici[i].marca)
    $('.lista-bici').append(" <b>Peso</b>: " + bici[i].peso + "<br>")
};

bici.sort(function(a, b) {
    return a.peso - b.peso;
})

console.log(bici[0].peso)

$('.bici-leggera').append(" <b>Peso</b>: " + bici[0].peso + "<br>")