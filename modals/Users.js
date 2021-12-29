import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  Alert, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView,
} from 'react-native';
import store from 'react-native-simple-store';

class Users {
  static user = null

  id = '';

  sdt = '';

  name = '';

  pass = '';

  image = '';

  address = '';

  luotXem = 0;

  checkWorker = 0;

  x = 0;

  y = 0;

  addressNow = '';

  static getInStance() {
    if (this.user === null) {
      // @ts-ignore
      this.user = new Users();
      store.push('user', this.user);
    }
    // this.user = this;
    return this.user;
  }

  constructor() {
    this.name = 'cong';
    if (this.user === null) {
      this.user = new Users();
    }
  }

  async regitster(name, std, pass, address, checkWorker = 0) {

  }

  setReduxLocal = async () => {
    if (await store.get('user')) {
      console.log('======= da sửa===================');
      this.setName('cong');
      this.setSDT('0392225405');
      console.log('=this.getInStance()===================');
      var x=this.getInStance()
      console.log(x);
      console.log('====================================');
      store.update('user', this.user);
      store.get('id').then((value) => this.user = value);
      console.log('====================================');
    }
  }

  setID(id) {
    this.id = id;
  }

  getID() { return this.id; }

  setCheckWorker(checkWorker) {
    this.checkWorker = checkWorker;
  }

  getCheckWorker() { return this.checkWorker; }

  setName(name) {
    this.name = name;
  }

  getName() { return this.name; }

  setSDT(sdt) {
    this.sdt = sdt;
  }

  getSDT() { return this.sdt; }

  setPass(pass) {
    this.pass = pass;
  }

  getPass() { return this.pass; }

  setImg(img) {
    this.image = img;
  }

  getImg() { return this.image; }

  setAddress(address) {
    this.address = address;
  }

  getAddress() { return this.address; }

  setAddressNow(addressNow) {
    this.addressNow = addressNow;
  }

  getAddressNow() { return this.addressNow; }

  setX(x) {
    this.x = x;
  }

  getX() { return this.x; }

  setY(y) {
    this.y = y;
  }

  getY() { return this.y; }

  setLuotXem(lx) {
    this.luotXem = lx;
  }

  getLuotXem() { return this.luotXem; }
}
export default Users;
