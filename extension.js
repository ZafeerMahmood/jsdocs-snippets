import * as vscode from 'vscode';

// Define a trigger word, for example, "jsdoc"
const triggerWord = 'jsdoc';

// Create a JSDoc snippet
const mySnippet = new vscode.SnippetString(`/**
 * Description: \${1:description}
 * @param {\${2:type}} \${3:paramName} - \${4:Description}
 * @returns {\${5:returnType}} - \${6:Return description}
 */
`);

vscode.commands.registerCommand('extension.insertMySnippet', () => {
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        // Check if the line starts with the code trigger
        const position = activeEditor.selection.active;
        const line = activeEditor.document.lineAt(position.line);
        if (line.text.startsWith(`/* ${triggerWord}`)) {
            activeEditor.insertSnippet(mySnippet);
        }
    }
});