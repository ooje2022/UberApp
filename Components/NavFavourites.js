import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
	{
		id: "123",
		icon: "home",
		location: "Home",
		destination:
			"Victory Park Estate, Off Cattlerock Road, Osapa, Lekki, Lagos State, Nigeria",
	},

	{
		id: "456",
		icon: "briefcase",
		location: "Work",
		destination:
			"km 19, Lekki-Epe Expressway, Maroko, Lagos Island, Lagos State, Nigeria",
	},
];

const NavFavourites = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => (
				<View style={[tw`bg-gray-200 h-1`, { height: 0.5 }]} />
			)}
			renderItem={({ item: { location, destination, icon } }) => (
				<TouchableOpacity style={tw`flex-row items-center p-2`}>
					<Icon
						style={tw`mr-2 rounded-full bg-gray-300 p-3`}
						name={icon}
						type="ionicon"
						color="white"
						size={18}
					/>
					<View>
						<Text style={tw`font-semibold text-lg`}>{location}</Text>
						<Text style={tw`text-gray-500`}>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavFavourites;

const styles = StyleSheet.create({});
