/* eslint-disable max-len */
import React from 'react';

const Insurances = () => ({
  render() {
    return (
      <div>
        <div className="spacer" />
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col offset-m2 m4 center">
                <img src="/images/insurance.jpg" />
              </div>
              <br />
              <br />
              <br />
              <div className="col m6">
                <h5>We participate with most insurance plans including the following larger networks:</h5>
                <h6>
                  <br />
                  <div className="row">
                    <div className="col s12 m3">• Aetna</div>
                    <div className="col s12 m3">• Capital BlueCross</div>
                    <div className="col s12 m3">• Cigna</div>
                    <div className="col s12 m3">• Coventry</div>
                  </div>
                  <div className="row">
                    <div className="col s12 m3">• Geisinger</div>
                    <div className="col s12 m3">• Health America</div>
                    <div className="col s12 m3">• Humana</div>
                    <div className="col s12 m3">• Medicare</div>
                  </div>
                  <div className="row">
                    <div className="col s12 m3">• South Central Preferred</div>
                    <div className="col s12 m3">• United Healthcare</div>
                    <div className="col s12 m3">• Highmark Blueshield</div>
                    <div className="col s12 m3">• Cigna Health Spring</div>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  },
});


export default Insurances;
