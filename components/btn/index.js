import React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import In18 from '../../common/constans';
const Button =(props)=>{
    const {title, isDisable=false, styleText, styleBTN} = props
    return(
        <TouchableOpacity disabled={isDisable}
            style={[styles.container, styleBTN]}
            {...props}
        >
            <Text style={styleText}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container: {
        display: 'flex',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:20,
        paddingVertical:10,
        borderColor:'red',
        borderWidth:1
    }
})
export default Button