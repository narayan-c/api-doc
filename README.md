# API Documentation Workflow

This document outlines the process for updating and viewing the API documentation for the PuzzleMe API.

## Iterating on the API Documentation

Follow these steps to make changes to the API documentation:

### 1. Modify the OpenAPI Spec

All API endpoints, schemas, and descriptions are defined in the `combined-openapi.yml` file. Open this file to make any necessary changes, such as:
- Adding or updating API endpoints.
- Modifying request or response schemas.
- Improving descriptions and examples.

### 2. Build the Documentation

Once you have saved your changes to the `.yml` file, you need to bundle it into a single JSON file that can be rendered in the browser.

Run the following command from within the `api-doc` directory:

```bash
npm run build
```

This command executes the `build` script in `package.json`, which uses Redocly to bundle `combined-openapi.yml` and outputs the result to `combined-openapi.json`. This JSON file is then referenced by `index.html` to render the documentation page.

### 3. View the Documentation

After building the spec, you can view the rendered API documentation by opening the `index.html` file in your browser. This file will now reflect the changes you made.

## Recommended Tooling for VS Code / Cursor

To make it easier to work with OpenAPI files, we highly recommend installing the **42Crunch OpenAPI (Swagger) Editor** extension.

- **Extension Name:** 42Crunch.vscode-openapi
- **Marketplace Link:** [42Crunch OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)

This extension provides valuable features like:
- Live preview of your OpenAPI spec as you type.
- Intellisense for autocompleting fields.
- A tree view for easy navigation of your spec.
- Validation to catch errors in your YAML.

For more information on how to use this extension effectively, check out the tutorials available at the following link:
- **Tutorials and Videos:** [OpenAPI Swagger Editor Extension in VS Code](https://42crunch.com/tutorial-openapi-swagger-extension-vs-code/#Introducing-OpenAPI-Editor)
