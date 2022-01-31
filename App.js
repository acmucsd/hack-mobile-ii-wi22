import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "./components/Post";
import { posts } from "./data";

export default function App() {
    const renderItem = ({ item }) => <Post item={item} />;
    const renderHeader = () => (
        <View style={styles.stories}>
            <Stories />
        </View>
    );
    const keyExtractor = (item) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.header}>
                <Header />
            </View>

            {/* https://reactnative.dev/docs/flatlist */}
            <FlatList
                data={posts}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const BORDER_BOTTOM = {
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        ...BORDER_BOTTOM,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        height: 44,
    },
    stories: {
        ...BORDER_BOTTOM,
        height: 104,
        paddingVertical: 10,
        paddingLeft: 8,
        backgroundColor: "#fafafa",
    },
});
