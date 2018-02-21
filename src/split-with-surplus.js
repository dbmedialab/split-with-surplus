export default function splitWithSurplus(string = '', separator = ',', limit) {
	if (!limit) {
		return string.split(separator);
	}

	const output = string.split(separator, limit);

	if (output.length <= limit) {
		return output;
	}

	const limitIndex = output.join(separator).length + separator.length;
	const leftover = string.substr(limitIndex);
	output.push(leftover);

	return output;
}
