function getUserGithub(userName) {
    fetch('https://api.github.com/users/' + userName).then(function(resultado) {
        console.log('Bruno')
        resultado.json().then(function(data) {
            console.log('Data:', data);
        });
    }).catch(function(erro) {
        console.log('Bruno')
        console.log("erro:", erro);
    });
}


function showUserGithub(user) {
    let divName = document.createElement('div');
    divName.innerText = user.name;
    document.body.appendChild(divName);
}


function getUserReposGithub(userName) {
    fetch('https://api.github.com/users/' + userName + '/repos')
        .then(function(resultado) {
            resultado.json().then(function(data) {
                console.log('Repositories Data:', data);
            })
        }).catch(function(erro) {
            console.log('erro', erro)
        });
}