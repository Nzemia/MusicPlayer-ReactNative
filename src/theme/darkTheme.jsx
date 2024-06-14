import { DefaultTheme } from "@react-navigation/native";

export const darkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#091227",
        textPrimary: "#EAF0FF",
        textSecondary: "#A5C0FF",
        iconPrimary: "#EAF0FF",
        iconSecondary: "#8996B8",
        minimumTintColor: "#FFFFFF",
        maximumTintColor: "#555B6A"
    },
};