import React from 'react';

const Appointments = () =>
  <div>
    <div className="spacer" />
    <div className="card">
      <div className="card-content">
        <div className="row">
          <div className="col offset-m2 m4 center">
            <img className="sizable" alt="" src="/images/contact.jpg" />
          </div>
          <div className="col m6">
            <h5>
                            We look forward to speaking with you!
                        </h5>
            <a href="tel:717-843-8051">
              <h6 className="orange-text">
                            Office: (717) 843-8051
                        </h6>
            </a>
            <a href="tel:1-800-782-7780">
              <h6 className="orange-text">
                            Toll Free:  1-800-782-7780
                        </h6>
            </a>
            <a href="tel:717-850-4049">
              <h6 className="orange-text">
                            MDVIP: 717-850-4049
                        </h6>
            </a>
            <a href="tel:717-848-2578">
              <h6 className="orange-text">
                                Fax: 717-848-2578
                            </h6>
            </a>
            <div className="divider" />
            <h5>
                        Conveniently located next to
                        Memorial Hospital at
                        </h5>
            <a href="https://www.google.com/maps/dir/''/1777+5th+Ave,+York,+PA+17403/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c88ee09abdd845:0x647241f36cd01fa6?sa=X&ved=0ahUKEwixzvTnt5nWAhWFyyYKHZ2cAhIQwwUIKTAA">
              <h6 className="orange-text">
                            1777 5th Avenue
                            York, PA 17403
                        </h6>
              <h6 className="orange-text">
                            (Click here for directions)
                        </h6>
            </a>
            <div className="divider" />
            <h5>
                                  Office Hours:
                        </h5>
            <h6>
                            Monday - Thursday  8am - 5pm
                        </h6>
            <h6>
                            Friday  8am - 12pm
                        </h6>
            <h6>
                            Closed Saturday and Sunday
                        </h6>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>;

export default Appointments;
