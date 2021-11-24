import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import In18 from '../../common/constans';



const TextInputs = (props) => {
    const { placeholder, isDisable = false, style } = props
    return (
        <View >
            <TextInput
                placeholder={placeholder}
                {...props}
                style={styles.container}
            >
            </TextInput>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,  
        paddingHorizontal:15,
        marginVertical:10
    },
    containerAll: {
        display: 'flex',
    }
})
export default TextInputs