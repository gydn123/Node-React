"use strict";
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
const store = require("../../Model/Store/Store");
exports.getStore = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield store.findOne({}, { _id: 0, store: 1 });
        if (!data || data.store.length === 0) {
            return res.status(404).json({ message: "No data found" });
        }
        const storeData = data.store;
        res.status(200).json(storeData);
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Server error" });
    }
});
//# sourceMappingURL=StoreController.js.map