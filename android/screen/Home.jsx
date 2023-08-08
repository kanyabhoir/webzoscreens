import { StyleSheet, Text, Image, View, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ onSearch = () => { } }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };
    const handleButtonPress = () => {
        console.log("hello");
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#f1f1f1" barStyle="dark-content" />
            <View style={styles.header}>
                <View style={styles.innerHeader}>
                    <View>
                        <Image
                            style={styles.avatarImg}
                            source={require("../app/src/images/Default.png")}
                        />
                    </View>
                    <View style={styles.usersgreeting}>
                        <Text style={styles.hello}> Hello, </Text>
                        <Text style={styles.viewrs}> Viewer! </Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.icon} >
                    <View>
                        <Image
                            style={styles.Vectoricon}
                            source={require("../app/src/images/Vector.png")}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
                    <Image
                        style={styles.Searchicon}
                        source={require("../app/src/images/Search.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.emptybox}>

            </View>
            <View style={styles.stickybtn}>
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Image
                        style={styles.addImg}
                        source={require("../app/src/images/add.png")}
                    />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    mainView: {
        justifyContent: "center",
        elevation: 0,
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginVertical: 69
    },

    avatarImg: {
        width: 41,
        height: 41,
    },
    Vectoricon: {
        width: 24,
        height: 28,
    },
    Searchicon: {
        width: 16,
        height: 16,
        marginVertical: 7,
        marginHorizontal: 7
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: "100%",
        marginTop: 17,
        marginBottom: 27
    },
    icon: {

    },
    innerHeader: {
        flexDirection: "row",
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        elevation: 7,
        marginBottom: 30
    },
    searchInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    searchIcon: {
        backgroundColor: "#066DE3",
        borderRadius: 30,
        marginRight: 8,
        height: 30,
        width: 30

    },
    emptybox: {
        backgroundColor: "#D9D9D9",
        borderRadius: 12,
        height: 380,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    usersgreeting: {
         marginLeft: 13,
          flexDirection: "row",
           alignItems: "center"
         },
    hello: {
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 36,
        color: "#000"
    }, viewrs: {
        fontWeight: "300",
        fontSize: 24,
        lineHeight: 36,
        color: "#000"

    },
    stickybtn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    button: {
        backgroundColor: '#95A5A6',
        width: 44,
        height: 44,
        borderRadius: 50,
        elevation: 3,
    },
    addImg:{
        width:15,
        height:15,
        marginHorizontal:14,
        marginVertical:15

    }
})