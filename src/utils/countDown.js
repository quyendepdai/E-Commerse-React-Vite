export const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let time = {};
    if (difference > 0) {
        time = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            mins: Math.floor((difference / (1000 * 60)) % 60),
            secs: Math.floor((difference / 1000) % 60),
        };
    }
    return time;
};
