# Figma Frame Wrapper Plugin

A Figma plugin that replaces selected elements with clean rectangles of the same size, position, and fill color.

## 🎯 What the Plugin Does

- Takes selected elements in Figma
- Creates a clean rectangle of the same size at the same position
- Copies the fill color from the original element
- Removes the original element
- Naming: `Rect - [element name]`
- No additional properties (clipsContent, layoutMode, etc.)

## 📦 Installing the Plugin in Figma

### Step 1: Import the Plugin

1. Open the Figma Desktop app
2. Go to **Plugins** → **Development** → **Import plugin from manifest...**
3. Select the `manifest.json` file from this folder
4. The plugin will appear in the Development plugins section

### Step 2: Done!

The plugin is installed and ready to use.

## 🚀 Using the Plugin

1. Open any file in Figma
2. Select one or more elements (shapes, text, groups, etc.)
3. Run the plugin:
   - **Plugins** → **Development** → **Figma Frame Wrapper**
   - Or use command search: `Ctrl/Cmd + /` and type "Figma Frame Wrapper"
4. Done! Selected elements are replaced with white rectangles

### 💡 Usage Example

**Before:**
- Rectangle (100x100px, blue color)

**After running the plugin:**
- Rect - Rectangle (100x100px, blue rectangle - same color)

## 🛠️ Development

If you want to modify the plugin code:

### Requirements

- Node.js and npm installed ([download](https://nodejs.org/))

### Install Dependencies

```bash
npm install
```

### Compilation

After modifying `code.ts`, run:

```bash
npm run build
```

Or enable automatic compilation on changes:

```bash
npm run watch
```

### Project Structure

- `code.ts` - TypeScript source code (edit this file)
- `code.js` - compiled JavaScript (generated automatically)
- `manifest.json` - Figma plugin manifest
- `package.json` - dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## 📝 Notes

- The plugin does not save change history, use Figma History to undo
- Multiple element selection is supported
- Creates clean rectangles without additional properties
