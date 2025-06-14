import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/project-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Project Schema
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
});

// Create Project Model
const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

app.post('/projects', async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Project service running on port ${PORT}`);
});