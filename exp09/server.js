const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const projects = [
    { id: 1, name: "Campus Connect", description: "Student notice board web app" },
    { id: 2, name: "TaskFlow", description: "Task manager with full CRUD" },
    { id: 3, name: "WeatherNow", description: "Live weather dashboard" }
];

const messages = [];

// GET all projects
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

// POST a contact message
app.post("/api/messages", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
        return res.status(400).json({ error: "All fields are required" });

    messages.push({ name, email, message, receivedAt: new Date() });
    res.status(201).json({ message: "Message submitted successfully" });
});

// GET all messages (admin view)
app.get("/api/messages", (req, res) => {
    res.json(messages);
});

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
});

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});
