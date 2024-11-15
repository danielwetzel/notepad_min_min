## Overall Goals

The app should be a simple, modern note-taking web application that uses and parses markdown documents stored in a designated folder.

- **Design**: The app should have a clean and intuitive UI with a collapsible sidebar on the left that lists all markdown files from the `data/notes` folder.
- **Technology Stack**: Built exclusively with **Svelte 5** and **SvelteKit**, utilizing **svelte shadcn** as the component library and **Tailwind CSS** for styling.
- **Performance**: Prioritize performance and adhere to basic coding best practices for a smooth user experience.
- **Aesthetics**: Use a modern, aesthetically pleasing font with rounded shapes and smooth transitions.
- **Development Scope**: The app should be simple enough to be developed in a maximum of **5 iterations**.

## Features and Functionality

### Markdown Notes Management

- **List Notes**: Automatically display all markdown files from the `data/notes` folder in the sidebar.
- **View Notes**: Clicking on a note in the sidebar opens and displays its content.
- **Create and Edit Notes**:
  - Users can create new markdown notes directly from the app.
  - Users can edit existing notes with changes saved back to the `data/notes` folder.
- **Delete Notes**: Users can delete notes, which removes the markdown file from the folder.

### Markdown Support

- **Full Markdown Syntax**: Support standard markdown features like headings, bold, italics, lists, code blocks, images, links, and tables.
- **Live Preview**: Provide a real-time preview of the formatted markdown content as the user edits.
- **MDX Support (Optional)**:
  - Utilize MDX to include header information or metadata within markdown files.
  - Allow embedding of simple components or custom elements if needed.

### User Interface

- **Responsive Design**: Ensure the app works well on desktops, tablets, and mobile devices.
- **Light and Dark Modes**: Users can toggle between light and dark themes.
- **Minimal Animations**: Implement quick and subtle animations to enhance user interaction without overwhelming the simplicity.
- **Startup Greeting**: On app load, display a brief welcome animation or message.

### Simplified Structure

- **No User Management**: Omit user authentication, registration, and role-based access control.
- **No Database**: Avoid using a database; all data is managed through markdown files in the `data/notes` folder.
- **File-Based Storage**: Notes are saved as individual markdown files, simplifying data management and backup.

### Additional Features

- **Static Assets Folder**: Include a folder (`assets/images`) for all static images used in the app (e.g., logos, icons).
- **Customization**:
  - Basic settings for users to adjust, such as theme preference.
  - Option to set default font size or style.
- **Copy to Clipboard**: Users can copy code blocks or entire notes to the clipboard.
- **Keyboard Shortcuts**: Implement basic shortcuts for actions like saving a note or toggling preview mode.

## Performance and Best Practices

- **Optimized Loading**: Ensure quick load times by optimizing assets and using efficient code.
- **Code Maintainability**: Write clean, readable code with comments where necessary.
- **Minimal Dependencies**: Keep external libraries and dependencies to a minimum to reduce complexity.
- **Error Handling**: Basic error handling to inform users of issues like failed saves or load errors.

## Conclusion

The goal is to create a straightforward, efficient note-taking app that leverages markdown files for simplicity and ease of use. By focusing on essential features and minimizing complexity, the app can be developed quickly while still providing a pleasant user experience.