# It's Log
## It's better than bad, it's good!

I work in environments with heaps of console spam, making it annoying
to find my own logs in the haystack. This package lets you prefix all
your logs with a stylish identifying string without changing the
function signature of your console methods.

Here's how it works.

## Installation

CD into your project folder and install the package.

    npm install itslog --save

Now, in your code, do this:

## Require the Package

Now that you've installed the package, you've got to require it in
your code. You can do that like this:

ES6-Style:

    import itslog from 'itslog';

CommonJS Style:

    const itslog = require('ItsLog');

For browser people with no build system, this package creates a global
variable called ItsLog if no other module loading system is available.
Oh, you can also use AMD. I'm not gonna put an example here, you get
the point. It's a UMD module with a global as a backup.

## Usage Instructions

    const console = itslog('myFancyAssPrefix');

    // Simple methods.
    console.count('count');
    console.log('log');
    console.info('error');
    console.info('info');
    console.warn('warn');

    // Complex methods.
    console.assert(someVar === someOtherVar, 'log');
    console.dir(obj);
    console.dirxml(obj);
    console.group(someVar);
    console.groupCollapsed(someVar);
    console.groupEnd(someVar);
    console.groupEnd(["let's", "make", "a", "table"]);
    console.trace(someVar);

Simple methods will prepend your prefix to the arguments. Complex
methods will log your prefix and then invoke whatever function you
really wanted to call. This is because a random string at the
beginning of, say, a table doesn't make any sense.
