require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err.message));

// ---------- Schemas & models ----------
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    imageUrl: String,
    rating: Number
});
const Project = mongoose.model("Project", projectSchema);

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model("Contact", contactSchema);

// ---------- Projects CRUD ----------
app.get("/api/projects", async (req, res) => {
    res.json(await Project.find());
});

app.post("/api/projects", async (req, res) => {
    const project = await Project.create(req.body);
    res.status(201).json(project);
});

app.put("/api/projects/:id", async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
});

app.delete("/api/projects/:id", async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
});

// ---------- Contacts ----------
app.post("/api/contacts", async (req, res) => {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
});

app.get("/api/contacts", async (req, res) => {
    res.json(await Contact.find().sort({ createdAt: -1 }));
});

// ---------- Error handling ----------
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
