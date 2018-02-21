'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = splitWithSurplus;
function splitWithSurplus() {
	var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
	var limit = arguments[2];

	if (!limit) {
		return string.split(separator);
	}

	var output = string.split(separator, limit);

	if (output.length < limit) {
		return output;
	}

	var limitIndex = output.join(separator).length + separator.length;
	var leftover = string.substr(limitIndex);

	if (leftover) {
		output.push(leftover);
	}

	return output;
}