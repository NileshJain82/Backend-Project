import { Schema, model } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudnary Url
      required: true,
    },
    thumbnail: {
      type: String, // cloudnary Url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // cloudnary Url
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Video = model("Video", videoSchema);
 