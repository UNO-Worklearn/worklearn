# Work-Learn Project Documentation

## Codebase Structure (inside src): 
### Folders
- components:
  -   In a React project, the components folder is a crucial directory that houses all the reusable components used throughout the application. These components are the building blocks of the user interface and encapsulate specific pieces of functionality or UI elements that can be used in various parts of the application.
- css
- data:
  - Typically used to store static data files that are used throughout the application. Here, we stored contents that are displayed in Work-Learn application, such as Units, and each unit has multiple lessons, and each lesson has multiple subsections,... these subsections can be static content, or quizzes.
  - Content should be inside ```modules.js```
  - Languages list inside Languages Dropdown in Playground IDE should be inside ```languages.js```
  - 
- fonts: font-awesome folder to use when needing specific font-awesome fonts/icons.
- hooks: a custom React hook folder to create your own custom hook based on your need.
  - We already have ```useKeyPress()``` hook:  designed to detect when a specific key is pressed on the keyboard. It returns a boolean value indicating whether the target key is currently pressed.   
- images
- lib: this folder has a defineTheme.js file, which stores themes for the online IDE theme inside 'Playground' section.
- pages: typically used to store the main components representing different pages or views in the application. Each file within this folder usually corresponds to a different route in the application, making it easy to manage and navigate between different sections of the app.
- redux: this folder is used to organize all Redux-related files. This includes actions, reducers, store configuration, and possibly selectors and middleware. Having a dedicated redux folder helps maintain a clear and organized structure, making it easier to manage the application's global state.
### Files:
- App.css
- App.js
- App.test.js
- index.css
- index.js
- ...

## Codebase Structure (in components folder): 
```bash

components
│
├── CobolCodeColumn
│   ├── CobolCodeColumn.js
│   └── CobolCodeColumn.css
│
├── CodeEditorWindow
│   ├── CodeEditorWindow.js
│   └── CodeEditorWindow.css
│
├── CustomInput
│   ├── CustomInput.js
│   └── CustomInput.css
│
├── LanguagesDropdown
│   ├── LanguagesDropdown.js
│   └── LanguagesDropdown.css
│
├── Loader
│   ├── Loader.js
│   └── Loader.css
│
├── Navbar
│   ├── Navbar.js
│   └── Navbar.css
│
├── OutputDetails
│   ├── OutputDetails.js
│   └── OutputDetails.css
│
├── OutputWindow
│   ├── OutputWindow.js
│   └── OutputWindow.css
│
├── Parsons
│   ├── Parsons.js
│   └── Parsons.css
│
├── Quiz
│   ├── Quiz.js
│   └── Quiz.css
│
├── QuizAnalytics
│   ├── QuizAnalytics.js
│   └── QuizAnalytics.css
│
├── RoleSelectionForm
│   ├── RoleSelectionForm.js
│   └── RoleSelectionForm.css
│
├── SequentialNumberColumn
│   ├── SequentialNumberColumn.js
│   └── SequentialNumberColumn.css
│
├── SnackBar
│   ├── SnackBar.js
│   └── SnackBar.css
│
├── ThemeDropdown
│   ├── ThemeDropdown.js
│   └── ThemeDropdown.css
│
└── UploadDocument
    ├── UploadDocument.js
    └── UploadDocument.css



```

- CobolCodeColumn (doing nothing at the moment)
- CodeEditorWindow:
  - The CodeEditorWindow component in React is a code editor window that leverages the Monaco Editor (the editor that powers Visual Studio Code) to provide a sophisticated code editing experience. This component allows for syntax highlighting, code editing, and customizable themes, among other features.  
- CustomInput:
  - The CustomInput component is designed to facilitate user input for custom parameters or code snippets within an online integrated development environment (IDE). It leverages the Material-UI TextField component to provide a rich, multiline input field.
- LanguagesDropdown
  - The LanguagesDropdown component is a reusable React component that provides a dropdown menu for selecting a programming language or category. It uses the react-select library to create a customizable select input. The component is styled using custom styles defined elsewhere in the project and populates its options from a list of languages.   
- Loader:
  - The Loader component is a React functional component responsible for displaying a loading animation while content is being loaded. It utilizes the useEffect hook to automatically fade out and hide the loader after a specified timeout period. Let's break down the code:
 
- Navbar: is the component which displays the navigation bar on top of the page.
- OutputDetails: Displays the details of the output with status, description memory, and time to process the code inside the online IDE playground.
- OutputWindow: The box to display OutputDetails.
- Parsons:
  - The ParsonsProblem component implements a Parsons problem interface, allowing users to arrange code blocks in the correct order using drag-and-drop functionality. It provides clear instructions for the task and uses react-beautiful-dnd for smooth and intuitive interaction. This component can be integrated into educational platforms or coding practice environments to help users develop code structuring skills. 
- Quiz:
  - Main component to display the quizzes by retrieving quiz data from the database with Axios get request to the backend.
  - Detect quiz type of the current quiz. 
  - Properly detect if the question is single-choice or multiple-choice.
  - Compare and calculate the users' answers to the databases' answers, and posts the calculation of the grade to the API to store the grade for that quiz.  
- QuizAnalytics
  - This component is for teachers, which teachers can check for the correct answers, number of right answers/wrong answers in a question.
  - Can be filtered by quiz type. 
- RoleSelectionForm
  - The RoleSelectionForm component is a form used to select a user role, such as "Student" or "Teacher." It utilizes Material-UI components for the form elements and Redux for managing the user's role state, particularly when you sign up for the app.    
- SequentialNumberColumn
  - Number column on the left in the COBOL background 
- SnackBar
  - Display any message/notification in snackbar form. 
- ThemeDropdown
  -  The ThemeDropdown component is a reusable React component used to display a dropdown menu for selecting themes. It utilizes the react-select library for the dropdown functionality and allows users to choose from a list of available themes provided by the monaco-themes package.
- UploadDocument
  - The UploadDocument component provides a user-friendly interface for uploading documents to an Amazon S3 bucket. It leverages the AWS SDK to handle the upload process and provides feedback to the user about the upload status. This component can be integrated into web applications to facilitate file uploads and storage on AWS S3.
 
## Codebase Structure (in pages folder):
```bash
pages
│
├── Dashboard
│   ├── Dashboard.js
│   ├── Dashboard.css
│   └── DBContent
│       ├── DBContent.js
│       └── DBContent.css
│       └── Topics
│           ├── Topics.js
│           ├── Topics.css
│           └── Content
│               ├── Content.js
│               ├── Content.css
│               └── SubContent
│                   ├── SubContent.js
│                   └── SubContent.css
│                   └── NestedContent
│                       ├── NestedContent.js
│                       └── NestedContent.css
│
├── Home
│   ├── Home.js
│   └── Home.css
│
├── Login
│   ├── Login.js
│   └── Login.css
│
├── ManageStudents
│   ├── ManageStudents.js
│   ├── ManageStudents.css
│   └── ManageStudentsDetails
│       ├── ManageStudentsDetails.js
│       └── ManageStudentsDetails.css
│
├── Playground
│   ├── Playground.js
│   └── Playground.css
│
└── Register
    ├── Register.js
    └── Register.css


```

- each main folder represents a page available inside the web application.

## Codebase Structure (in hooks folder):

```bash
redux
│
├── actions
│   ├── pageActions.js
│   ├── quizActions.js
│   └── userActions.js
│
├── reducers
│   ├── pageReducers.js
│   ├── quizReducers.js
│   └── userReducers.js
│
└── store.js


```

### redux/actions
This folder contains action creators for different parts of the application state. Action creators are functions that return action objects, which are then dispatched to update the state in Redux. Here's what each file might represent:

- pageActions.js: Contains action creators related to pages in the application. For example, actions to fetch data for specific pages, update page titles, etc.

- quizActions.js: Contains action creators related to quizzes or assessments in the application. This might include actions to fetch quiz data, submit quiz answers, etc.

- userActions.js: Contains action creators related to user authentication, authorization, and profile management. This could include actions to log in, log out, update user details, etc.

### redux/reducers
This folder contains reducer functions, which specify how the application's state should change in response to dispatched actions. Each reducer typically manages a slice of the overall state tree. Here's what each file might represent:

- pageReducers.js: Contains reducers related to managing page-specific state. For example, reducers to handle data fetching/loading states, updating page content, etc.

- quizReducers.js: Contains reducers related to managing quiz or assessment-related state. This might include reducers to handle quiz data fetching/loading, updating answers, etc.

- userReducers.js: Contains reducers related to managing user-related state. This could include reducers to handle authentication state (e.g., login/logout), user profile data, etc.

### redux/store.js
This file exports the Redux store instance. The store is a single source of truth for the application state and is created by combining all reducers using the createStore function from Redux. It might also include middleware setup, such as thunk middleware for handling asynchronous actions.

In summary, the redux folder organizes the Redux-related files into actions and reducers subfolders, with each file responsible for managing specific aspects of the application state and behavior. The store.js file serves as the entry point for creating the Redux store instance.


## Deployment
- Currently, we are using <a href='https://vercel.com'>Vercel</a> to deploy the application for both front-end and back-end. Reference: <a href='https://worklearnproject.com'>https://worklearnproject.com</a>
- We are currently in progress on deploying the project using GoDaddy. However, we are using basic plan, which costs ~$120/year. This is the url for the Godaddy hosting: Reference: <a href='https://worklearnproject.org'>https://worklearnproject.org</a> The basic plan does not support Node.js application, so the process is delayed at the moment. If we decide to switch to GoDaddy, please consider to switch to a higher price plan ~$400/year. R
- Reference: <a href='https://www.godaddy.com/hosting/web-hosting'>Godaddy Web Hosting</a>







  
