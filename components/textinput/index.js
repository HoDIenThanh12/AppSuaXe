import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import In18 from '../../common/constants';
import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native'

const MYWIDTH = Dimensions.get('window').width
const MYHEIGHT = Dimensions.get('window').height
const width = num => PixelRatio.roundToNearestPixel(MYWIDTH * (num / 100))
const height = num => PixelRatio.roundToNearestPixel(MYHEIGHT * (num / 100))
const TextInputs = (props) => {
    const { placeholder, isDisable = false, style } = props
    return (
        <View >
            <TextInput
                placeholder={placeholder}
                {...props}
                style={[styles.container,style]}
            >
            </TextInput>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10, 
        borderColor: 'orange',
        borderWidth: 1,  
        paddingHorizontal:15,
        marginVertical:10, 
        // width:width(90)
    },
    containerAll: {
        display: 'flex',
    }
})
export default TextInputs