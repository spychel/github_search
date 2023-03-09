import { request } from "./request.js";
import { showNothing } from "./showNothing.js";
import { showSearchResult } from "./showSearchResult.js";

export async function resultBlockHandler(query) {

    const resultBlock = document.getElementsByClassName('search-result')[0];

    let searchResult = await request(query);

    if (searchResult == {} || searchResult.items.length == 0) {
        showNothing(resultBlock);
    } else {
        showSearchResult(searchResult, resultBlock);
    }
}