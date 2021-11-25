let tirar = document.location.search;

tirar = tirar.substring(1);

function getUserGithub(tirar) {
    fetch('https://fake-github.herokuapp.com/api/search/brunohvc/repos').then(function(resultado) {
        console.log('Bruno')
        resultado.json().then(function(data) {
            console.log('Data:', data);
        });
    }).catch(function(erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });
}

getUserGithub();