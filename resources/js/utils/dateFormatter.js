export function dayLongMonth(date) {
    return new Date(date).getDate() 
    + ' ' +
    new Date(date).toLocaleString('ru', { month: 'long' });
}

export function time(date) {
    return new Date(date).toLocaleTimeString({ hour12: false }).slice(0, -3)
}


export function dayLongMonthYear(date) {
    return new Date(date).getDate() 
    + ' ' +
    new Date(date).toLocaleString('ru', { month: 'long' }) 
    + ', ' +
    new Date(date).getFullYear();
}