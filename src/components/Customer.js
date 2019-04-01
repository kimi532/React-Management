import React, { Component } from 'react';


class Customer extends Component {
  render() {
    return (
      <div>
        <CustomerProfile image={this.props.image} name={this.props.name} id={this.props.id}/>
        <CustomerInfo  birth={this.props.birth} gender={this.props.gender} job={this.props.job}/>
      </div>

    );
  }
}

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile"/>
        <h2>{this.props.name}</h2>
        <p>{this.props.id}</p>
      
      </div>
    )
  }
}

class CustomerInfo extends Component {
  render() {
    return (
      <div>
      
        <p>{this.props.birth}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      
      </div>
    )
  }
}

export default Customer;
