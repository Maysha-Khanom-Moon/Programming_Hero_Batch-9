## SPA vs MPA
| Feature                    | SPA (Single Page Application)                         | MPA (Multi Page Application)             |
| -------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| **Page Reloads**           | No full page reload; updates dynamically              | Full page reloads on every interaction   |
| **Speed**                  | Faster after initial load                             | Slower due to multiple full-page loads   |
| **User Experience**        | Smoother and more app-like                            | Traditional navigation experience        |
| **Routing**                | Handled on the client side (e.g., React Router)       | Handled by the server                    |
| **Development Complexity** | Complex due to front-end routing and state management | Simpler, especially for small apps       |
| **SEO**                    | Harder, needs extra work (e.g., SSR or pre-rendering) | Easier since each page is fully rendered |
| **Examples**               | Gmail, Facebook, Twitter                              | Amazon, eBay, Government websites        |

<br>

### Key points to identify a SPA
- ✅ No full page reloads during navigation
- ✅ URL changes without a white screen or full refresh
- ✅ Fast navigation after initial load
- ✅ Uses client-side routing (e.g., React Router)
- ✅ JavaScript-heavy structure (e.g., <div id="root">)
- ✅ Network tab shows no new HTML requests on navigation
- ✅ Uses History API (pushState, replaceState)