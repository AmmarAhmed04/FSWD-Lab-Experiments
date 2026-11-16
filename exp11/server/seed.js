require("dotenv").config();
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({ title: String, description: String, imageUrl: String, rating: Number });
const Project = mongoose.model("Project", projectSchema);

const sample = [
    { title: "Campus Connect", description: "Student notice board web app", imageUrl: "", rating: 4 },
    { title: "TaskFlow", description: "Task manager with full CRUD", imageUrl: "", rating: 5 },
    { title: "WeatherNow", description: "Live weather dashboard using a public API", imageUrl: "", rating: 4 },
    { title: "QuizMaster", description: "Timed multiple-choice quiz app", imageUrl: "", rating: 3 }
];

(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    await Project.deleteMany({});
    await Project.insertMany(sample);
    console.log("Seeded", sample.length, "projects");
    await mongoose.disconnect();
})();
