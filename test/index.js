const itslog = require('../itslog');
const console = itslog('test');

console.log('Standard log message.');

console.warn('Warning!');

console.error('Error!');

console.trace('Trace!');

console.dir({
	1: '1',
	2: '2',
	3: '3',
});
