const API_BASE = '/api';

function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName).classList.add('active');
    
    if (sectionName === 'projects') loadProjects();
    if (sectionName === 'tasks') loadTasks();
    if (sectionName === 'users') loadUsers();
}

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            alert('Login successful!');
            showSection('projects');
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        alert('Login error: ' + error.message);
    }
}

async function register() {
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    try {
        const response = await fetch(`${API_BASE}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        
        if (response.ok) {
            alert('Registration successful!');
            document.getElementById('regUsername').value = '';
            document.getElementById('regEmail').value = '';
            document.getElementById('regPassword').value = '';
        } else {
            alert(data.error || 'Registration failed');
        }
    } catch (error) {
        alert('Registration error: ' + error.message);
    }
}

async function createProject() {
    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDesc').value;
    const status = document.getElementById('projectStatus').value;
    
    try {
        const response = await fetch(`${API_BASE}/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, description, status })
        });
        
        if (response.ok) {
            alert('Project created successfully!');
            document.getElementById('projectName').value = '';
            document.getElementById('projectDesc').value = '';
            document.getElementById('projectStatus').value = '';
            loadProjects();
        } else {
            alert('Failed to create project');
        }
    } catch (error) {
        alert('Project creation error: ' + error.message);
    }
}

async function loadProjects() {
    try {
        const response = await fetch(`${API_BASE}/projects`);
        const projects = await response.json();
        
        const projectsList = document.getElementById('projectsList');
        projectsList.innerHTML = projects.map(project => `
            <div class="item">
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <p><strong>Status:</strong> ${project.status}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

async function createTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDesc').value;
    
    try {
        const response = await fetch(`${API_BASE}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        });
        
        if (response.ok) {
            alert('Task created successfully!');
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskDesc').value = '';
            loadTasks();
        } else {
            alert('Failed to create task');
        }
    } catch (error) {
        alert('Task creation error: ' + error.message);
    }
}

async function loadTasks() {
    try {
        const response = await fetch(`${API_BASE}/tasks`);
        const tasks = await response.json();
        
        const tasksList = document.getElementById('tasksList');
        tasksList.innerHTML = tasks.map(task => `
            <div class="item">
                <h4>${task.title}</h4>
                <p>${task.description || 'No description'}</p>
                <p><strong>Status:</strong> ${task.completed ? 'Completed' : 'Pending'}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}

async function loadUsers() {
    try {
        const response = await fetch(`${API_BASE}/users`);
        const users = await response.json();
        
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = users.map(user => `
            <div class="item">
                <h4>${user.username}</h4>
                <p>${user.email}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading users:', error);
    }
}