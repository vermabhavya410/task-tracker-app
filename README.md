# Task Tracker App

A **modern and interactive Task Tracker app** built with **React.js** and **Tailwind CSS**, designed to help users manage their daily tasks efficiently. The app supports adding, editing, deleting, and filtering tasks, with a clean and responsive user interface.

---

## 🌟 Key Features

- **Add Tasks**: Quickly add new tasks with a single input.
- **Edit Tasks**: Modify existing tasks seamlessly.
- **Delete Tasks**: Remove tasks that are completed or no longer needed.
- **Mark as Completed**: Toggle tasks as completed or pending using checkboxes.
- **Filter Tasks**: View all tasks, only active tasks, or completed tasks.
- **Responsive UI**: Works smoothly on both desktop and mobile screens.

---

## 🛠️ Technologies Used

- **Frontend:** React.js (Functional Components & Hooks)
- **Styling:**  Custom CSS (`Task Tracker.css`)
- **State Management:** React `useState` hook
- **Version Control:** Git & GitHub
---

## 📝 Code Overview

The app manages tasks using **React hooks**:

- **State Variables**:
  - `Input` → Holds the value of the input box.
  - `List` → Stores all tasks as objects `{ text, completed }`.
  - `Filter` → Controls which tasks are displayed (`all`, `active`, `completed`).
  - `editIndex` → Tracks which task is being edited.
  - `editText` → Holds the edited task text.

- **Functions**:
  - `add()` → Adds a new task to the list.
  - `remove(index)` → Deletes a task by its index.
  - `startEdit(index)` → Begins editing a task.
  - `saveEdit(index)` → Saves edited task text.
  - `togglecheckbox(index)` → Toggles task completion status.
  
- **Filtering Logic**:
```javascript
const filteredTasks = List.filter(task => {
  if (Filter === "active") return !task.completed;
  if (Filter === "completed") return task.completed;
  return true; 
});
