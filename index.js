const formatDate = (timeInSeconds) => {
    if(!timeInSeconds) {
        return '0s';
    }
    
    const sec_num = parseInt(timeInSeconds, 10);
    const hours = Math.floor(sec_num / 3600) % 24;
    const minutes = Math.floor(sec_num / 60) % 60;
    const seconds = sec_num % 60;
    
    return [
        hours ? hours + 'h ' : '',
        minutes ? minutes + 'm ' : '',
        seconds ? seconds + 's ' : ''
    ].join('').trim();
}

module.exports = formatDate;
