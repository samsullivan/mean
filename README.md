# MEAN Framework

- mongoose 4.6.1
- Express 4.14.0
- Angular 2.0.0
- Node.js 4.5.0

---

# Installation

```
# Global dependencies.
$ npm install -g typings webpack

# Local dependencies.
$ typings install
$ npm install

# Build website.
$ webpack

# Start server.
$ node index.js
```

---

# File Structure

```
mean/
 │
 ├──client/              * frontend logic
 │   ├──app/             * Angular components & modules
 │   ├──sass/            * SASS templates
 │   │
 │   ├──index.html       * basic HTML layout
 │   ├──main.js          * bootstrap the app
 │   ├──polyfills.js     * polyfills for the app
 │   └──vendors.js       * 3rd party libs for the app
 │
 ├──public/              * static assets
 │   ├──dist/            * webpack's output
 │   │
 │   └──robots.txt       * for the robots
 │
 ├──server/              * backend logic
 │   ├──models/          * DB model definitions
 │   ├──routes/          * API route definitions
 │   │
 │   ├──index.js         * configure Express and start Node.js
 │   └──routes.js        * import Express routes
 │
 └──index.js             * use Babel to transpile the server
```
