export const secondsToString = (seconds) => {
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    let second = Math.floor(seconds % 60);
    second = (second < 10) ? '0' + second : second;
    return hour > 0 ? `${hour}h ${minute}min ${second}s` : `${minute}min ${second}s`
}