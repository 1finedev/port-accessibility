# Dog Catalog Accessibility Exercise

## Project Overview

This project is a front-end-only React application where you can manage a catalog of dogs. The application includes the following pages:

1. **Catalog Page**: Displays cards with dogs. Each card contains the dog’s name and picture.
2. **Manage Page**: Allows you to add new dogs to the catalog.
3. **About Page**: Contains useful links for this exercise.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine. Follow the instructions below to install Node.js and npm:

### Installing Node.js and npm

#### Windows

1. Download the Node.js installer from the [official Node.js website](https://nodejs.org/).
2. Run the installer and follow the prompts.
3. Verify the installation by running the following commands in your terminal:

   ```bash
   node -v
   npm -v
   ```

#### macOS

1. Install Homebrew if you haven't already by running the following command in your terminal:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Install Node.js using Homebrew:

   ```bash
   brew install node
   ```

3. Verify the installation by running the following commands in your terminal:

   ```bash
   node -v
   npm -v
   ```

#### Linux

1. Open your terminal and update your package list:

   ```bash
   sudo apt update
   ```

2. Install Node.js and npm:

   ```bash
   sudo apt install nodejs npm
   ```

3. Verify the installation by running the following commands in your terminal:

   ```bash
   node -v
   npm -v
   ```

## How to Clone the Repository

To get started, you need to clone the repository to your local machine. Follow these steps:

1. Open your terminal.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

   ```bash
   git clone https://github.com/port-labs/frontend-accessibility-interview.git
   ```

4. Navigate into the cloned repository:

   ```bash
   cd frontend-accessibility-interview
   ```

## Installing Dependencies

Before you can run the application, you need to install the necessary dependencies. Run the following command in your terminal:

```bash
npm install
```

This command will read the `package.json` file and install all the dependencies listed.

## Running the Application

To start the server and run the application, use the following command:

```bash
npm start
```

After running this command, the application should be running on [http://localhost:3000](http://localhost:3000). Open this URL in your web browser to view the application.

## Submission Guide for Accessibility Task

### Task Overview

The main goal of this exercise is to make the application accessible according to WCAG 2.2 standards addressing the following areas:

- **Links**: Ensure link purpose is clear.
- **Lists**: Use proper list elements.
- **Headings**: Use headings to structure content.
- **ARIA**: Use ARIA roles and properties appropriately.
- **Alternative Text**: Provide alt text for images.
- **Colors**: Ensure sufficient color contrast.
- **Forms**: Label form elements clearly.
- **Navigation**: Ensure consistent navigation.
- **Font Size**: Allow text resizing.

### Steps to Test Accessibility

1. **Use Accessibility Tools**: Utilize tools like Lighthouse (built into Chrome DevTools), Axe, or WAVE to identify accessibility issues.
2. **Manual Testing**: Navigate through the application using only the keyboard to ensure all interactive elements are accessible.
3. **Screen Reader Testing**: Use a screen reader (like NVDA or VoiceOver) to navigate the application and ensure all content is accessible.

### What to Fix and How to Verify

1. **Links**: Ensure all links have descriptive text. Verify using Lighthouse or Axe.
2. **Lists**: Ensure all lists use proper HTML list elements (`<ul>`, `<ol>`, `<li>`). Verify by inspecting the HTML structure.
3. **Headings**: Ensure headings are used to structure content logically. Verify using Lighthouse or Axe.
4. **ARIA**: Ensure ARIA roles and properties are used appropriately. Verify using Axe.
5. **Alternative Text**: Ensure all images have appropriate alt text. Verify using Lighthouse or Axe.
6. **Colors**: Ensure text and background colors have sufficient contrast. Verify using Lighthouse or Axe.
7. **Forms**: Ensure all form elements have clear labels. Verify using Lighthouse or Axe.
8. **Navigation**: Ensure navigation is consistent across pages. Verify by manually navigating the application.
9. **Font Size**: Ensure text can be resized without loss of content or functionality. Verify by resizing text in the browser.

### Fixes made to the code to improve the accessibility

For a detailed list of fixes made to the project, please refer to the [CHANGELOG.md](./CHANGELOG.md) file in the project root.

## Conclusion

By following these instructions, you should be able to clone the repository, install dependencies, start the server, and test the application for accessibility. Focus on the provided guidelines to ensure the application meets WCAG 2.2 standards.

Good luck!
