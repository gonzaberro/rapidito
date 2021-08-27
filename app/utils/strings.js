/**
 * Return url to get dynamic lorem template
 * @param {string} type - Can be 'word' or 'paragraph'
 * @param {number} length - Word' length or paragraph' amount
 * @returns {string} Final url
 */
const loremTemplate = (type, length) => `https://asdfast.beobit.net/api/?type=${type}&length=${length}`;

export { loremTemplate };
