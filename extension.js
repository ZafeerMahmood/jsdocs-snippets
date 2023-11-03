import * as vscode from 'vscode';

const mySnippet = new vscode.SnippetString(`/**
 * Description: \${1:description}
 * @param {\${2:type}} \${3:paramName} - \${4:Description}
 * @returns {\${5:returnType}} - \${6:Return description}
 */
`);

vscode.commands.registerCommand('extension.insertMySnippet', () => {
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        activeEditor.insertSnippet(mySnippet);
    }
});