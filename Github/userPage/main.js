const body = document.querySelector("body");
username = document.location.search;
username = username.substring(1);


fetch(`https://fake-github2.herokuapp.com/api/search/${username}`)
    .then(function(resultado) {
        resultado.json().then(function(data) {
            const profileImg = document.createElement("img");
            profileImg.src = data.avatar_url;
            body.appendChild(profileImg);
            profileImg.style.width = '20%'
            profileImg.style.position = 'relative';
            profileImg.style.left = '40%'

            const personName = document.createElement("h1");
            personName.innerText = data.name;
            body.appendChild(personName);
            personName.style.position = 'relative';
            personName.style.left = '36.8%'

            const loginPerson = document.createElement("h3");
            loginPerson.innerHTML = data.login;
            body.appendChild(loginPerson);
            loginPerson.style.position = 'relative';
            loginPerson.style.left = '47%'
        });
    })
    .catch(function(error) {
        console.log("Error: ", error);
    });

//code before the pause
setTimeout(function() {

    function getUserGithub() {
        fetch(`https://fake-github2.herokuapp.com/api/search/${username}/repos`)
            .then(function(resultado) {
                console.log("Bruno");
                resultado.json().then(function(repos) {
                    console.log("Data:", repos);
                    repos.forEach((element) => {
                        const nameRepos = document.createElement("p");
                        nameRepos.innerText = element.name;
                        body.appendChild(nameRepos);
                        nameRepos.style.position = 'relative';
                        nameRepos.style.left = '40%'


                        const linkRepos = document.createElement('a');
                        linkRepos.href = element.clone_url;
                        linkRepos.innerText = element.clone_url;
                        body.appendChild(linkRepos);
                        linkRepos.style.position = 'relative';
                        linkRepos.style.left = '40%'
                    });
                });
            })
            .catch(function(erro) {
                console.log("Bruno");
                console.log("erro:", erro);
            });
    }

    getUserGithub();

}, 500);