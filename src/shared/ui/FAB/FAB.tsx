import { TouchableOpacity } from "react-native";
import { UIComponentWithChildrenProps } from "../UIComponent";

export const FAB = (props: UIComponentWithChildrenProps) => {
    const { children } = props;
    return <TouchableOpacity>{children}</TouchableOpacity>;
};
