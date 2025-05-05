### some libraries
1. react prop types
2. react icons
3. recharts
4. axios
5. tailwind + daisyui


### JSON.stringify vs JSON.parse vs .json
| Function           | Input             | Output              | Use Case                                |
| ------------------ | ----------------- | ------------------- | --------------------------------------- |
| `JSON.stringify()` | JS Object         | JSON string         | Send data to APIs, save to localStorage |
| `JSON.parse()`     | JSON string       | JS Object           | Read stored/received JSON string        |
| `.json()`          | `Response` object | Promise → JS Object | Parse API response body in `fetch()`    |


<br>

### Why use axios over fetch
| Feature                    | **Axios**                          | **Fetch**                        |
| -------------------------- | ---------------------------------- | -------------------------------- |
| **Automatic JSON parsing** | ✔ Yes                              | ❌ Must use `.json()` manually    |
| **Error handling**         | ✔ Throws for HTTP errors (4xx/5xx) | ❌ Only throws on network failure |
| **Request timeout**        | ✔ Built-in                         | ❌ Requires `AbortController`     |
| **Interceptors**           | ✔ Easy request/response intercepts | ❌ Not available                  |
| **Progress tracking**      | ✔ For uploads/downloads            | ❌ Not supported natively         |
| **Simplicity**             | ✔ Cleaner syntax for requests      | ⚠ Can be verbose and manual      |

<br>

### React Awesome Components
A wide variety of <b>ready-to-use, highly customizable UI components</b> built by the React community.