import { createElement } from "../helpers/createElement.js";
import { removeAllChildren } from "../helpers/removeAllChildren.js";

export function showSuccess(target) {
    removeAllChildren(target);

    let successElement = createElement('span', ['search-widget__success']);

    successElement.textContent = 'Отлично!';

    target.appendChild(successElement);

    setTimeout(() => removeAllChildren(target), 1000);
}