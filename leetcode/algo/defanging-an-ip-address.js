/**
 * Defanging an IP Address
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * Input: address = "1.1.1.1" ==> Output: "1[.]1[.]1[.]1"
 * Input: address = "255.100.50.0" ==> Output: "255[.]100[.]50[.]0"
 */

/**
 * brute force- replaceAll . with [.] with built-in String function replace in js
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
	return address.replaceAll('.', '[.]');
};

var defangIPaddr2 = function(address) {
	const charArray = address.split('.'); // splitted by .
	return charArray.join('[.]');
};



//console.log(defangIPaddr("1.1.1.1"));
//console.log(defangIPaddr("255.100.50.0"));
//console.log(defangIPaddr2("255.100.50.0"));
