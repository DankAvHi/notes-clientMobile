import { TouchableOpacity } from "react-native";
import { UIComponentWithChildrenProps } from "../UIComponent";

export const IconButton = (props: UIComponentWithChildrenProps) => {
    const { children } = props;
    return <TouchableOpacity>{children}</TouchableOpacity>;
};
