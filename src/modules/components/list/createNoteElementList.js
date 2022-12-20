import { createTagElem } from '../../helpers/createTagElememt';
import { createButtonsBlock } from './buttonsBlock';
import { optionsDateFormat } from '../../helpers/constants';
import { getStringDates } from '../../helpers/getStringDates';

export function createNoteElementList(note) {
    const item = createTagElem('div', '', true, ['list-notes__row'], {
        'data-note-id': note.id,
    });

    item.append(
        createTagElem('div', note.name, true, ['data-column', 'truncate', 'note-name'], {
            'data-name': '',
        })
    );

    const strCreated = note.created.toLocaleDateString('en-US', optionsDateFormat);
    item.append(
        createTagElem('div', strCreated, true, ['data-column'], {
            'data-created': '',
        })
    );
    item.append(
        createTagElem('div', note.category, true, ['data-column'], {
            'data-category': '',
        })
    );
    item.append(
        createTagElem('div', note.content, true, ['data-column', 'truncate'], {
            'data-content': '',
        })
    );

    item.append(
        createTagElem('div', getStringDates(note.content), true, ['data-column', 'truncate'])
    );
    item.append(createButtonsBlock(note));

    return item;
}
