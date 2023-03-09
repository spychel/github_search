import { removeAllChildren } from "../helpers/removeAllChildren.js";
import { createSearchResultItem } from "./createSearchResultItem.js";
import { createSearchResultList } from "./createSearchResultList.js";

export function showSearchResult(searchResult, target) {
    const { items } = searchResult;

    const list = createSearchResultList();

    items.forEach(item => {
        list.appendChild(
            createSearchResultItem(item.full_name, item.html_url, item.stargazers_count, items.description)
        );
    });

    removeAllChildren(target);
    target.append(list);
}