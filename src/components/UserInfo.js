export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._nameSelector = document.querySelector(profileName);
    this._jobSelector = document.querySelector(profileJob);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      job: this._jobSelector.textContent
    }

  }

  setUserInfo({name, job}) {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = job;
  }
}
