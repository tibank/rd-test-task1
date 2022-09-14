import { createElement } from '../helpers/createElement';

export function createCategoryHeader() {
    const rootElem = createElement({
        tagName: 'div',
        className: 'categories-notes__wrapper',
    });
    const headerElem = createElement({
        tagName: 'div',
        className: 'categories-notes__header notes-header',
    });

    const columnNameHeader = createElement({
        tagName: 'div',
        className: 'header column-category-name',
    });
    columnNameHeader.textContent = 'Note category';

    const columnActiveHeader = createElement({
        tagName: 'div',
        className: 'header column-category-active',
    });
    columnActiveHeader.textContent = 'Active';

    const columnArchivedHeader = createElement({
        tagName: 'div',
        className: 'header column-category-archived',
    });
    columnArchivedHeader.textContent = 'Archived';

    headerElem.appendChild(columnNameHeader);
    headerElem.appendChild(columnActiveHeader);
    headerElem.appendChild(columnArchivedHeader);
    rootElem.appendChild(headerElem);

    return rootElem;
}
