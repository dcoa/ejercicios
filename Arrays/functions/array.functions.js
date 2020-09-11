/**
 *  * Add element in an array
 * @param array
 * @param element
 * @returns any[]
 */
const add = (array, element) => array.push(element);

/**
 * Remove element in array
 * @param array
 * @param element
 */
const remove = (array, element) => {
  let removeE = array.indexOf(element);
  array.splice(removeE, 1);
  return array
};


/**
 * Remove by specific position
 * @param position
 */
const removeByPosition = (position, array,numElement) => {
  let removeElement = array.splice(position, numElement);
  return array
};

/**
 * Sort by function
 * @param fn
 */
const sort = (fn) => { (array, fn) => {     return array.sort(fn); } ;

/**
 * Join with a second array
 * @param newArray
 */
const joinWith = (actualArray, newArray) => actualArray.concat(newArray);

//const searchBy = (array, value) => array.filter(e => e === value);
const searchBy = (array, value) => array.find(e => e === value);

/**
 * Return the array values
 */
const values = (array) => {return array.forEach(item => item )};

/**
 * Get the array
 * position numbers
 */
const size = (array) => array.length;

/**
 * Clear array
 */
const clear = (array) => array = [ ];

/**
 * Convert array toString  o join
 */
const toString = (array) => array.join(' ');

export { add }
