export function getCategoryId(category) {
  let id = '';
  switch (category) {
    case 'Task':
      id = '1';
      break;
    case 'Random Thought':
      id = '2';
      break;
    case 'Idea':
      id = '3';
      break;
    default:
  }
  return id;
}
