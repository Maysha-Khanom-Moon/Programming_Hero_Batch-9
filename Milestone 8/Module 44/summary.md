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
