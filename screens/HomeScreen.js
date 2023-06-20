import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../Components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../Components/NavFavourites";

const HomeScreen = () => {
	const dispatch = useDispatch();
	return (
		<SafeAreaView style={tw`bg-white h-full p-5`}>
			<View style={tw`pt-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
				/>
				<GooglePlacesAutocomplete
					placeholder="Where From?"
					styles={{
						container: {
							flex: 0,
						},

						textInput: {
							fontSize: 18,
						},
					}}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description,
							})
						);
						dispatch(setDestination(null));
						/* console.log(data);
						console.log(details); */
					}}
					fetchDetails={true}
					minLength={2}
					enablePoweredByContainer={false}
					returnKeyType={"search"}
					query={{
						key: "AIzaSyCiEe7gQwm5vRM3vZ_RWQF8lgQf_tLGMzo", //GOOGLE_MAPS_APIKEY,
						language: "en",
					}}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={400}
					onFail={(error) => console.error(error)}
				/>

				<NavOptions />
				<NavFavourites />
				{/* <Text>I am the HomeScreen</Text> */}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	text: {
		color: "blue",
	},
});

// style={tw`text-red-500 p-5`}
// https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png
//
// https://logos-world.net/imageup/Uber/Uber-Logo-PNG5.png
// https://logos-world.net/imageup/Uber/Uber-Logo-PNG8.png
