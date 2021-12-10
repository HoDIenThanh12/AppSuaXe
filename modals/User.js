import React, { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import store from 'react-native-simple-store';
class User {
    static _user = null;
    id = "";
    sdt = "";
    name = "";
    pass = "";
    image = "";
    address = "";
    luotXem = 0;
    check = 0;
    x = 0;
    y = 0;
    constructor() {
        this.setAccount()
    }
    getInstance() {
        if (this._user === null) {
            this._user = new User();
        }
        return this._user
    }
    async Regitster(name, SDT, pass, address, checkWorker) {
        if (address == null)
            address = "Việt nam";
        var check = checkWorker == true ? "1" : "0";
        const firestores = firestore().collection('User')
        var i = 0;
        await firestores.get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    var datas = documentSnapshot.data();
                    if (datas["sdt"] == SDT) {
                        i++;
                        Alert.alert("Số điện thoại đã đăng ký !")
                    }
                });
            });
        if (i == 0) {
            await firestores.add({
                name: name,
                sdt: SDT,
                pass: pass,
                image: "",
                x: "-1",
                y: "-1",
                checkWorker: check,
                luotXem: "0",
                address: address
            })
                .then(() => {
                    Alert.alert("Đăng ký thành công",)
                });
        }
    }
    setAccount() {
        if (store.get('id')) {

            store.get('id').then((value) => this.setID(value))
            store.get('pass').then((value) => this.setPass(value))
            store.get('sdt').then((value) => this.setSDT(value))
            store.get('name').then((value) => this.setName(value))
            store.get('luotXem').then((value) => this.setLuotXem(value))
            store.get('img').then((value) => this.setImage(value))
            store.get('address').then((value) => this.setAddress(value))
            store.get('x').then((value) => this.setX(value))
            store.get('y').then((value) => this.setY(value))

        }
    }
    async Login(acount, pass) {
        // Alert.alert("Đăng ký thành công")
        const usersCollection = firestore().collection('User');
        var i = 0;
        await usersCollection.get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    var datas = documentSnapshot.data();
                    if (acount == datas["sdt"] && pass == datas["pass"]) {
                        var temp = {
                            id: documentSnapshot.id,

                            sdt: datas["sdt"],
                            pass: datas["pass"],
                            address: (datas["pass"]),
                            name: (datas["pass"]),
                            img: (datas["pass"]),
                            setLuotXem: (datas["pass"]),
                            x: (datas["x"]),
                            y: (datas["y"]),

                        }
                        store.push("id", documentSnapshot.id);
                        store.push("pass", datas["pass"]);
                        store.push("sdt", datas["sdt"]);
                        store.push("name", datas["name"]);
                        store.push("luotXem", datas["luotXem"]);
                        store.push("img", datas["image"]);
                        store.push("address", datas['address']);
                        store.push("x", datas['x']);
                        store.push("y", datas['y']);
                        store.push("checkWorker", datas['checkWorker']);
                        // store.push("user", temp);
                        this.setID(documentSnapshot.id),
                            this.setPass(datas["pass"]),
                            this.setSDT(datas["sdt"]),
                            this.setName(datas["name"]),
                            this.setLuotXem(datas["luotXem"]),
                            this.setImage(datas["image"]),
                            this.setAddress(datas['address']),
                            this.setX(datas['x']),
                            this.setY(datas['y']),
                            i = 1,
                            console.log((datas["name"]))
                    }
                });
            });
        return i;
    }

    async ListWorkerQualyity() {
        let list = []
        const firestores = firestore().collection('User')
        await firestores.get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    var datas = documentSnapshot.data();
                    if (datas["checkWorker"] == "1") {
                        let temp = {
                            id: documentSnapshot.id,
                            name: datas["name"],
                            sdt: datas["sdt"],
                            luotXem: datas["luotXem"],
                            x: datas["x"],
                            y: datas["y"],
                            address: datas["address"],
                            image: datas["image"],
                        }
                        list.push(temp)
                    }
                });
            });
        for (var i = 0; i < (list.length - 1); i++) {
            for (var y = i + 1; y < (list.length); y++) {
                console.log(list[y].luotXem);
                if (parseInt(list[i].luotXem) < parseInt(list[y].luotXem)) {
                    console.log(list[y].luotXem);
                    var temps = list[i];
                    list[i] = list[y];
                    list[y] = temps;
                }
            }
        }
        return list;
    }
    async ListWorker() {
        let list = []
        const firestores = firestore().collection('User')
        await firestores.get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    var datas = documentSnapshot.data();
                    if (datas["checkWorker"] == "1") {
                        let temp = {
                            id: documentSnapshot.id,
                            name: datas["name"],
                            sdt: datas["sdt"],
                            luotXem: datas["luotXem"],
                            x: datas["x"],
                            y: datas["y"],
                            address: datas["address"],
                            image: datas["image"],
                        }
                        list.push(temp)
                    }
                });
            });
        return list;
    }
    async Update(name, type) {

        var firestores = firestore().collection('User')
        firestores.add({
            name: name,
            SDT: SDT,
            pass: pass,
            image: "",
            x: '-1',
            y: '-1',
            checkWorker: 0,
            luotXem: 0
        })
            .then(() => {
                Alert.alert("Cập nhật thành công")
            });
    }
    async getProfileWorker(id) {
        var worker
        const usersCollection = firestore().collection('User');
        await usersCollection.get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    var datas = documentSnapshot.data();
                    if (documentSnapshot.id === id) {
                        let item = {
                            id: id,
                            img: datas["img"],
                            x: datas["x"],
                            y: datas["y"],
                            address: datas["address"],
                            name: datas["name"],
                            sdt: datas["sdt"],
                            luotXem: datas["luotXem"],
                        }
                        worker = item
                    }
                });
            });
        return worker;
    }

    async getListBuild() {
        var list = []
        const usersCollection = firestore().collection('Build');
        await usersCollection.where('SDT1', '==', ['' + this.getSDT() + ''])
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    var datas = documentSnapshot.data();
                    if (list.length > 0) {
                        list.forEach(e => {
                            if (e.status == "1") {
                                let item = {
                                    id: documentSnapshot.id,
                                    ngay: datas["ngay"],
                                    note: datas["Note"],
                                    sdt2: datas["sdt2"],
                                    status: datas["status"],
                                    total: datas["total"]
                                }
                                list.push(item);
                            }
                        })
                    }
                    else {
                        if (datas["total"] == '1') {
                            let item = {
                                id: documentSnapshot.id,
                                ngay: datas["ngay"],
                                note: datas["Note"],
                                sdt2: datas["sdt2"],
                                status: datas["status"],
                                total: datas["total"]
                            }
                            list.push(item);
                        }
                    }
                });
            });

        return list;
    }

    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSDT() {
        return this.sdt;
    }
    getPass() {
        return this.pass;
    }
    getImage() {
        return this.image
    }
    getLuotXem() {
        return this.luotXem
    }
    getAddress() {
        this.address
    }
    getX = () => this.x
    getY = () => this.y
    setY(y) {
        this.y = y
    }
    setX(x) {
        this.x = x
    }
    setAddress(address) {
        this.address = address
    }
    setLuotXem(lx) {
        this.luotXem = lx
    }
    setID(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setSDT(sdt) {
        this.sdt = sdt;
    }
    setPass(pass) {
        this.pass = pass;
    }
    setImage(image) {
        this.image = image;
    }


}
export default User