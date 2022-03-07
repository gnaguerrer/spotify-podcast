const optionsMonth = { month: 'long' };
const optionsDay = { day: 'numeric' };

/**
 * 
 * @param {string} date fecha en string
 * @param {object} configMonth month options
 * @param {object} configDay day options
 * @returns 
 */
export const dateFormat = (date, configMonth, configDay) => {
    return {
        month: date?.toLocaleDateString('es-CO', configMonth ?? optionsMonth),
        day: date?.toLocaleDateString('es-CO', configDay ?? optionsDay)
    }
}