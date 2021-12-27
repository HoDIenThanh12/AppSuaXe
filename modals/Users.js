import React, { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import store from 'react-native-simple-store';
class Users {
  static _user = Users.getInStance() || null;
  id = "";
  sdt = "";
  name = "";
  pass = "";
  image = "";
  address = "";
  luotXem = 0;
  checkWorker = 0;
  x = 0;
  y = 0;
  addressNow = '';
  static getInStance () {
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
  async regitster (name, std, pass, address, checkWorker = 0) {

  }

  setCheckWorker (checkWorker) {
    this.checkWorker = checkWorker;
  }
  getCheckWorker () { return this.checkWorker }

  setName (name) {
    this.name = name;
  }
  getName () { return this.name }

  setSDT (sdt) {
    this.sdt = sdt
  }
  getSDT () { return this.sdt }

  setPass (pass) {
    this.pass = pass
  }
  getPass () { return this.pass }

  setImg (img) {
    this.image = img
  }
  getImg () { return this.image }

  setAddress (address) {
    this.address = address
  }
  getAddress () { return this.address }

  setAddressNow (addressNow) {
    this.addressNow = addressNow
  }
  getAddressNow () { return this.addressNow }

  setX (x) {
    this.x = x
  }
  getX () { return this.x }

  setY (y) {
    this.y = y
  }
  getY () { return this.y }

  setLuotXem (lx) {
    this.luotXem = lx
  }
  getLuotXem () { return this.luotXem }

}
export default Users;
