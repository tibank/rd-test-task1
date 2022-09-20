function checkInputFields() {
  let msgError = '';
  const form = document.forms.note;
  if (!form.name.value.trim()) {
    msgError += 'Name is empty\n';
  }

  if (!form.category.selectedIndex) {
    msgError += 'Not selected category';
  }

  return msgError;
}
