function getDateAndTime() {
	let currDate = new Date();
	let dateArr = String(currDate).split(" "),
		timeArr = dateArr[4].split(":");
	return [dateArr[1] + dateArr[3], dateArr[0] + dateArr[2], getTime(currDate)]
}

function getTime(date) {
	let currHour = date.getHours(),
		currMinutes = date.getMinutes(),
		currSeconds = date.getSeconds(),
		day = true;
	if(currHour == 0) currHour += 12;
	else if(currHour > 12) {
		currHour -= (currHour - 12);
		day = false;
	}
	return currHour + ":" + (currMinutes < 10 ? "0" + currMinutes : currMinutes) + (day ? "am" : "pm");
}

window.onload = () => {
	console.log("Loaded.");
	setInterval(() => {
		let currDateAndTime = getDateAndTime();
		document.getElementById("month-year").innerHTML = currDateAndTime[0]/*.toUpperCase()*/;
		document.getElementById("day-date").innerHTML = currDateAndTime[1]/*.toUpperCase()*/;
		document.getElementById("time").innerHTML = currDateAndTime[2]/*.toUpperCase()*/;
	}, 100);
}