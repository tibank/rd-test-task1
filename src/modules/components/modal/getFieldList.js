import { createElement } from '../../helpers/createElement';
import { createLineElement } from './createLineElement';
import { getCategoryId } from '../../helpers/getCategoryId';

export function getFieldList(nameField, value) {
  const elemLine = createLineElement(nameField);
  const elemSelect = createElement({
    tagName: 'div',
    className: 'item-note-block__select',
  });

  const fieldSelect = createElement({
    tagName: 'select',
    attributes: { name: 'category' },
  });

  const options = [];
  const tipOptions = createOption({
    name: 'Select category note',
    value: '',
  });
  tipOptions.setAttribute('disabled', '');
  options.push(tipOptions);
  options.push(createOption({ name: 'Task', value: '1' }));
  options.push(createOption({ name: 'Random Thought', value: '2' }));
  options.push(createOption({ name: 'Idea', value: '3' }));

  fieldSelect.append(...options);
  fieldSelect.selectedIndex = value ? +getCategoryId(value) : 0;

  elemSelect.append(fieldSelect);
  elemLine.append(elemSelect);

  return elemLine;
}

function createOption({ name, value }) {
  const option = createElement({
    tagName: 'option',
    attributes: { value },
  });
  option.textContent = name;

  return option;
}
