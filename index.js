
"use strict";

// export DEBUG=tools:*,info / unset DEBUG
// localStorage.debug = 'tools:*';

const Debug = require('./lib/Debug.js');

module.exports = (opt) => { return new Debug(opt); };
