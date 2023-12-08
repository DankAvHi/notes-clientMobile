import { View } from "react-native";
import { UIComponentWithChildrenProps } from "../UIComponent";

export const Card = (props: UIComponentWithChildrenProps) => {
    const { children } = props;
    return <View>{children}</View>;
};
