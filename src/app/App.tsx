/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme } from "react-native";
import { AppStyles as styles } from "./App.styles";
import { NotesList } from "../widgets/NotesList";

export const App = () => {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            <ScrollView contentContainerStyle={styles.App} contentInsetAdjustmentBehavior="automatic">
                <NotesList />
            </ScrollView>
        </SafeAreaView>
    );
};
