import { createElement } from '../helpers/createElement';

export function renderCategoryNotes(categories) {
    const listCategories = createElement({
        tagName: 'div',
        className: 'list-notes__items',
    });

    const categoriesElements = Array.from(categories.values()).map((category) =>
        createCategoryElement(category)
    );

    listCategories.append(...categoriesElements);

    return listCategories;
}

function createCategoryElement(category) {
    const attributes = {
        'data-category-id': category.id,
        'data-category-name': category.name,
    };
    const item = createElement({
        tagName: 'div',
        className: 'list-categories__row',
        attributes,
    });

    const columnName = createElement({
        tagName: 'div',
        className: 'column-category-name',
    });
    columnName.textContent = category.name;

    const columnActive = createElement({
        tagName: 'div',
        className: 'column-category-active',
    });
    columnActive.textContent = category.active;

    const columnArchived = createElement({
        tagName: 'div',
        className: 'column-category-archived',
    });
    columnArchived.textContent = category.archived;

    item.appendChild(columnName);
    item.appendChild(columnActive);
    item.appendChild(columnArchived);

    return item;
}
