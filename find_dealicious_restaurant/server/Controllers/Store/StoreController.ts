import { Request, Response } from "express";
const store = require("../../Model/Store/Store");

exports.getStore = async (_: Request, res: Response) => {
  try {
    const data = await store.findOne({}, { _id: 0, store: 1 });

    if (!data || data.store.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    const storeData = data.store;
    res.status(200).json(storeData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Server error" });
  }
};
