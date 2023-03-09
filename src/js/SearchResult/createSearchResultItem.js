import { createElement } from "../helpers/createElement.js";

export function createSearchResultItem(title, link, stargazersCount, description) {
    let item = createElement('li', ['search-result__item', 'item']);

    let a = createElement('a', ['item__link']);
    a.href = link;
    a.target = '_blank';

    let h2 = createElement('h2', ['item__title']);
    h2.textContent = title;

    let starCount = createElement('span', ['item__star-count']);
    starCount.textContent = stargazersCount;

    let star = createElement('div', ['item__star']);
    
    let stars = createElement('div', ['item__star-block']);

    let p = createElement('p', ['item__description']);
    p.textContent = description;

    a.append(h2);

    stars.append(starCount);
    stars.append(star);

    item.append(a);
    item.append(stars);
    item.append(p);

    return item;
}