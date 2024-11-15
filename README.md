# notepad--

A modern, lightweight markdown note-taking application built with SvelteKit 5 and Tailwind CSS. Create, edit, and manage your markdown notes with a clean and intuitive interface.

## Project Overview

notepad-- is a file-based markdown note-taking application that allows users to create, edit, and manage their notes with real-time preview. The app features a modern UI with a collapsible sidebar, dark/light theme support, and responsive design.

### Technology Stack

- **Framework**: SvelteKit 5
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-svelte
- **Icons**: Lucide Icons
- **Markdown**: svelte-markdown
- **Storage**: File-based (markdown files)

### Architecture Overview

The application follows a component-based architecture with file-based routing provided by SvelteKit. Notes are stored as markdown files in the `data/notes` directory, making it easy to manage and back up content.

## Table of Contents

- [Installation](#installation)
- [Directory Structure](#directory-structure)
- [Component Overview](#component-overview)
- [Usage Guide](#usage-guide)
- [Development](#development)
- [Roadmap](#roadmap)

## Installation

### Prerequisites

- Node.js 18 or higher
- npm or pnpm

### Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd notepad--
```

2. Install dependencies:
```bash
npm install
```

3. Create the notes directory:
```bash
mkdir -p data/notes
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Directory Structure

```
notepad--/
├── src/
│   ├── lib/
│   │   ├── components/    # Reusable UI components
│   │   ├── stores/        # Svelte stores for state management
│   │   └── utils/         # Utility functions
│   ├── routes/            # SvelteKit routes and pages
│   └── app.css           # Global styles
├── static/               # Static assets
├── data/
│   └── notes/           # Markdown note files
└── tests/               # Test files
```

## Component Overview

### Core Components

- **NoteList** (`src/lib/components/NoteList.svelte`)
  - Displays the list of notes in the sidebar
  - Handles note selection and deletion
  - Props: `notes: string[]`

- **Layout** (`src/routes/+layout.svelte`)
  - Main application layout with sidebar and theme switching
  - Manages responsive design and sidebar state

### Page Components

- **Home** (`src/routes/+page.svelte`)
  - Landing page with getting started guide
  - Quick access to create new notes

- **Note Editor** (`src/routes/[note]/+page.svelte`)
  - Markdown editor with live preview
  - File saving and auto-save functionality
  - Split view for editing and preview

## Usage Guide

### Step-by-Step Execution

1. **Initial Load**
   - Application loads with a welcome screen
   - Sidebar displays list of existing notes
   - Theme adapts to system preference

2. **Creating Notes**
   - Click "New Note" button
   - Enter title (supports letters, numbers, spaces, and hyphens)
   - Write content using markdown
   - Save with Ctrl/Cmd + S or Save button

3. **Editing Notes**
   - Select note from sidebar
   - Edit content in the editor
   - Toggle preview mode to see rendered markdown
   - Changes auto-save on modification

4. **Managing Notes**
   - Delete notes using the trash icon
   - Toggle sidebar for focused writing
   - Switch between light/dark themes

### Keyboard Shortcuts

- `Ctrl/Cmd + S`: Save current note
- `Esc`: Exit current view
- Theme toggle: Available in header
- Sidebar toggle: Available in header

## Development

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
```

## Roadmap

### Planned Features

- [ ] **Search Functionality**
  - Full-text search across notes
  - Quick note filtering

- [ ] **Export Options**
  - Export notes as PDF
  - Batch export functionality

- [ ] **Enhanced Editor**
  - Code syntax highlighting
  - Image drag-and-drop
  - Table support

### Performance Improvements

- [ ] Implement lazy loading for note content
- [ ] Add caching for frequently accessed notes
- [ ] Optimize markdown rendering

### UI Enhancements

- [ ] Add customizable themes
- [ ] Improve mobile responsiveness
- [ ] Add touch gestures for navigation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure your code follows the existing style and includes appropriate tests.

## License

MIT License - see LICENSE file for details
