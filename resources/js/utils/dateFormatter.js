export function dayLongMonth(date) {
    return new Date(date).getDate() 
    + ' ' +
    new Date(date).toLocaleString('ru', { month: 'long' });
}


export function dayLongMonthYear(date) {
    return new Date(date).getDate() 
    + ' ' +
    new Date(date).toLocaleString('ru', { month: 'long' }) 
    + ', ' +
    new Date(date).getFullYear();
}