# Culpass UI Components Library

Welcome to the Culpass UI Components Library, version 1.0! This library is a collection of reusable UI components designed and built for Culpass S.L. by Pelayo Trives.

## Components

The Culpass UI Components Library consists of the following components:

- **Button**: A customizable button component.
- **Input**: A flexible input component.
- **Text**: A component for displaying text.
- **Display**: A component for larger display text.
- **Title**: A component for titles and headings.
- **Stack**: A layout component for stacking elements.
- **Box**: A layout component for creating boxes and containers.

## Features

- **Tailwind Config**: Includes a Tailwind Config file with all the guidelines for colors and other attributes.
- **Built with Vite and TypeScript**: Ensuring fast development and type safety.
- **Styling**: Utilizes Tailwind CSS along with Tailwind Merge, CVA, and CLSX for enhanced styling capabilities.
- **Storybook**: Integrated with Storybook for visualizing and testing components in an isolated environment.

## Installation

To install the Culpass UI Components Library, run:

```bash
npm install culpass-ui
```

## Usage

Firstly, add this line in your `tailwind.config.js` file:

```json
content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/culpass-ui/src/**/*.{js,jsx,ts,tsx}"
  ],
```

Then, import and use the components in your project as follows:

```javascript
import { Button, Input, Text, Display, Title, Stack, Box } from 'culpass-ui';

// Example usage in a component
const App = () => (
  <div>
    <Title>Welcome to Culpass UI</Title>
    <Stack>
      <Button>Click Me</Button>
      <Input placeholder="Enter text" />
    </Stack>
  </div>
);

export default App;
```

## License

This library is licensed under the CC-BY-NC-ND 4.0 DEED License. See [this link](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en) for more information.

---

© 2024 Culpass S.L. Created by Pelayo Trives.
