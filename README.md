# JSDoc,Pydoc Snippets VS Code Extension

This Visual Studio Code (VS Code) extension provides JSDoc comment snippets for JavaScript, JSX, and various frameworks,also provides pydocs for python.

## Features

## Supported Languages

- JavaScript
- JavaScript React
- Vue.js
- Angular
- Svelte
- typscript
- tpescript React
- python (for pydoc)

## Usage

`jsdoc snippet`
1. Open a JavaScript, JSX, or framework-specific file.
2. Type `jsdoc` and trigger the snippet.

`pydoc snippet`
1. Open a python file.
2. Type `pydoc` and trigger the snippet.


## Snippet Structure

The JSDoc snippet structure is as follows:

```javascript
/**
 * @name $1
 * @description $2
 * @example $3
 * @param {$4} $5 - $6
 * @returns {$7}
 */
```


The PyDoc snippet structure is as follows:

```py
"""
Function description.
@name function_name
@description Description of the function.
@example Example of using the function.
@param param_name (param_type): Description of the parameter.
@returns return_type: Description of the return value.
"""
```

## Installation
1. Open VS Code.
3. Go to Extensions (Ctrl + Shift + X or Cmd + Shift + X).
4. Search for "JSDoc Snippets" and install.
   
## Contributing
Feel free to contribute by opening issues or submitting pull requests.
