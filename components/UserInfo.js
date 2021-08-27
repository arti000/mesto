import { nameInput, jobInput } from "../utils/constants.js";
export default class UserInfo {
  constructur({profileName, profileJob}) {
    this._name = profileName;
    this._job = profileJob;
  }

  getUserInfo() {
    // const userInfo = {
    //   name: this._name.textContent,
    //   job: this._job.textContent
    // };
    // return userInfo;
    console.log(this._name)
  }

  setUserInfo() {
    this._nameElement.textContent = nameInput.value;
    this._jobElement.textContent = jobInput.value;
  }
}
