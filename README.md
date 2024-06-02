# Culpass UI Components Library

Welcome to the Culpass UI Components Library, version 1.0! This library is a collection of reusable UI components designed and built for Culpass S.L. by Pelayo Trives.

## Components

The Culpass UI Components Library consists of the following components:

<table>
  <tr>
    <th>Component</th>
    <th>Description</th>
    <th>Properties</th>
  </tr>
  <tr>
    <td><strong>Button</strong></td>
    <td>A customizable button component.</td>
    <td>
      <ul>
        <li style="padding-bottom:8px,"><strong>adapt</strong>: The adaptation with respect to the parent container of the button (auto, calibrate)</li>
        <li style="padding-bottom:8px,"><strong>borderRadius</strong>: The rounding of the border of the button (sm, regular, md, lg, full)</li>
        <li style="padding-bottom:8px,"><strong>icon</strong>: The button icon type (none, add, delete, check, cancel, calendar, view, hide, mail, user, bookmark, location, up, right, down, left, refreshRight, refreshLeft)</li>
        <li style="padding-bottom:8px,"><strong>iconPosition</strong>: The position of the icon of the button (right, left)</li>
        <li style="padding-bottom:8px,"><strong>intent</strong>: The style scheme of the button (solid1, solid2, solid3, outline1, outline2, outline3, ghost1, ghost2, ghost3)</li>
        <li style="padding-bottom:8px,"><strong>size</strong>: The size of the button (sm, md, lg, full)</li>
        <li style="padding-bottom:8px,"><strong>type</strong>: The type of component that the button will be (button, submit, reset)</li>
        <li style="padding-bottom:8px,"><strong>className</strong>: Any other class, as long as it respects the Culpass Branding Guide</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Input</strong></td>
    <td>A flexible input component.</td>
    <td>
      <ul>
        <li style="padding-bottom:8px,"><strong>disabled</strong>: Defines whether the input will be enabled or disabled (true, false)</li>
        <li style="padding-bottom:8px,"><strong>fontSize</strong>: The input font size (paragraph1, paragraph2, paragraph3, paragraph4, paragraph5)</li>
        <li style="padding-bottom:8px,"><strong>readOnly</strong>: Defines whether the input will be read-only or enabled to type (true, false)</li>
        <li style="padding-bottom:8px,"><strong>required</strong>: Defines whether the input will be required or not (true, false)</li>
        <li style="padding-bottom:8px,"><strong>type</strong>: The type of component that the input will be (text, date, email, number, tel, password, file, hidden, file)</li>
        <li style="padding-bottom:8px,"><strong>className</strong>: Any other class, as long as it respects the Culpass Branding Guide</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Text</strong></td>
    <td>A component for displaying text.</td>
    <td>
      <ul>
        <li style="padding-bottom:8px,"><strong>fontSize</strong>: The text font size (paragraph1, paragraph2, paragraph3, paragraph4, paragraph5)</li>
        <li style="padding-bottom:8px,"><strong>fontFamily</strong>: The text font family (nunito, montserrat)</li>
        <li style="padding-bottom:8px,"><strong>weight</strong>: The text weight (thin, normal, medium, semibold, bold)</li>
        <li style="padding-bottom:8px,"><strong>lineHeight</strong>: The text line height (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)</li>
        <li style="padding-bottom:8px,"><strong>align</strong>: The text alignment (left, center, right, justify)</li>
        <li style="padding-bottom:8px,"><strong>italic</strong>: Defines whether the text will be underlined or not (true, false)</li>
        <li style="padding-bottom:8px,"><strong>underline</strong>: Defines whether the text will be in italic or not (true, false)</li>
        <li style="padding-bottom:8px,"><strong>className</strong>: Any other class, as long as it respects the Culpass Branding Guide</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Display</strong></td>
    <td>A component for larger display text.</td>
    <td>
      <ul>
        <li style="padding-bottom:8px,"><strong>fontSize</strong>: The display font size (display1, display2, display3, display4, display5)</li>
        <li style="padding-bottom:8px,"><strong>fontFamily</strong>: The display font family (nunito, montserrat, instrument)</li>
        <li style="padding-bottom:8px,"><strong>weight</strong>: The display weight (thin, normal, medium, semibold, bold)</li>
        <li style="padding-bottom:8px,"><strong>lineHeight</strong>: The display line height (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)</li>
        <li style="padding-bottom:8px,"><strong>align</strong>: The display alignment (left, center, right, justify)</li>
        <li style="padding-bottom:8px,"><strong>italic</strong>: Defines whether the display will be underlined or not (true, false)</li>
        <li style="padding-bottom:8px,"><strong>underline</strong>: Defines whether the display will be in italic or not (true, false)</li>
        <li style="padding-bottom:8px,"><strong>className</strong>: Any other class, as long as it respects the Culpass Branding Guide</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Title</strong></td>
    <td>A component for titles and headings.</td>
    <td>
      <ul>
        <li style="padding-bottom:8px,"><strong>as</strong>: The type of component that the title will be (h1, h2, h3, h4, h5, h6)</li>
        <li style="padding-bottom:8px,"><strong>fontSize</strong>: The title font size (title1, title2, title3, title4, title5)</li>
        <li style="padding-bottom:8px,"><strong>weight</strong>: The title weight (thin, normal, medium, semibold, bold)</li>
        <li style="padding-bottom:8px,"><strong>lineHeight</strong>: The title line height (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)</li>
        <li style="padding-bottom:8px,"><strong>align</strong>: The title alignment (left, center, right, justify)</li>
        <li style="padding-bottom:8px,"><strong>italic</strong>: Defines whether the title will be underlined or not (true, false)</li>
        <li style="padding-bottom:8px,"><strong>underline</strong>: Defines whether the title will be in italic or not (true, false)</li>
        <li style="padding-bottom:8px,"><strong>className</strong>: Any other class, as long as it respects the Culpass Branding Guide</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Stack</strong></td>
    <td>A layout component for stacking elements.</td>
    <td>
      <ul>
        <li style="padding-bottom:8px,"><strong>as</strong>: The type of component that the stack will be (it's recommended to be a div, section, article, main or aside)</li>
        <li style="padding-bottom:8px,"><strong>position</strong>: The stack main position (vertical, horizontal, verticalRev, horizontalRev, none)</li>
        <li style="padding-bottom:8px,"><strong>className</strong>: Any other class, as long as it respects the Culpass Branding Guide</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Box</strong></td>
    <td>A layout component for creating boxes and containers.</td>
    <td>
      <ul>
        <li style="padding-bottom:8px,"><strong>as</strong>: The type of component that the box will be (it's recommended to be a div, section, article, main or aside)</li>
        <li style="padding-bottom:8px,"><strong>className</strong>: Any other class, as long as it respects the Culpass Branding Guide</li>
      </ul>
    </td>
  </tr>
</table>


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
