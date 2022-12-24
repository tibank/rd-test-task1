import { createElement } from '../../helpers/createElement';
import { renderActiveNotes, renderArchivedNotes } from './renderNotesByType';

function getActiveNotes(event) {
    console.group('active');
}

function getArchivedNotes(event) {
    console.log('archived');
}

function createRadioButton({ name, value, content, checked, handler }) {
    const buttons = createElement({ tagName: 'div', className: 'radio-btn' });
    const input = createElement({
        tagName: 'input',
        className: '',
        attributes: { type: 'radio', name, value },
    });
    input.checked = checked;
    const label = createElement({
        tagName: 'label',
        className: 'label-radio',
        attributes: { for: name },
    });
    label.textContent = content;

    input.addEventListener('click', handler);
    buttons.append(input);
    buttons.append(label);

    return buttons;
}

function createFieldSetChangeTypeNotes() {
    const fieldSet = createElement({ tagName: 'fieldset' });
    const legend = createElement({ tagName: 'legend' });
    legend.textContent = 'Type notes';
    fieldSet.appendChild(legend);
    fieldSet.appendChild(
        createRadioButton({
            name: 'type-notes',
            value: 'active',
            content: 'Active',
            checked: true,
            handler: renderActiveNotes,
        })
    );
    fieldSet.appendChild(
        createRadioButton({
            name: 'type-notes',
            value: 'archived',
            content: 'Archived',
            checked: false,
            handler: renderArchivedNotes,
        })
    );

    return fieldSet;
}

function createFormChangeTypeNotes() {
    const form = createElement({
        tagName: 'form',
        className: '',
        attributes: { name: 'changeTypeNotes' },
    });
    form.appendChild(createFieldSetChangeTypeNotes());

    return form;
}

export function createRadioButtonsForm() {
    const radioButtons = createElement({ tagName: 'div', className: 'type-notes' });
    radioButtons.appendChild(createFormChangeTypeNotes());

    return radioButtons;
}
