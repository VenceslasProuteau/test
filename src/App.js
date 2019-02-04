import React, { Component } from 'react';
import './App.css';

import Loader from './commons/loader/Loader';
import Error from './commons/error/Error';
import {ERROR_REASONS} from './commons/errors/errors.constants';

import {PropertiesListing} from './components/properties/PropertiesListing';
import {PropertiesService} from './components/properties/PropertiesService';

import {CustomersListing} from './components/customers/CustomersListing';
import {CustomersService} from './components/customers/CustomersService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      customers: []
    }
    this.fetchMatchingCustomers = this.fetchMatchingCustomers.bind(this);
  }

  componentDidMount() {
    PropertiesService.fetch()
      .then(properties => this.setState({properties}))
      .catch(() => this.setState({noPropertiesAvailable: false}))
      .finally(() => this.setState({isLoading: false}));
  }

  fetchMatchingCustomers(property) {
    this.setState({isLoading: true});
    return CustomersService.fetchMatchingCustomers(property)
      .then(customers => this.setState({customers}))
      .catch(() => this.setState({noMatchingCustomers: true}))
      .finally(() => this.setState({isLoading: false}));
  }

  render() {
      return this.state.isLoading ?
        <Loader /> :
        this.state.properties.length > 0 ?
            <div className="home">
              <PropertiesListing 
                properties={this.state.properties} 
                fetchMatchingCustomers={this.fetchMatchingCustomers}
                />
              {this.state.customers.length > 0 &&
                (this.state.noMatchingCustomers ?
                  <Error reason={ERROR_REASONS.NO_CUSTOMERS} /> :
                  <div className="customers-listing">
                    <CustomersListing customers={this.state.customers} />
                  </div>
                )
              }
            </div> :
            <Error reason={ERROR_REASONS.NO_OFFERS} />
  }
}

export default App;
