import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import styles from './style';
import Img from '../../assets/index';
import TextInput from '../../components/textinput/index';
import In18 from '../../common/constans';
import Buttons from '../../components/btn/index';
import { Router, Actions, Scene } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import { height, width } from '../../common/styles';
import { IconButton } from 'react-native-paper'
const page = (p) => {
    const { sdt, pass, name, address, img } = p.state;

    const { onChangeText, onChangeImgAvatar, onPressSave } = p.func;

    const [isModals, setisModals] = useState(false);

    const [contentOld, setcontentOld] = useState('');
    const [content, setcontent] = useState('');
    const [type, settype] = useState('0');
    const [nameContent, setnameContent] = useState('Tên');
    // const WrapperComponent = (props) => {
    //     return (
    //         <View>
    //             <Modal isVisible={isModals} animationType="slide"
    //                 transparent={true}>
    //                 <View style={styles.modals} >
    //                     <View>
    //                         <Text style={styles.titleModals}>  Chỉnh sửa  </Text>
    //                     </View>
    //                     <Text style={styles.nameOld}> {props.txtName} cũ : {props.nameOld}  </Text>
    //                     <TextInput
    //                         value={sdt}
    //                         placeholder='Mới'
    //                         onChangeText={(text) => onChangeText('0', text)}
    //                         style={styles.txtEdit}
    //                     >
    //                     </TextInput>
    //                     <View style={styles.btnModal}>
    //                         <Button
    //                             styleBTN={styles.styleBtnModal}
    //                             title='Thoát'
    //                             onPress={() => setisModals(!isModals)}
    //                         >
    //                         </Button>
    //                         <Button
    //                             title='Save'
    //                             styleBTN={styles.styleBtnModalSave}
    //                             onPress={onPressSave(type, content)}
    //                         >
    //                         </Button>
    //                     </View>
    //                 </View>
    //             </Modal>
    //         </View>
    //     );
    // }
    const subMit = (types) => {
        console.log(types);
        setisModals(!isModals);
        settype(types);
        if (types === '0') {
            setcontentOld(name);
            setnameContent('Tên ');
        }
        if (types === '1') {
            setcontentOld(sdt);
            setnameContent('SDT ');
        }
        if (types === '2') {
            setcontentOld(pass);
            setnameContent('Mật khẩu ');
        }
        if (types === '3') {
            setcontentOld(address);
            setnameContent('Địa chỉ ');
        }
    };
    const Texts = props => {
        console.log(props.style)
        var txt = props.state
        return (
            <View style={styles.containerEdit}>
                <View style={styles.contentDetails}>
                    <Text style={[props.style]}>
                        <Text style={{ fontWeight: 'bold' }}>
                            {props.nameConent}
                        </Text>
                        : {props.state}
                    </Text>
                    <IconButton
                        icon="arrow-right-bold"
                        onPress={() => subMit(props.type)}
                    >
                    </IconButton>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerAvatar}>
                    {img ? (
                        <Image style={styles.imgAvatart} source={Img.Image.img} />
                    ) : (
                        <Image style={styles.imgAvatart} source={Img.Image.imgAvatar} />
                    )}
                    <TouchableOpacity
                        style={styles.iconEditAvatar}
                        onPress={onChangeImgAvatar}>
                        <Image style={styles.iconEditAvatar} source={Img.Icons.iconEditImg} />
                    </TouchableOpacity>
                </View>
                
                <View>
                    <Texts nameConent='Tên' state={name} type={'0'}  ></Texts>
                    <Texts nameConent='SDT' state={sdt} type={'1'}></Texts>
                    <Texts nameConent='Mật khẩu' state={pass} type={'2'} ></Texts>
                    <Texts nameConent='Địa chỉ' state={address} type={'3'} style={styles.txtAddress}></Texts>
                </View>
                <View style={styles.btnModal}>
                    <Buttons
                        styleBTN={styles.styleBtnModal}
                        title="Xem lại hóa đơn"
                        onPress={() => setisModals(!isModals)}></Buttons>
                    {/* <Buttons
                        title="Save"
                        styleBTN={styles.styleBtnModalSave}
                        onPress={() => onPressSave(type)}></Buttons> */}
                </View>
            </ScrollView>
            <Modal isVisible={isModals} animationType="slide" transparent={true}>
                <View style={styles.modals}>
                    <View>
                        <Text style={styles.titleModals}> Chỉnh sửa </Text>
                    </View>
                    <Text style={styles.nameOld}>
                        {nameContent} cũ : {contentOld}
                    </Text>
                    <TextInput
                        placeholder="Mới"
                        onChangeText={text => onChangeText(type, text)}
                        style={styles.txtEdit}></TextInput>
                    <View style={styles.btnModal}>
                        <Buttons
                            styleBTN={styles.styleBtnModal}
                            title="Thoát"
                            onPress={() => setisModals(!isModals)}></Buttons>
                        <Buttons
                            title="Save"
                            styleBTN={styles.styleBtnModalSave}
                            onPress={() => onPressSave(type)}></Buttons>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default page;
