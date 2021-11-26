const listUser = [
    { name: "Bruno Henrique", userName: "brunohvc" },
    { name: "Vytor Augusto Rosa", userName: "K43RU" },
    { name: "João Henrique Meirelles da Silva", userName: "nihilth" },
    { name: "Otavio Augusto dos Santos", userName: "SantOtavio" },
    { name: "Camilly de Souza Pessotti", userName: "camillyPessotti" },
    { name: "Thiago Marins Braga", userName: "ThiagoBrag" },
    { name: "Ester Girelli", userName: "Esterzinha12" },
    { name: "Gustavo Rebelatto Zapella", userName: "rebelattogustavo" },
    { name: "Henrique Cole Fernandes", userName: "HenriqueCole" },
    { name: "Kenzo Hideaky Ferreira Sato", userName: "Kenzohfs" },
    { name: "Vinícius Bonatti Benner", userName: "viniciusz1" },
    { name: "Leonardo Heitor Poglia", userName: "leopoglia" },
    { name: "Felipe Mielke Vieira", userName: "FelipeMielkeVieira" },
    { name: "Eduarda Bolgenhagen De Campos", userName: "eduardabolgenhagen" },
    { name: "Matheus Franzener Hohmann", userName: "MatheusFranzener" },
    { name: "Leonardo Giuseppe de Souza Rafaelli", userName: "LeonardoRafaelli" },
    { name: "Diego Planinscheck", userName: "frst157" },
    { name: "Camilly Vitoria da Rocha Goltz", userName: "VitoriaCamilly" },
    { name: "Bruna Alves Mafra", userName: "BMafra" },
    { name: "Otavio Matheus Neves", userName: "otavionvs" },
];

const body = document.querySelector("body");

const tabelContainer = document.createElement("div");
tabelContainer.className = "tabelContainer";

body.appendChild(tabelContainer);

listUser.forEach(function(e) {
    let gitcontainer1 = document.createElement("div");
    tabelContainer.appendChild(gitcontainer1);
    gitcontainer1.className = "gitcontainer1";

    let nameColumn = document.createElement("div");
    nameColumn.className = "nameColumn";
    gitcontainer1.appendChild(nameColumn);
    nameColumn.innerText = name;

    let usernameColumn = document.createElement("div");
    usernameColumn.className = "usernameColumn";
    gitcontainer1.appendChild(usernameColumn);

    let buttonToRepo = document.createElement('button')
    buttonToRepo.className = 'buttonToRepo';
    gitcontainer1.appendChild(buttonToRepo);
    buttonToRepo.innerText = 'Ver Repositório'

    nameColumn.innerText = e.name;
    usernameColumn.innerText = e.userName;
    buttonToRepo.onclick = function() {
        location.href = `./userPage/index.html?${e.userName}`;
    }
});