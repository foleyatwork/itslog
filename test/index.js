const Logger = require('../logger').default;

const log = Logger('test');

log.log('Standard log message.');

log.warn('Warning!');

log.error('Error!');

log.trace('Trace!');

log.dir({
	1: '1',
	2: '2',
	3: '3',
});
