import { StyleProp } from "react-native";

export type UIComponentProps = {
    style?: StyleProp<T>;
};

export type UIComponentWithChildrenProps = UIComponentProps & {
    children?: React.JSX.Element;
};
