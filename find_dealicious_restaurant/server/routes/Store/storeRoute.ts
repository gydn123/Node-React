const storeExpress = require("express");
const storeRouter = trustBestExpress.Router();
const StroeController = require("../../Controllers/Stroe/StoreController");

storeRouter.get("/store", StroeController.getStore);

module.exports = storeRouter;
