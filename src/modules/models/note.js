export class Note {
  constructor(id, name, category, content) {
    this.id = id;
    this.name = name ? name : '';
    this.created = new Date();
    this.category = category;
    this.content = content ? content : '';
    this.archived = 0;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCreated() {
    return this.created;
  }

  getCategory() {
    return this.category;
  }

  getContent() {
    return this.content;
  }

  getArchived() {
    return this.archived;
  }
}
