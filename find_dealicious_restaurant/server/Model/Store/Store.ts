import mongoose, { Document, Schema } from "mongoose";

interface MenuItem {
  price: string;
  menu: string;
}

interface StoreItem {
  basicInfo: BasicInfo;
  comment: Comment;
  tag: Tag[];
}

interface BasicInfo {
  catename: string;
  mainphotourl: string;
  visit: number;
  favorite: number;
}

interface Tag {
  storename: string;
  category_name?: string;
  new_addr_fullname?: string;
  name3?: string;
  newaddrfull?: string;
  menu_name: MenuItem[];
}

const StoreSchema = new Schema<StoreItem>(
  {
    basicInfo: {
      catename: String,
      mainphotourl: String,
      visit: Number,
      favorite: Number,
    },
    comment: {
      list: [
        {
          point: Number,
          contents: String,
          username: String,
          profile: String,
          date: String,
        },
      ],
    },
    tag: [
      {
        storename: String,
        category_name: String,
        new_addr_fullname: String,
        name3: String,
        newaddrfull: String,
        menu_name: [{} as MenuItem],
      },
    ],
  },
  { _id: false }
);

const StoreListSchema = new Schema(
  {
    store: [StoreSchema],
  },
  {
    timestamps: true,
    collection: "DealiciousFood",
  }
);

module.exports = mongoose.model("Store", StoreListSchema);
