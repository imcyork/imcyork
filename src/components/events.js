/* eslint-disable react/prefer-stateless-function */
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
    const events = this.state.events.map((event, index) => <div key={index}>
      <p className="event-item">{event.acf.event_text}</p>
    </div>);

    return (
      <div>
        <div className="spacer" />
        <div className="card special-card">
          <div className="card-content">
            <h2 className="center ">Events/Specials</h2>
            {events}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Events;
