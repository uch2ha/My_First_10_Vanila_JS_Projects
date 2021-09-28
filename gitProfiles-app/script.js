const APIURL = "https://api.github.com/users/"

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")


async function getUser(userName){
    const resp = await fetch(APIURL + userName)
    const respData = await resp.json();

    if(resp.ok == false){
        alert("User "+userName+" is not found")
    }else{
        createUserCard(respData);
        getRepose(userName)
    }
    
}

async function getRepose(userName){
    const resp = await fetch(APIURL + userName + "/repos")
    const respData = await resp.json();

    addReposeToCard(respData)
}

function createUserCard(user){

    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML;
}

function addReposeToCard(repos){
    const reposEl = document.getElementById("repos")

    repos.sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0, 10).forEach(repo =>{
        const repoEl = document.createElement("a")
        repoEl.classList.add("repo")

        repoEl.href = repo.html_url
        repoEl.target = "_blank"
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const user = search.value;

    if(user){
        getUser(user);

        search.value = "";
    }
})