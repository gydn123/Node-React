"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./Top_lists.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min.js");
require("bootstrap-icons/font/bootstrap-icons.css");
const Top_lists = () => {
    const [useTrustBestData, setUseTrustBestData] = (0, react_1.useState)([]);
    const location = (0, react_router_dom_1.useLocation)();
    const queryParams = new URLSearchParams(location.search);
    const queryValue = queryParams.get("type"); // 쿼리스트링의 "type" 파라미터 추출
    console.log(queryValue + "queryValue@@@");
    (0, react_1.useEffect)(() => {
        if (queryValue) {
            getTrustBest(queryValue);
            console.log(queryValue + "@@queryValue@@@이펙트");
        }
    }, [queryValue]);
    const getTrustBest = (queryValue) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:4500/trustBest/type=${queryValue}`);
            console.log(queryValue + "@@queryValue@@@페치");
            if (!response.ok) {
                const errorData = yield response.json();
                const statusCode = response.status;
                const statusText = response.statusText;
                const message = errorData.message[0];
                console.log(`${statusCode} - ${statusText} - ${message}`);
                return;
            }
            const data = yield response.json();
            setUseTrustBestData(data);
        }
        catch (err) {
            console.log("error log: ", err);
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null, useTrustBestData.map((item, index) => (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("header", { className: "basic-info-list" },
            react_1.default.createElement("p", { className: "status" }, "1111\uD074\uB9AD | 2023-08-2 "),
            react_1.default.createElement("h1", { className: "title" }, item.titleText),
            react_1.default.createElement("h4", { className: "subtitle" }, item.content)),
        react_1.default.createElement("main", { className: "container-place" },
            react_1.default.createElement("tr", null,
                react_1.default.createElement("td", null,
                    react_1.default.createElement("div", { className: "place-list" },
                        react_1.default.createElement("div", { className: "place-item" },
                            react_1.default.createElement("img", { src: item.src, alt: item.alt }),
                            react_1.default.createElement("div", { className: "place-info" },
                                react_1.default.createElement("div", { className: "place-info-header" },
                                    react_1.default.createElement("span", { className: "title" },
                                        react_1.default.createElement("h1", { className: "restaurant_name" }, "\uB3CC\uC0B0\uC2DD\uB2F9"),
                                        react_1.default.createElement("strong", { className: "rate-point expected" },
                                            react_1.default.createElement("span", null, "4.5")))),
                                react_1.default.createElement("p", null, "\uAC00\uAC8C1 \uC8FC\uC18C")),
                            react_1.default.createElement("div", { className: "buttons" },
                                react_1.default.createElement("button", { className: "wishlist-btn" },
                                    react_1.default.createElement("i", { className: "bi bi-star" }),
                                    react_1.default.createElement("span", { className: "wishlist-btn-txt" }, "\uAC00\uACE0\uC2F6\uB2E4")),
                                react_1.default.createElement("button", { className: "viewdetail" },
                                    react_1.default.createElement("p", { className: "viewdetail-p" },
                                        react_1.default.createElement(react_router_dom_1.Link, { to: `/listdetail` }, "\uAC00\uAC8C \uC790\uC138\uD788 \uBCF4\uAE30"))))))))))))));
};
exports.default = Top_lists;
//# sourceMappingURL=Top_lists.js.map