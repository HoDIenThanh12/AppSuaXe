import React from 'react';
class Users { 
  static _user= Users.getInStance() || null;
  static getInStance() {
    if (this._user === null) { 
      this._user = new Users();
    }
    return this._user;
  }
  constructor() {
    this.name = 'cong';
    if (this._user === null) {
      this._user = new Users();
    }
  }
  name = 'cong';
  sdt = '0392225405';
   setName(name) {
    this.name = name;
  }
}
export default Users;
