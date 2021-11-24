import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './style'
import Img from '../../assets/index'
import TextInput from '../../components/textinput/index'
import In18 from '../../common/constans'
import Button from '../../components/btn/index'
const page = (p) => {
    const { type, sdt, name, address, password } = p.state
    const { onEditImg, onChangeName, onChangeSDT, onChangePassword, onChangeAddress, onPressEdit } = p.func
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    style={styles.imgLoGo}
                    source={Img.Image.worker} 
                />
            </View> 
            <View style={styles.containerContext}>
                <TextInput
                    value={txtSDT}
                    placeholder={In18.User.numberPhone}
                    onChangeText={onChangeSDT}
                >
                </TextInput>
                <TextInput
                    value={txtPass}
                    placeholder={In18.User.password}
                    onChangeText={onChangeSDT}
                >
                </TextInput>
            </View>
            <View style={styles.conatinerRegitster}>
                <Text>{In18.NomalTitle.questionAccount}</Text>
                <Button
                    title={In18.TitleBtn.register}
                    onPress={onPressLogin}
                    styleText={styles.textRegister}
                    styleBTN={styles.btnRegister}
                ></Button>
            </View>
            <Button
                title={In18.TitleBtn.login}
                onPress={onPressLogin}
                // styleBTN={styles.btnLogin}
            >

            </Button>
        </View>
    )
}
export default page