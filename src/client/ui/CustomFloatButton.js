import React from 'react';
import {
    StyleProp,
    ViewStyle,
    Animated,
    StyleSheet,
    Platform,
    ScrollView,
    Text,
    SafeAreaView,
    I18nManager,
} from 'react-native';
import { AnimatedFAB } from 'react-native-paper';

export const CustomFloatButton = ({
                         onPress,
                         animatedValue,
                         visible,
                         extended,
                         label,
                         animateFrom,
                         style,
                         iconMode,
                     }) => {

    const fabStyle = { [animateFrom]: 16 };

    return (
        <SafeAreaView style={styles.container}>
            <AnimatedFAB
                icon={'plus'}
                label={''}
                extended={true}
                onPress={onPress}
                visible={visible}
                animateFrom={'right'}
                iconMode={'dynamic'}
                style={[styles.fabStyle, style, fabStyle]}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
    },
});