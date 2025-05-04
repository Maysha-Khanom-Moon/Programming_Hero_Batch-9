## Virtual DOM
The **Virtual DOM (VDOM)** is a lightweight JavaScript copy of the real DOM. It helps improve UI performance by minimizing direct manipulation of the actual DOM.

### 🔁 Workflow:

1. **Initial Render**: 
   - React creates a Virtual DOM representation of the UI.

2. **State/Props Change**: 
   - A new Virtual DOM is generated.

3. **Diffing**: 
   - React compares the new Virtual DOM with the previous one to find changes.

4. **Reconciliation**: 
   - React calculates the minimal set of changes needed.

5. **Update**:
   - Only the affected parts of the **real DOM** are updated.

### ✅ Benefits:
- Faster performance
- Efficient updates
- Better user experience

> 💡 React uses the Virtual DOM to batch updates and avoid unnecessary re-renders.