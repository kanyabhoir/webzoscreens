import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Earning = () => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.txt}>Earning</Text>
        </View>
    )
}

export default Earning

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 24,
        fontWeight: "600",
        color: "#000000"
    }
})