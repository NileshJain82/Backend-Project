import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log(error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log("Listening on the port ", process.env.PORT);
//     });

//   } catch (error) {
//     console.error("Error : ", error);
//     throw error;
//   }
// })();
// import { DB_NAME } from "../constants";
