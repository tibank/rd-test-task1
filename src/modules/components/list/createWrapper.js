import { createElement } from '../../helpers/createElement';
import noteService from '../../services/noteService';
import { btnCreateNote } from './createBtnCreate';
import { createCategoryHeader } from './createCategoryHeader';
import { createHeader } from './createHeader';
import { renderListNotes } from './renderListNotes';
import { renderCategoryNotes } from './renderCategoryNotes';
import { createRadioButtonsForm } from './createRadioButtonsForm';

export function createWrapper() {
    const rootWrapper = createElement({ tagName: 'div', className: 'wrapper' });
    const listWrapper = createElement({
        tagName: 'div',
        className: 'list-notes__wrapper',
    });

    listWrapper.appendChild(createHeader());
    listWrapper.appendChild(renderListNotes(noteService.getNotes()));
    listWrapper.appendChild(createRadioButtonsForm());
    listWrapper.appendChild(btnCreateNote());

    const categoriesWrapper = createElement({
        tagName: 'div',
        className: 'categories-notes__wrapper',
    });
    categoriesWrapper.append(createCategoryHeader());
    categoriesWrapper.append(renderCategoryNotes(noteService.getStat()));

    rootWrapper.appendChild(listWrapper);
    rootWrapper.appendChild(categoriesWrapper);

    return rootWrapper;
}
