/**
 * - link form json placeholder
 * - open the link: https://jsonplaceholder.typicode.com/todos
 * - url: api endpoint
 */
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

/**
 * - need an api to fetch data
 * 
 * 1. fetch(url, options): 
 *   - initiates an http request (returns a promise)
 * 
 * 2. .then():
 *   - used to handle the promise result when it resolves
 *   - resolve means promise is fulfilled
 * 
 * 3. .catch():
 *   - used to handle the promise result when it rejects
 * 
 * 4. .json():
 *   - used to parse the response body as json
 *   - also returns a promise to convert the response to json
 *   - why not JSON.parse()? because the response in raw format (bytes or text), not as a js object
 */