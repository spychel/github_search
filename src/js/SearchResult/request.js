export async function request(query) {
    let url = `https://api.github.com/search/repositories?q=${query}+&order=desc&per_page=10`;
    let result = {};
    const response = await fetch(url);
    if (response.ok) {
        result = await response.json();
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
    return result;
};
