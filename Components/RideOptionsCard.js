import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	View,
	FlatList,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
	{
		id: "uber-X-123",
		title: "Uber X",
		multiplier: 1,
		image: "https://links.papareact.com/3pn",
	},
	{
		id: "uber-XL-456",
		title: "Uber XL",
		multiplier: 1.25,
		image: "https://links.papareact.com/5w8",
	},
	{
		id: "uber-LUX-789",
		title: "Uber LUX",
		multiplier: 1.75,
		image: "https://links.papareact.com/7pf",
	},
];

//Surge price
const SURGE_CHARGE_RATE = 1; //1.5;

//GBP to Naira Official Exchange Rate
const GBPtoNaira = 580 / 7.5;

const RideOptionsCard = () => {
	const navigation = useNavigation();
	const [selected, setSelected] = useState(null);
	const travelTimeInformation = useSelector(selectTravelTimeInformation);

	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
			<View>
				<TouchableOpacity
					onPress={() => navigation.navigate("NavigateCard")}
					style={[tw`absolute top-2 left-5 z-50 p-2 rounded-full`]}
				>
					<Icon name="chevron-left" type="font-awesome" />
				</TouchableOpacity>
				<Text style={tw`text-center py-2 text-xl font-semibold`}>
					Select a Ride - {travelTimeInformation?.distance?.text}
				</Text>
			</View>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item: { id, title, multiplier, image }, item }) => (
					<TouchableOpacity
						onPress={() => setSelected(item)}
						style={tw`flex-row justify-between items-center px-5 
                        ${id === selected?.id && "bg-gray-200"}`}
					>
						<Image
							style={{ width: 75, height: 75, resizeMode: "contain" }}
							source={{ uri: image }}
						/>
						<View style={tw`-ml-6`}>
							<Text style={tw`text-lg font-semibold`}>{title}</Text>
							<Text>{travelTimeInformation?.duration?.text}</Text>
						</View>
						<Text style={tw`text-lg`}>
							{new Intl.NumberFormat("en-ng", {
								style: "currency",
								currency: "NGN",
							}).format(
								(travelTimeInformation?.duration?.value *
									SURGE_CHARGE_RATE *
									GBPtoNaira *
									multiplier) /
									100
							)}
						</Text>
					</TouchableOpacity>
				)}
			/>
			<View style={tw`mt-auto border-t border-gray-200`}>
				<TouchableOpacity
					disable={!selected}
					style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
				>
					<Text style={tw`text-center text-white text-xl`}>
						Choose {selected?.title}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
