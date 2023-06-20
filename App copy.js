/* import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, parameters } from "./src/global/styles";

const App = () => {
	return (
		<View>
			<Text>Uber Clone App</Text>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
}); */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<HomeScreen />
				{/* <View style={styles.container}>
				<Text>Uber Clone app - First Attempt!!</Text>
				<StatusBar style="auto" />
				
			</View> */}
			</SafeAreaProvider>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
