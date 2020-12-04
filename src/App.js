import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <form class="form">
        <div class="inputs">
          <div class="select-box">
            <label class="select-box__label">
              User Role
              <select class="select">
                <option value="">Admin</option>
                <option value="">User</option>
                <option value="">Member</option>
              </select>
            </label>
          </div>
          <div class="checkboxes">
            <p>Folders</p>
            <input class="checkbox__input" type="checkbox" id="folder__agree" />
            <label class="checkbox__label" for="folder__agree">
              Agree
            </label>
            <input class="checkbox__input" type="checkbox" id="folder__update"/>
            <label class="checkbox__label" for="folder__update">
              Update
            </label>
            <input class="checkbox__input" type="checkbox" id="folder__move"/>
            <label class="checkbox__label" for="folder__move">
              Move
            </label>
            <input class="checkbox__input" type="checkbox" id="folder__delete"/>
            <label class="checkbox__label" for="folder__delete">
              Delete
            </label>
            <input class="checkbox__input" type="checkbox" id="folder__view"/>
            <label class="checkbox__label" for="folder__view">
              View
            </label>
            <input class="checkbox__input" type="checkbox" id="folder__share"/>
            <label class="checkbox__label" for="folder__share">
              Share
            </label>
          </div>
          <div class="checkboxes">
            <p>Gems</p>
            <input class="checkbox__input" type="checkbox" id="gem__agree"/>
            <label class="checkbox__label" for="gem__agree">
              Agree
            </label>
            <input class="checkbox__input" type="checkbox" id="gem__update"/>
            <label class="checkbox__label" for="gem__update">
              Update
            </label>
            <input class="checkbox__input" type="checkbox" id="gem__move"/>
            <label class="checkbox__label" for="gem__move">
              Move
            </label>
            <input class="checkbox__input" type="checkbox" id="gem__delete"/>
            <label class="checkbox__label" for="gem__delete">
              Delete
            </label>
            <input class="checkbox__input" type="checkbox" id="gem__view"/>
            <label class="checkbox__label" for="gem__view">
              View
            </label>
            <input class="checkbox__input" type="checkbox" id="gem__share"/>
            <label class="checkbox__label" for="gem__share">
              Share
            </label>
          </div>
        </div>
        <button class="form__button" type="submit">Save</button>
      </form>
    )
  }
}

export default App;
