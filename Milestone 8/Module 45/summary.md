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

<br>

### React `<Link>` vs `<a>` Tag:
| Feature                 | `<Link>` (from `react-router-dom`)  | `<a>` (HTML anchor tag)         |
| ----------------------- | ----------------------------------- | ------------------------------- |
| **Page Reload**         | ❌ No full page reload               | ✅ Triggers full page reload     |
| **Client-Side Routing** | ✅ Yes, updates URL via React Router | ❌ No, browser handles routing   |
| **Speed**               | ⚡ Fast (only updates content)       | 🐢 Slower (reloads entire page) |
| **Usage**               | Used for internal navigation        | Used for external links         |

<br>

### `loader` + `useLoaderData` vs `useEffect`
| Feature              | `loader` + `useLoaderData`                            | `useEffect`                                               |
| -------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| **Timing**           | Fetches **before render**                             | Fetches **after render**                                  |
| **Integration**      | Built into React Router routes                        | Manual setup                                              |
| **Code Cleanliness** | No need for `useState`, `useEffect`, or loading logic | Needs state, effect, and often error/loading handling     |
| **Error Handling**   | Automatically handled by route error boundaries       | You handle errors manually                                |
| **SSR Support**      | Ideal for SSR and static data loading                 | Not suitable for SSR                                      |
| **Use Case**         | Route-based, page-level data fetching                 | Dynamic, client-side interactions or non-route components |


<br>

### Why NavLink instead of Link:
- Highlights the active route automatically.
- Allows custom styling for active links.
- Avoids manual useLocation checks.
- Ideal for menus, tabs, sidebars.
- Cleaner and more declarative active state handling.