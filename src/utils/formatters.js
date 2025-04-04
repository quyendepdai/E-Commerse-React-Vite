export const formatNumber = (num) => {
    // return String(num).padStart(2, '0');
    return num < 10 ? `0${num}` : num;
};

export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
