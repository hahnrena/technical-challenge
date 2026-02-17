# Smarter Technologies — Agent Workflow Builder

A single-page React application that allows humans to define the question workflows used by LLM agents when making phone calls to collect information from insurers.

---

## Overview

The interface displays a vertical sequence of question nodes connected by directional arrows. Each node represents a question the LLM agent will ask during a call. Users can extend the workflow by appending new nodes via the **Add Node** button in the header.

---

## Features

- **Visual workflow canvas** — nodes and edges rendered as a sequential vertical flow
- **Add Node** — appends the next predefined static question to the end of the sequence
- **Disabled state** — the Add Node button disables once all predefined questions have been added, preventing duplicates
- **Success reinforcement** — a soft highlight animation confirms each newly added node, with auto-scroll to bring it into view
- **Step counter** — the header displays a live count of current steps in the workflow

---

## Tech Stack

- [React](https://react.dev/) — UI framework
- [Lucide React](https://lucide.dev/) — iconography
- [Parcel](https://parceljs.org/) — development server and build tool

---

## Project Structure

```
src/
├── components/
│   ├── WorkflowBuilder.jsx   # Root layout, state management, header
│   ├── NodeCard.jsx          # Individual question node card
│   └── Arrow.jsx             # Directional connector between nodes
├── data/
│   └── presets.js            # Predefined question data
└── index.jsx                 # App entry point
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/smarter-technologies-workflow-builder.git

# Navigate into the project
cd technical-challenge

# Install dependencies
npm install
```

### Running locally

```bash
npm start
```

Then open [http://localhost:1234](http://localhost:1234) in your browser.

### Building for production

```bash
npm run build
```

---

## Design Decisions

**Disabled Add Node button** — the spec uses static predefined questions, so once all 8 have been added the button disables rather than cycling back and creating duplicate nodes. This felt like the correct product behaviour for an unspecified edge case.

**Vertical layout** — nodes flow top to bottom with a downward arrow between each, matching the provided design spec.

**Node dimensions** — cards are fixed at 344×100px with 16px vertical and 8px horizontal padding, taken directly from the Figma spec.

**Success reinforcement** — a subtle emerald border glow fades out on the newly added card, paired with a smooth scroll into view. This confirms the action without interrupting the workflow.

---
