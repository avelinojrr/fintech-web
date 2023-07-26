import express  from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import formsRoutes from "./routes/forms.routes.js";

// initialize express
const app = express();

// use morgan to log requests to the console
app.use(morgan("dev"));
app.use(express.json()); // use express to parse json
app.use(cookieParser());

// use routes
app.use("/api", authRoutes);
app.use("/api", formsRoutes);

export default app; // export app for testing purposes