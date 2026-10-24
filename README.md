# Paste App 📝
A simple and useful Paste App built with React that allows users to create, edit, view, search, delete, and copy text pastes. The application uses Redux Toolkit for state management and browser Local Storage to persist data.

## 🚀 Features
- **Create Paste:** Create a new paste with a title and content.
- **Edit Paste:** Update an existing paste.
- **View Paste:** View individual pastes in read-only mode.
- **Search Pastes:** Search saved pastes by title.
- **Delete Paste:** Remove a specific paste.
- **Copy Content:** Copy paste content to the clipboard.
- **Local Storage:** Keep saved pastes available after refreshing the browser.
- **Toast Notifications:** Display feedback for paste operations.

## 🛠️ Tech Stack
- React
- JavaScript
- Vite
- Redux Toolkit
- React Redux
- React Router DOM
- Tailwind CSS
- React Hot Toast
- Browser Local Storage

📂 Project Structure
paste-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Paste.jsx
│   │   └── ViewPaste.jsx
│   ├── redux/
│   │   └── pasteSlice.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── store.js
├── index.html
├── package.json
└── README.md

💾 Data Storage
This application uses the browser's Local Storage to save paste data. Redux Toolkit manages the application state, while Local Storage helps preserve data across browser refreshes.
The data is stored locally in the browser and is not saved to a backend database.

📖 What I Learned
- Building reusable React components.
- Managing component state using React Hooks.
- Managing global state using Redux Toolkit.
- Using Redux actions and reducers.
- Implementing client-side routing with React Router DOM.
- Reading and writing data using Local Storage.
- Implementing search, edit, delete, and clipboard functionality.

👨‍💻 Author -> Tanish Sharma
GitHub: [@tanishsharma24-collab](https://github.com/tanishsharma24-collab)

⭐ If you find this project useful, consider giving it a star!
