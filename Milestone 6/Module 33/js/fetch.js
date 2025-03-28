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
 *   - parse the response body as json (returns a promise)
 *   - why not JSON.parse()? because the response in raw format (bytes or text), not as a js object
 */


/**
 * ---- options ----
 * 1. method: GET, POST, PUT, DELETE
 * 2. body: data to be sent
 * 3. headers: key-value pairs
 * 
 * - GET: retrieve data (default)
 * - POST: create data
 * - PUT: if exist, update data otherwise create
 * - PATCH: update data
 * - DELETE: delete data
 */

/**
 * ---- CRUD operations ----
 * - create: POST
 * - read: GET
 * - update: PUT
 * - delete: DELETE
 */