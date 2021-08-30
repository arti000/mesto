export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this.renderItem(item);
    });
  }

  renderItem(name, link) {
    this._renderer(name, link)
  }

  addItem(element) {
    this._container.prepend(element);
  }
}