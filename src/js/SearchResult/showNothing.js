import { createElement } from "../helpers/createElement.js";
import { removeAllChildren } from "../helpers/removeAllChildren.js";

export function showNothing(target) {
    removeAllChildren(target);

    let nothing = createElement('div', ['search-result__nothing-was-found']);
    nothing.textContent = 'Ничего не найдено';

    target.appendChild(nothing);
}