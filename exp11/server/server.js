require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// allow the Vite dev server (React) to call this API
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err.message));

const Project = mongoose.model("Project", new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    rating: Number
}));

const Contact = mongoose.model("Contact", new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
}));

app.get("/api/projects", async (req, res) => {
    res.json(await Project.find());
});

app.post("/api/contacts", async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
        return res.status(400).json({ error: "All fields are required" });

    const contact = await Contact.create({ name, email, message });
    res.status(201).json(contact);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
