# MEAN Framework

- mongoose 4.6.1
- Express 4.14.0
- Angular 2.0.0
- Node.js 4.5.0

---

# Installation

```
# Install dependencies.
$ npm install

# Start server.
$ node index.js
```

---

# File Structure

```
mean/
 │
 ├──server/              * backend logic
 │   ├──models/          * DB model definitions
 │   ├──routes/          * API route definitions
 │   │
 │   ├──index.js         * configure Express and start Node.js
 │   └──routes.js        * import Express routes
 │
 ├──.babelrc             * configure Babel
 ├──package.json         * npm dependencies
 │
 ├──index.js             * use Babel to transpile the server
```
