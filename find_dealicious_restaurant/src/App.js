"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const listdetail_1 = __importDefault(require("./pages/List/listdetail"));
const Home_1 = __importDefault(require("./pages/HOME/Home"));
const SearchList_1 = __importDefault(require("./pages/SearchList/SearchList"));
const menubar_1 = __importDefault(require("./components/Home/Menubar/menubar"));
const Top_lists_1 = __importDefault(require("./pages/List/Top_lists"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(menubar_1.default, null),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/search/:searchValue", element: react_1.default.createElement(SearchList_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/top_lists/:queryValue", element: react_1.default.createElement(Top_lists_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/listdetail", element: react_1.default.createElement(listdetail_1.default, null) })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map