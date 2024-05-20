// Matriz para armazenar vários heróis com nome, XP e nível
let herois = [
    ["Aragorn", 8500, ""],
    ["Legolas", 1200, ""],
    ["Gimli", 6000, ""],
    ["Frodo", 9500, ""],
    ["Sam", 4000, ""]
];

// Função para determinar o nível do herói com base na XP
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1000 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Laço de repetição para atualizar o nível de cada herói
for (let i = 0; i < herois.length; i++) {
    let xp = herois[i][1];
    herois[i][2] = determinarNivel(xp);
}

// Saída: exibir a mensagem com o nome e nível de cada herói
for (let i = 0; i < herois.length; i++) {
    console.log(`O Herói de nome ${herois[i][0]} está no nível de ${herois[i][2]}`);
}
