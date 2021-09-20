
function getGiHubOrgUrl(orgsName) {
    return `https://api.github.com/orgs/${orgsName}`;
}

function getGiHubReposUrl(repoName) {
    return `https://api.github.com/search/repositories?q=${repoName}`;
}

export function loadOrgData(inputValue) {

    const orgsURL = getGiHubOrgUrl(inputValue);

    return  fetch(orgsURL)
        .then(res => res.json())
        .then(result => result)
        .catch((error) => {
            console.error(error);
            return [];
        });

}

const fetchRepositories = (inputValue) => {
    
    const reposURL = getGiHubReposUrl(inputValue);

    return fetch(reposURL)
        .then(res => res.json())
        .then(result => result)
        .catch((error) => {
            console.error(error);
            return [];
        });;
    
} 
export default fetchRepositories;