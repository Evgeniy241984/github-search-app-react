function getGiHubReposUrl(repoName) {
    return `https://api.github.com/search/repositories?q=${repoName}`;
}

const fetchRepositories = async (inputValue) => {
    try {
        const reposURL = getGiHubReposUrl(inputValue);
        const result = await fetch(reposURL);

        if (!result.ok) {
            console.error('Could not fetch', result.status);
            return false;
        }
        return await result.json()
            .then(result => result)
    }
    
    catch (error) {
        console.error('Could not fetch', error.message);
        return false;
    };;
    
} 

export default fetchRepositories;