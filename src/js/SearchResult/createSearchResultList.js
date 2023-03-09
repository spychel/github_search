import { createElement } from "../helpers/createElement.js";


export function createSearchResultList(items = []) {
    let list = createElement('ul', ['search-result__list']);

    [...items].forEach(item => list.append(item));

    return list;
}