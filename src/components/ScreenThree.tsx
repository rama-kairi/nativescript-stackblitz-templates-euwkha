import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";

type ScreenThreeProps = {
    route: RouteProp<MainStackParamList, "Three">,
    navigation: FrameNavigationProp<MainStackParamList, "Three">,
};

export function ScreenThree({ navigation, route }: ScreenThreeProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.text}>
                You're viewing screen Three!
            </label>
            <label style={styles.text}>
                Message: {route.params.message}
            </label>
            <button
                style={styles.button}
                onTap={() => navigation.goBack}
            >
                Go back
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "green",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});
