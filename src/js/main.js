import { resultBlockHandler } from "./SearchResult/resultBlockHandler.js";
import { errorBloCkHandler } from "./SearchWidget/errorBlockHandler.js";

const input = document.getElementsByName("search-field")[0];
const searchButton = document.getElementsByName('search-button')[0];

let timeoutSearchId = null;

input.addEventListener('keyup', onKeyUpEnter);
searchButton.addEventListener('click', onClickSearchButton);

function onKeyUpEnter(e) {
    let query = e.target.value;
    if (e.key === "Enter") {
        if (timeoutSearchId)
            clearTimeout(timeoutSearchId);
        search(query);
    }

}

function onClickSearchButton() {
    let query = input.value;
    if (timeoutSearchId)
        clearTimeout(timeoutSearchId);
    search(query);
}

function search(query) {
    if (errorBloCkHandler(query)) {
        timeoutSearchId = setTimeout(() => resultBlockHandler(query), 200);
    }
}