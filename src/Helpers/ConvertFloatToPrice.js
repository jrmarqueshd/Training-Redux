export default function ConvertFloatToPrice(value) {
	return (value.toFixed(2) + "").replace(".", ",");
}
