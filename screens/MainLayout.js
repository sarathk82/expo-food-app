import React from 'react';
import {
    Text
} from 'react-native';

import Animated from "react-native-reanimated";
import { COLORS } from '../constants';


const MainLayout = ({ drawerAnimationStyle }) => {
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                ...drawerAnimationStyle
            }}
        >
            <Text>Main Layout</Text>
        </Animated.View>
    )
}

export default MainLayout;