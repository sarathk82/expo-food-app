import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SliderBase
} from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView
} from "@react-navigation/drawer";

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../constants";

import { MainLayout } from "../screens";
import Animated from 'react-native-reanimated';



const Drawer = createDrawerNavigator();


const CustomDrawerItem = ({ label, icon }) => {

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 30,
                marginBottom: SIZES.base,
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base
            }}
        //onPress
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white
                }}
            />
            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.white,
                    ...FONTS.h4

                }}
            >{label}</Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation }) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    paddingHorizontal: SIZES.radius

                }}
            >
            </View>
            {/*Close*/}
            <View
                style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: COLORS.green
                }}
            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.closeDrawer()}
                >
                    <Image
                        source={icons.cross}
                        style={{
                            height: 35,
                            width: 35,
                            tintColor: COLORS.white
                        }}
                    />

                </TouchableOpacity>
                {/*Profile*/}

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                    onPress={() => console.log("Profile")}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}

                    />

                    <View
                        style={{
                            marginLeft: SIZES.radius

                        }}
                    >

                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                        >{dummyData.myProfile?.name}
                        </Text>

                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body4
                            }}
                        >
                            View your Profile
                        </Text>

                    </View>
                </TouchableOpacity>
                {/*Drawer Items*/}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                    />

                    <CustomDrawerItem
                        label={constants.screens.my_wallet}
                        icon={icons.wallet}
                    />

                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                    />

                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                    />

                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    <CustomDrawerItem
                        label="Track your Order"
                        icon={icons.location}
                    />

                    <CustomDrawerItem
                        label="Coupons"
                        icon={icons.coupon}
                    />

                    <CustomDrawerItem
                        label={constants.screens.cart}
                        icon={icons.cart}
                    />

                    <CustomDrawerItem
                        label="Settings"
                        icon={icons.setting}
                    />

                    <CustomDrawerItem
                        label="Invite a Friend"
                        icon={icons.profile}
                    />

                    <CustomDrawerItem
                        label="Help Center"
                        icon={icons.help}
                    />
                </View>

                <View
                    style={{
                        marginVertical: SIZES.radius,
                        marginLeft: SIZES.radius,
                        marginBottom: SIZES.padding

                    }}
                >
                    <CustomDrawerItem
                        label="Log Out"
                        icon={icons.logout}
                    />

                </View>
            </View>
        </DrawerContentScrollView >
    )
}

const CustomDrawer = () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0))



    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, .8]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = { borderRadius, transform: [{ scale }] }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'transparent'

            }}
        >
            <Drawer.Navigator
                screenOptions={{
                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                    drawerStyle: {
                        width: '65%',
                        flex: 1,
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    }
                }}

                initialRouteName="MainLayout"
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}

            >
                <Drawer.Screen name="Freshmeals">
                    {props => <MainLayout {...props}
                        drawerAnimationStyle={animatedStyle}
                    />}
                </Drawer.Screen>


            </Drawer.Navigator>
        </View >
    )
}

export default CustomDrawer;


