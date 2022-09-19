import { createElement } from '../../helpers/createElement';
import { getFieldInput } from './getFieldInput';
import { getFieldList } from './getFieldList';
import { getFieldText } from './getFieldText';
import { optionsDateFormat } from '../../helpers/constants';
import { getFieldTextArea } from './getFieldTextArea';

export function getBodyPageNote(note) {
    const root = createElement({
        tagName: 'div',
        className: 'item-note__body',
    });

    const elemForm = createElement({
        tagName: 'form',
        className: 'item-note__body',
        attributes: { name: 'note' },
    });

    const fields = [];
    fields.push(getFieldInput('Name', note.name));
    fields.push(
        getFieldText(
            'Created',
            note.created.toLocaleDateString('en-US', optionsDateFormat)
        )
    );
    fields.push(getFieldList('Category', note.category));
    fields.push(getFieldTextArea('Content', note.content));

    elemForm.append(...fields);
    root.append(elemForm);

    return root;
}
