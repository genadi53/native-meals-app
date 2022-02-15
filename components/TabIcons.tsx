import { Ionicons } from "@expo/vector-icons";

interface TabBarIconProps {
  focused: boolean;
  tintColor?: string | undefined;
  horizontal?: boolean | undefined;
}

export const RestaurantIcon = ({ tabInfo }: { tabInfo: TabBarIconProps }) => {
  return <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />;
};

export const StarIcon = ({ tabInfo }: { tabInfo: TabBarIconProps }) => {
  //   console.log(tabInfo);
  return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
};
