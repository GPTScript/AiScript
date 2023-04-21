# LSP Example

Heavily documented sample code for https://code.visualstudio.com/api/language-extensions/language-server-extension-guide

## Functionality

This Language Server works for ais files. It has the following language features:
- Diagnostics regenerated on each file change or configuration change

It relies on the aiscript library, which is independent of LSP.

## Structure

```
.
├── client // Language Client
│   ├── src
│   │   └── extension.ts // Language Client entry point
├── syntaxes/aiscript.tmLanguage.json // client-side syntax highlighting
├── package.json // The extension manifest.
└── server // Language Server
    └── src
        └── server.ts // Language Server entry point
```

## Running the Sample
- First build the aiscript library, and publish it using `npm link` (see aiscript readme)
- Comment out the 'aiscript' dependency in server/package.json
- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Run `npm link aiscript` then uncomment the dependency in package.json
- Open VS Code on this folder (LSP).
- Open a terminal
- Run `npm run compile`
- Switch to the Run and Debug View in the Sidebar (Ctrl+Shift+D).
- Select `Launch Client` from the drop down (if it is not already).
- Press ▷ to run the launch config (F5). This will start a VSCode instance with the extension loaded.
- In the Extension Development Host instance of VSCode, create a document with an 'ais' extension (such as example.ais).
  - Type some valid AiScript code.
  - If the syntax is incorrect, syntax errors are highlighted 
  - If the syntax is correct, analysis is run and may produce hints, underline by a wizzy blue line. Quick fix... will generate the declaration code.
 - Debugging the server requires selection `Attach Server` from the drop down and press ▷. You can then add breakpoints.