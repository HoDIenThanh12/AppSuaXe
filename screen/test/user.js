import React from 'react';

class User {
  static user=null;

  static getInstance() {
    if ( !this.user ) {
      this.user = new User();
    }
    return this.user;
  }

  name='cong'

  setName( name ) {
    this.name = name;
  }

  getName() { return this.name; }
}
export default User;
