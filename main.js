fetch('https://api.github.com/users/brunohvc').then(function(resultado) {
    console.log('Bruno')
    resultado.json().then(function(data) {
        console.log('Data:', data);
    });
}).catch(function(erro) {
    console.log('Bruno')
    console.log("erro:", erro);
});