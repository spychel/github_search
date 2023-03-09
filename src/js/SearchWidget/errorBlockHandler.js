import { Error, showError } from "./showError.js"
import { showSuccess } from "./showSuccess.js";

const errorBlock = document.getElementsByClassName('search-widget__errors')[0];

export function errorBloCkHandler(query) {
    if (query) {
        if (query.length >= 3) {
            showSuccess(errorBlock);
            return true;
        } else {
            showError(errorBlock, [Error.AMOUNT_OF_SYMBOLS]);
            return false;
        }
    }
}