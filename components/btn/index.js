import React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import In18 from '../../common/constans';
const Button =(props)=>{
    const {title, isDisable=false, style} = props
    return(
        <TouchableOpacity disabled={isDisable}
            style={[styles.container, style]}
            {...props}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button