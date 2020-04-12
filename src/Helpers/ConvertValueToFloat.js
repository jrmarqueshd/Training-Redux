export default function ConvertValueToFloat(value) {
	if (!value) return 0;

	return parseFloat(value.replace(",", "."));
}
