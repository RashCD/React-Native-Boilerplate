import { Navigation } from "react-native-navigation";

import Home from "./screens/Home";
import Landing from "./screens/Landing";
import Library from "./screens/Library";
import Login from "./screens/Login";

export function registerScreens(store: object, provider: object) {
    Navigation.registerComponent("Landing", () => Landing, store, provider);
    Navigation.registerComponent("Home", () => Home, store, provider);
    Navigation.registerComponent("Library", () => Library, store, provider);
    Navigation.registerComponent("Login", () => Login, store, provider);
}
