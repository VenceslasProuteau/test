import React from 'react';

import {TRANSLATIONS} from './locales-fr';

export const CustomersListing = ({customers}) =>
    customers.map((customer, index) =>
        <div className="listing__item listing__item--customers" key={index}>
            <div className="listing__item__property">
                {customer.firstName}
            </div>
            <div className="listing__item__property">
                {customer.lastName}
            </div>
            <div className="listing__item--actions">
                <a className="button" href={`mailto:${customer.email}`}>{customer.email}</a>
                <div className="button">
                    {TRANSLATIONS['contactCustomer']} {customer.phone}
                </div>
            </div>
        </div>
    )