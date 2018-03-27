/* eslint-disable react/prefer-stateless-function,no-underscore-dangle */
import React, { Component } from 'react';

class Events extends Component {

  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    const dataURL = 'https://blog.imcyork.com/wp-json/wp/v2/events?_embed';
    fetch(dataURL)
        .then(res => res.json())
        .then((res) => {
          this.setState({
            events: res,
          });
        });
  }

  render() {
    const events = this.state.events.map((event, index) =>

      <div key={index} className="row">
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-image">
              <img alt="Event" src={event._embedded['wp:featuredmedia']['0'].source_url} />
            </div>
            <div className="card-content">
              <p>{event.acf.event_title}</p>
            </div>
          </div>
        </div>
      </div>,
    );


    return (
      <div>
        <div className="spacer" />
        <h2 className="special-title">Events/Specials</h2>
        {events}
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Events;
