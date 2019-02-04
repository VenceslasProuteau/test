import inRange from 'lodash/inRange';
import filter from 'lodash/filter';

const customers = require('./generated-customers');
const surfaceRange = 15;

export const CustomersService = {
    fetchMatchingCustomers({surface, price, rooms} = {}) {
        return new Promise((resolve, reject) => {
            const matchingCustomers = filter(customers, ({search}) =>
                inRange(price, 0, search.budget) &&
                inRange(surface, search.surface - surfaceRange, search.surface + surfaceRange) &&
                rooms === search.rooms
            )

            console.log('matchingCustomers', matchingCustomers);
            return matchingCustomers.length > 0 ?
                resolve(matchingCustomers) :
                reject();
        });
    }
}