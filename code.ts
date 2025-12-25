// Figma Frame Wrapper Plugin
// This plugin replaces selected elements with rectangles keeping their fill color

// Get the current selection
const selection = figma.currentPage.selection;

// Check if there are any selected elements
if (selection.length === 0) {
  figma.notify('Please select at least one element to replace');
  figma.closePlugin();
} else {
  const createdRects: RectangleNode[] = [];

  // Iterate through each selected element
  for (const node of selection) {
    // Get the node's position and size
    const x = node.x;
    const y = node.y;
    const width = node.width;
    const height = node.height;
    const parent = node.parent;
    const nodeIndex = parent ? parent.children.indexOf(node) : 0;
    const nodeName = node.name;

    // Create a new rectangle
    const rect = figma.createRectangle();
    rect.name = `Rect - ${nodeName}`;
    rect.x = x;
    rect.y = y;
    rect.resize(width, height);

    // Copy fills from the original node if it has fills
    if ('fills' in node && node.fills !== figma.mixed) {
      rect.fills = node.fills;
    }

    // Move the rectangle to the same parent and position as the original node
    if (parent && parent.type !== 'PAGE') {
      parent.insertChild(nodeIndex, rect);
    } else {
      figma.currentPage.appendChild(rect);
    }

    // Remove the original node
    node.remove();

    createdRects.push(rect);
  }

  // Select the newly created rectangles
  if (createdRects.length > 0) {
    figma.currentPage.selection = createdRects;
    figma.viewport.scrollAndZoomIntoView(createdRects);
    
    const message = createdRects.length === 1 
      ? '1 element replaced with rectangle' 
      : `${createdRects.length} elements replaced with rectangles`;
    figma.notify(message);
  }

  figma.closePlugin();
}
