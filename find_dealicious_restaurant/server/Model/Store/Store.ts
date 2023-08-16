import mongoose, { Document, Schema } from "mongoose";

const StoreItem = new Schema({
  storeInfo: {
    type: String,
    required: true,
  },
  basicInfo: {
    type: String,
    required: true,
  },
  placenamefull: {
    type: String,
    required: true,
  },
  address_road: {
    type: String,
    required: true,
  },
  address_jibun: {
    type: String,
    required: true,
  },
  catename: {
    type: String,
    required: true,
  },
  mainphotourl: {
    type: String,
    required: true,
  },
  phonenum: {
    type: String,
    required: true,
  },
  englishname: {
    type: String,
    required: true,
  },
  visit: {
    type: Int32Array,
    required: true,
  },
  favorite: {
    type: Int32Array,
    required: true,
  },
});

const Store = new Schema(
  {
    store: [StoreItem],
  },
  {
    timestamps: true,
    collection: "DealiciousFood",
  }
);

interface BasicInfo {
  placenamefull: string;
  address_road: string;
  address_jibun: string;
  // ... 다른 필드들
}

interface StoreInfo {
  basicInfo: BasicInfo;
  // ... 다른 필드들
}

interface MenuInfo {
  menuList: Array<any>; // 메뉴 정보의 구체적인 타입 정의 필요
  // ... 다른 필드들
}

interface CommentInfo {
  list: Array<any>; // 댓글 정보의 구체적인 타입 정의 필요
  // ... 다른 필드들
}

interface TagInfo {
  tag: Array<string>;
}

interface DealiciousFoodDocument extends Document {
  storeInfo: StoreInfo;
  menuInfo: MenuInfo;
  comment: CommentInfo;
  tag: TagInfo;
}

const BasicInfoSchema = new Schema<BasicInfo>({
  placenamefull: String,
  address_road: String,
  address_jibun: String,
  // ... 다른 필드들의 스키마 정의
});

const StoreInfoSchema = new Schema<StoreInfo>({
  basicInfo: BasicInfoSchema,
  // ... 다른 필드들의 스키마 정의
});

const MenuInfoSchema = new Schema<MenuInfo>({
  menuList: [{ type: Schema.Types.Mixed }], // 메뉴 정보의 구체적인 스키마 정의 필요
  // ... 다른 필드들의 스키마 정의
});

const CommentInfoSchema = new Schema<CommentInfo>({
  list: [{ type: Schema.Types.Mixed }], // 댓글 정보의 구체적인 스키마 정의 필요
  // ... 다른 필드들의 스키마 정의
});

const TagInfoSchema = new Schema<TagInfo>({
  tag: [String],
});

const DealiciousFoodSchema = new Schema<DealiciousFoodDocument>({
  storeInfo: StoreInfoSchema,
  menuInfo: MenuInfoSchema,
  comment: CommentInfoSchema,
  tag: TagInfoSchema,
});

module.exports = mongoose.model("Store", Store);
