/**
 * ----------------------------------
 * MongoDB Connection
 * ----------------------------------
 * 1. create account on MongoDB Atlas
 * 2. create a user with password
 * 3. white list your IP address
 * 4. database > connect > driver > Node > show all code
 * 5. adjust the uri
 * 
 * 6. CRUD operations: mongodb.com/docs/drivers/node/current/fundamentals/crud/
 *    - Create: insertOne, insertMany --> POST
 *    - Read: find, findOne --> GET
 *    - Update: updateOne, updateMany --> PUT/PATCH
 *    - Delete: deleteOne, deleteMany --> DELETE
 * 
 * # PUT replaces the entire document, while PATCH updates only the specified fields.
 * 
 * # Make the functions async to use await to avoid callback hell
 */