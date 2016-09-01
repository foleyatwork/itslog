import {
	ENVS,
	METHODS_SIMPLE,
	METHODS_COMPLEX,
	STYLES,
} from '../constants';

function noop() {
	return false;
}

export function getEnv() {
	if (typeof window !== 'undefined') {
		return ENVS.BROWSER;
	}

	return ENVS.NODE;
}

export function getPrefixes(env, prefix) {
	if (env === ENVS.BROWSER) {
		return [ `%c[${prefix}]: `, STYLES.BROWSER ];
	}

	return [ STYLES.NODE, `[${prefix}]: ` ];
}

export function convertArgsToArray(_args) {
	const args = Array.prototype.slice.call(_args);
	return args;
}

export function prependItemsToArray(items, arr) {
	arr.unshift.apply(arr, items);
	return arr;
}

export function getConsoleObject() {
	if (typeof console !== undefined) {
		return console;
	}

	const _console = {};
	const allMethods = METHODS_SIMPLE.concat(METHODS_COMPLEX);

	allMethods.forEach((method) => {
		_console[method] = noop;
	});

	return _console;
}
