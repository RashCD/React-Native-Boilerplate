"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_navigation_1 = require("react-native-navigation");
var Landing_1 = require("./screens/Landing");
var Home_1 = require("./screens/Home");
function registerScreens() {
    react_native_navigation_1.Navigation.registerComponent('Landing', function () { return Landing_1.default; });
    react_native_navigation_1.Navigation.registerComponent('Home', function () { return Home_1.default; });
}
exports.registerScreens = registerScreens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBbUQ7QUFFbkQsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUVsQztJQUNFLG9DQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxpQkFBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0lBQ3ZELG9DQUFVLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGNBQU0sT0FBQSxjQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUhELDBDQUdDIn0=