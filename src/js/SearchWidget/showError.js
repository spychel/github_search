import { createElement } from "../helpers/createElement.js";
import { removeAllChildren } from "../helpers/removeAllChildren.js";

export const Error = {
    AMOUNT_OF_SYMBOLS: 0,
}

export const ErrorMessage = {
    [Error.AMOUNT_OF_SYMBOLS]: 'Введите не менее 3-х символов',
}

export function showError(target, errors = []) {
    removeAllChildren(target);

    errors.forEach(error => {
        let errorElement = createElement('span', ['search-widget__error']);
        errorElement.textContent = ErrorMessage[error];
        target.appendChild(errorElement);
    });

}