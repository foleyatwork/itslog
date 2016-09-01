export const METHODS_SIMPLE = [
  'count',
  'error',
  'info',
  'log',
  'warn',
];

export const METHODS_COMPLEX = [
  'assert',
  'dir',
  'dirxml',
  'group',
  'groupCollapsed',
  'groupEnd',
  'table',
  'trace',
];

export const NAME = 'logger';

export const STYLES = {
  BROWSER: `font-style: italic;font-weight: bold;`,
  NODE:    `\x1b[36m%s\x1b[0m`,
};

export const ENVS = {
  BROWSER: 'browser',
  NODE:    'node',
};

export default {
  ENVS,
  METHODS_COMPLEX,
  METHODS_SIMPLE,
  NAME,
  STYLES,
};
