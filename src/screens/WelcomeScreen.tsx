import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function WelcomeScreen() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text
          style={{ fontSize: wp(10) }}
          className="text-center font-bold text-gray-700"
        >
          Voice Assistant
        </Text>
        <Text
          style={{ fontSize: wp(4) }}
          className="text-center tracking-wide text-gray-600
         font-semibold"
        >
          The Future is here, powered by AI.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require("../../assets/images/welcome.png")}
          style={{ width: wp(75), height: wp(75) }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigate("Home")}
        className="bg-emerald-600 mx-5 p-4 rounded-2xl"
      >
        <Text
          className="text-center font-bold text-white text-2xl"
          style={{ fontSize: wp(6) }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
