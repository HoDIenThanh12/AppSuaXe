import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import React, {PureComponent} from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'
import * as Animatable from 'react-native-animatable'
import BaseInput from 'frontend/Components/TextInput/BaseInput'
import { getLength } from 'common/function'
import GraphemeSplitter from 'grapheme-splitter'
import { Colors } from 'common/styles'

class InputNomarl extends PureComponent{
    constructor(props){
        super(props)
    }
    onChangeText=(value)=>{
            
    }
    render() {
        const{ value, label, style, placeholder, secureTextEntry}=props
        render(
            <View>
                <Text>{label}</Text>
                <TextInput
                    onChangeText={this.onChangeText}
                    placeholder={ placeholder}
                    secureTextEntry={secureTextEntry}
                    style={styles.input}
                    {...this.props}
                >
                </TextInput>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input:{
        borderRadius:20,
        padding:10,
    }
})
export default InputNomarl