import React from 'react';

import {formatPrice, formatSurface} from '../../commons/utils';
import {TRANSLATIONS} from './locales-fr';

export const PropertiesListing = ({properties, fetchMatchingCustomers}) =>
    properties.map((property, index) =>
        <div className="listing__item" key={index}>
            <div className="listing__item__property">
                {TRANSLATIONS[property.type]}
            </div>
            <div className="listing__item__property">
                {TRANSLATIONS['rooms']} : {property.rooms}
            </div>
            <div className="listing__item__property">
                {TRANSLATIONS['surface']} : {formatSurface(property.surface)}
            </div>
            <div className="listing__item__property">
                {TRANSLATIONS['price']} : {formatPrice(property.price)}
            </div>
            {
                property.cave &&
                <div className="listing__item__property">
                    {TRANSLATIONS['cave']} : {property.cave}
                </div>
            }
            {property.garden &&
                <div className="listing__item__property">
                    {TRANSLATIONS['garden']} : {formatSurface(property.garden)}
                </div>
            }
            <div 
                className="button listing__item--actions" 
                onClick={() => fetchMatchingCustomers(property)}>
                {TRANSLATIONS['findCustomer']}
            </div>
        </div>
    )