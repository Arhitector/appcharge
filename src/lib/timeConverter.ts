function convertMsToTime(milliseconds: number) {
    let seconds: number = Math.floor(milliseconds / 1000);
    let minutes: number = Math.floor(seconds / 60);
    let hours: number = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
  
    seconds = +seconds.toString().padStart(2, '0');
    minutes = +minutes.toString().padStart(2, '0');
  
    if (hours > 0) {
		hours = +hours.toString().padStart(2, '0');
		return `${hours}:${minutes}:${seconds}`;
    } else {
      	return `${minutes}:${seconds}`;
    }
}

export default convertMsToTime;