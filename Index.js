const chars = [
    { name: "Scratchmen Apoo", image: "chars/Medals/Apoo.png", class: ["Atirador", "Suporte", "Supernova", "Fruta do Diabo"] },
    { name: "Baby 5", image: "chars/Medals/Baby5.png", class: ["DPS", "Atirador", "Cortante", "Fruta do Diabo", "Mulher"] },
    { name: "Bartolomeo", image: "chars/Medals/Bartolomeo.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Bastille", image: "chars/Medals/Bastille.png", class: ["Cortante", "Tanque", "Marinheiro"] },
    { name: "Bellamy", image: "chars/Medals/Bellamy.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { name: "Jewelry Bonney", image: "chars/Medals/Bonney.png", class: ["Realeza", "Lutador", "Suporte", "Fruta do Diabo", "Supernova", "Mulher"] },
    { name: "Brook", image: "chars/Medals/Brook.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Capone Gang Bege", image: "chars/Medals/Capone.png", class: ["Atirador", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Carrot", image: "chars/Medals/Carrot.png", class: ["Cortante", "Especialista", "DPS", "Mulher"] },
    { name: "Tony Tony Chopper", image: "chars/Medals/Chopper.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Crocodile", image: "chars/Medals/Crocodile.png", class: ["Especialista", "Tanque", "Fruta do Diabo", "Shichibukai"] },
    { name: "Dalmatian", image: "chars/Medals/Dalmatian.png", class: ["Cortante", "Bruiser", "Marinheiro", "Fruta do Diabo"] },
    { name: "X Drake", image: "chars/Medals/Drake.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Supernova", "Marinheiro"] },
    { name: "Franky", image: "chars/Medals/Franky.png", class: ["Atirador", "Bruiser", "Chapéu de Palha"] },
    { name: "Basil Hawkins", image: "chars/Medals/Hawkins.png", class: ["Especialista", "Bruiser", "Fruta do Diabo", "Supernova"] },
    { name: "Hina", image: "chars/Medals/Hina.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Marinheiro", "Mulher"] },
    { name: "Vinsmoke Ichiji", image: "chars/Medals/Ichiji.png", class: ["Bruiser", "Lutador", "Realeza"] },
    { name: "Jesus Burgess", image: "chars/Medals/Jesus.png", class: ["Lutador", "Tanque"] },
    { name: "Eustass Kid", image: "chars/Medals/Kid.png", class: ["Atirador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Killer", image: "chars/Medals/Killer.png", class: ["Cortante", "DPS", "Supernova"] },
    { name: "Koala", image: "chars/Medals/Koala.png", class: ["Lutador", "DPS", "Mulher"] },
    { name: "Trafalgar Law", image: "chars/Medals/Law.png", class: ["Cortante", "DPS", "Especialista", "Supernova", "Fruta do Diabo"] },
    { name: "Leo e Mansherry", image: "chars/Medals/Leo.png", class: ["Especialista", "Suporte", "Realeza", "Fruta do Diabo", "Mulher"] },
    { name: "Monkey D. Luffy", image: "chars/Medals/Luffy.png", class: ["Bruiser", "Lutador", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Gecko Moria", image: "chars/Medals/Moria.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Shichibukai"] },
    { name: "Nami", image: "chars/Medals/Nami.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Mulher"] },
    { name: "Vinsmoke Niji", image: "chars/Medals/Niji.png", class: ["Atirador", "DPS", "Realeza"] },
    { name: "Perona", image: "chars/Medals/Perona.png", class: ["Especialista", "Suporte", "Fruta do Diabo", "Mulher"] },
    { name: "Rebecca", image: "chars/Medals/Rebecca.png", class: ["Cortante", "Tanque", "Realeza", "Mulher"] },
    { name: "Vinsmoke Reiju", image: "chars/Medals/Reiju.png", class: ["Suporte", "Especialista", "Realeza", "Mulher"] },
    { name: "Nico Robin", image: "chars/Medals/Robin.png", class: ["Especialista", "DPS", "Fruta do Diabo", "Chapéu de Palha", "Mulher"] },
    { name: "Ryuma", image: "chars/Medals/Ryuma.png", class: ["Cortante", "DPS"] },
    { name: "Vinsmoke Sanji", image: "chars/Medals/Sanji.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { name: "Smoker", image: "chars/Medals/Smoker.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Marinheiro"] },
    { name: "Urouge", image: "chars/Medals/Urouge.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Usopp", image: "chars/Medals/Usopp.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { name: "Van Augur", image: "chars/Medals/Van_augur.png", class: ["Atirador", "DPS"] },
    { name: "Vinsmoke Yonji", image: "chars/Medals/Yonji.png", class: ["Lutador", "Tanque", "Realeza"] },
    { name: "Roronoa Zoro", image: "chars/Medals/Zoro.png", class: ["Cortante", "Bruiser", "Chapéu de Palha"] },
    { name: "Satori", image: "chars/Medals/Satori.png", class: ["Enel"] },
    { name: "Gedatsu", image: "chars/Medals/Gedatsu.png", class: ["Enel"] },
    { name: "Ohm", image: "chars/Medals/Ohm.png", class: ["Enel"] },
    { name: "Shura", image: "chars/Medals/Shura.png", class: ["Enel"] },
]

const barbanegraB = document.getElementById("barbanegra");
const enelB = document.getElementById("enel");
const doflamingoB = document.getElementById("doflamingo");
const hancockB = document.getElementById("hancock");
const ivankovB = document.getElementById("ivankov");
const jinbeB = document.getElementById("jinbe");
const kizaruB = document.getElementById("kizaru");
const kumaB = document.getElementById("kuma");
const mihawkB = document.getElementById("mihawk");
const shanksB = document.getElementById("shanks");

function addCharToList() {
    var charListDiv = document.querySelector(".chars");

    chars.forEach(function (character) {
        var charDiv = document.createElement("div");
        charDiv.classList.add("char");

        var imageElement = document.createElement("img");
        var textElement = document.createElement("p");
        textElement.innerText = character.name
        textElement.classList.add("title");

        imageElement.src = character.image;
        imageElement.alt = character.name;
        imageElement.style.width = "113px";
        imageElement.style.height= "116px"

        charDiv.appendChild(imageElement);
        charDiv.appendChild(textElement);

        charListDiv.appendChild(charDiv);
    })
}

const activeFilters = new Set();

function toggleFilter(filter) {
    if (activeFilters.has(filter)) {
        activeFilters.delete(filter); // Remove o filtro se já estiver ativo
    } else {
        activeFilters.add(filter); // Adiciona o filtro se não estiver ativo
    }
}

function filterChars() {
    var allChars = document.querySelectorAll('.char');
    allChars.forEach(function (char) {
        char.style.display = 'none'; // Esconde todos os personagens
    });

    // Exibe os personagens que atendem a todos os filtros ativos
    var filteredChars = document.querySelectorAll('.char');
    filteredChars.forEach(function (char) {
        var charData = chars.find(function (character) {
            return character.name === char.querySelector('img').alt;
        });

        var showChar = true;
        activeFilters.forEach(function (filter) {
            if (!charData.class.includes(filter)) {
                showChar = false;
            }
        });

        if (showChar) {
            char.style.display = 'flex';
        }
    });
}

function handleFilterButtonClick(filter, button) {
    toggleFilter(filter); // Adiciona ou remove o filtro
    filterChars(); // Filtra os personagens com base nos filtros ativos
    // Adiciona ou remove a borda no botão conforme o filtro estiver ativo ou não
    if (activeFilters.has(filter)) {
        button.style.borderBottom = "1px solid white";
    } else {
        button.style.borderBottom = "none";
    }
}

barbanegraB.addEventListener("click", function () {
    handleFilterButtonClick("Supernova", barbanegraB);
});

doflamingoB.addEventListener("click", function () {
    handleFilterButtonClick("Atirador", doflamingoB);
});

hancockB.addEventListener("click", function () {
    handleFilterButtonClick("Mulher", hancockB);
});

ivankovB.addEventListener("click", function () {
    handleFilterButtonClick("Suporte", ivankovB);
});

jinbeB.addEventListener("click", function () {
    handleFilterButtonClick("Tanque", jinbeB);
});

kizaruB.addEventListener("click", function () {
    handleFilterButtonClick("Marinheiro", kizaruB);
});

kumaB.addEventListener("click", function () {
    handleFilterButtonClick("Realeza", kumaB);
});

mihawkB.addEventListener("click", function () {
    handleFilterButtonClick("Cortante", mihawkB);
});

shanksB.addEventListener("click", function () {
    handleFilterButtonClick("Chapéu de Palha", shanksB);
});

enelB.addEventListener("click", function () {
    handleFilterButtonClick("Enel", enelB);
});


window.addEventListener("load", addCharToList);
