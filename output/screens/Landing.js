"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var NavigationTypes = (function (_super) {
    __extends(NavigationTypes, _super);
    function NavigationTypes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pushScreen = function () {
            _this.props.navigator.push({
                screen: 'Home',
                title: 'New Screen'
            });
        };
        return _this;
    }
    NavigationTypes.prototype.render = function () {
        return (<react_native_1.View style={{ marginTop: 10 }}>
                <react_native_elements_1.Button raised containerViewStyle={{ borderRadius: 10 }} icon={{ name: 'home', size: 32 }} buttonStyle={{ backgroundColor: 'red', borderRadius: 10 }} textStyle={{ textAlign: 'center' }} title={"Welcome to\nReact Native"} onPress={this.pushScreen}/>
            </react_native_1.View>);
    };
    return NavigationTypes;
}(React.Component));
exports.default = NavigationTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JlZW5zL0xhbmRpbmcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQiw2Q0FBMEM7QUFFMUMsK0RBQStDO0FBRS9DO0lBQThCLG1DQUF5QjtJQUF2RDtRQUFBLHFFQXVCQztRQXRCRyxnQkFBVSxHQUFHO1lBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUN0QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxLQUFLLEVBQUUsWUFBWTthQUN0QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7O0lBaUJOLENBQUM7SUFmVSxnQ0FBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLENBQ0gsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzNCO2dCQUFBLENBQUMsOEJBQU0sQ0FDSCxNQUFNLENBQ04sa0JBQWtCLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUN6QyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ2pDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDMUQsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FDbkMsS0FBSyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FDbEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUVqQztZQUFBLEVBQUUsbUJBQUksQ0FBQyxDQUNWLENBQUM7SUFDTixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBdkJELENBQThCLEtBQUssQ0FBQyxTQUFTLEdBdUI1QztBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9