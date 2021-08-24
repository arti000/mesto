export default class UserInfo {
  _nameProfile;
  _jobProfile;
  constructur(nameProfile, jobProfile) {
    this._nameProfile = nameProfile;
    this._jobProfile = jobProfile;
  }

  getUserInfo() {
    const userInfo = {
      name: this._nameProfile.textContent,
      job: this._jobProfile.textContent
    };
    return userInfo;
  }

  setUserInfo() {
    const nameInput = popupProfileElement
    .querySelector(".popup__input_type_title");
    const jobInput = popupProfileElement
    .querySelector(".popup__input_type_subtitle");
    this._nameProfile.textContent = nameInput.value;
    this._jobProfile.textContent = jobInput.value;
  }
}
