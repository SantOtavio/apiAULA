let tirar = document.location.search;

tirar = tirar.substring(1);
console.log(tirar);

function getUserGithub(tirar) {
    fetch('https://api.github.com/users/' + tirar).then(function(resultado) {
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