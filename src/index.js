import {
	METHODS_COMPLEX,
	METHODS_SIMPLE,
	NAME,
} from './constants';

import {
	convertArgsToArray,
	prependItemsToArray,
	getConsoleObject,
	getEnv,
	getPrefixes,
} from './util';

const env = getEnv();
const consolePointer = getConsoleObject();
const wrapper = {};

/**
 * @param   {String} prefix
 * @returns {Object} A console wrapper.
 */
module.exports = function Logger(prefix) {
// Use "module.exports" instead of "export default" so people who aren't using
// ES6 don't have to use Logger.default. The people who use ES6 will still be
// able to do "import Logger from 'logger'".

	// Attach all simple methods to the wrapper object.
	METHODS_SIMPLE.forEach((method) => {
		wrapper[method] = function() {
			const prefixItems = getPrefixes(env, prefix);
			let args = convertArgsToArray(arguments);
					args = prependItemsToArray(prefixItems, args);

			return consolePointer[method].apply(consolePointer, args);
		}
	});

	// Attach all complex methods to the wrapper object.
	METHODS_COMPLEX.forEach((method) => {
		wrapper[method] = function() {
			const args = convertArgsToArray(arguments);
			console.log.apply(console, getPrefixes(env, prefix));

			return consolePointer[method].apply(consolePointer, args);
		}
	});

	return wrapper;

}
