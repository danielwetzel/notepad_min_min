## Project Guidelines

1. **Component Usage**:
   - Only use **svelte shadcn** components for building the UI.
   - Refer to the provided documentation to ensure correct and efficient use of these components.

2. **Exceptions**:
   - Only if a required functionality cannot be achieved efficiently with **svelte shadcn**, you may consider alternative solutions.
   - Prioritize simplicity and minimalism in any exceptions.

3. **Documentation**:
   - Document your code extensively with clear and concise comments.
   - Create a comprehensive `README.md` file that includes:
     - An overview of the project and its purpose.
     - A list of dependencies used.
     - A brief description of each file and its role in the codebase.
     - Instructions on how to set up, run, and build the application.

4. **Best Practices**:
   - Adhere to coding best practices for performance, readability, and maintainability.
   - Optimize code for speed and efficiency.
   - Use **Tailwind CSS** for styling, employing modern design principles with rounded shapes (e.g., `rounded-lg`).

5. **Project Goals Alignment**:
   - Follow the provided project goals closely.
   - Work iteratively to fulfill all requirements within a maximum of **5 iterations**.
   - Prioritize essential features to maintain simplicity and focus.

6. **Dockerization**:
   - Provide a `Dockerfile` to containerize the application.
   - Ensure that the Docker image excludes the `data/notes` directory and any configuration files containing settings or secrets.
   - The container should be easy to build and run.

7. **Planning and Reasoning**:
   - Before coding, plan your approach step by step.
   - Outline the implementation strategy for each task to ensure logical progression and efficiency.
   - Reflect on potential challenges and how to address them.

8. **Clarification**:
   - If you're uncertain about any requirement or task, seek clarification promptly.
   - Avoid assumptions; ensure all implementation details align with the project goals.

9. **Performance and Basic Security**:
   - Optimize the application for fast load times and responsiveness.
   - Implement basic security measures, such as input sanitization, even though advanced security features are not required.
   - Ensure the app only accesses and modifies files within the designated `data/notes` folder.

10. **Dependency Management**:
    - Use as few external dependencies as necessary.
    - Rely primarily on built-in features of **Svelte 5**, **SvelteKit**, **svelte shadcn**, and **Tailwind CSS**.
    - Choose lightweight and well-maintained libraries when additional dependencies are needed.

11. **User Experience (UX)**:
    - Create a smooth and intuitive user interface.
    - Implement quick, subtle animations to enhance user interaction without overcomplicating the design.
    - Ensure that all user actions (like creating, editing, and deleting notes) are straightforward and user-friendly.

12. **Testing**:
    - Test the application thoroughly to identify and fix bugs.
    - Verify that all features work correctly across different browsers and devices.

13. **Code Organization**:
    - Structure your code logically, with clear separation of concerns.
    - Use meaningful naming conventions for files, components, functions, and variables.

14. **Version Control**:
    - Use a version control system (e.g., Git) to track changes throughout the development process.
    - Write clear and descriptive commit messages that reflect the changes made.

15. **Static Assets**:
    - Place all static images and assets in a dedicated folder (e.g., `assets/images`).
    - Reference these assets appropriately within the application.

16. **Simplified Feature Set**:
    - Focus on implementing the core features:
      - Listing notes from the `data/notes` folder.
      - Viewing, creating, editing, and deleting markdown notes.
      - Rendering markdown content accurately.
    - Avoid adding unnecessary features that could complicate the app or extend development time beyond the allotted iterations.

17. **Future Extensibility**:
    - Write clean and modular code to facilitate future enhancements.
    - While future features should not be implemented now, keep the codebase flexible for potential expansion.

18. **User Interface Design**:
    - Ensure the app is responsive and works well on various screen sizes.
    - Provide light and dark mode options.
    - Use a modern and aesthetically pleasing font.

19. **Error Handling**:
    - Implement basic error handling to inform users of any issues (e.g., unable to load a note).
    - Ensure the app fails gracefully without crashing.