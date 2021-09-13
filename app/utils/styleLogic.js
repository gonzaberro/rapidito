export function getOpinionesColor(value) {
	if(value > 4){
		return "#657d02";
	}
	if(value > 3){
		return "#ab7f10";
	}
	return "#af0e0e";
}