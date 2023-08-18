"use strict";
const storeExpress = require("express");
const storeRouter = storeExpress.Router();
const StroeController = require("../../Controllers/SearchList/SearchListController");
storeRouter.get("/store", StroeController.getStore);
module.exports = storeRouter;
//# sourceMappingURL=storeRoute.js.map