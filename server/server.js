import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import ownerRouter from "./routes/ownerRoute.js";
import bookingRouter from "./routes/bookingRoute.js";

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
await connectDB();

app.get("/", (req, res) => res.send("Serveur is running"));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Le Serveur est en marche sur http://localhost:${PORT}`)
);
