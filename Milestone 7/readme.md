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

<br>

### CSR
- The browser loads minimal HTML and fetches content via JavaScript.
   - server sends basic html file --> browser downloads js from framework --> js dynamically builds and displays
- Pros: Fast interactions after initial load, less server load.
- Cons: Slower initial load, SEO challenges.
- example: a pizza kit delivered to your home, and you cook it yourself.

### SSR
- The server sends a fully rendered HTML page to the browser.
   - request goes to server --> server build the full html page then sends to browser

- Pros: Faster initial load, better SEO.
- Cons: Slower interactions, higher server load.
- example: restaurant preparing your full pizza before serving it to your table.