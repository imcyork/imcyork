import React from 'react';

const Patients = () => ({
  render() {
    return (
      <div>
        <div className="spacer" />
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col offset-m2 m4 center">
                <img className="sizable" alt="" src="/images/about.jpg" />
              </div>
              <br />
              <h4>Services</h4>
              <div className="col m6">
                <div className="row">
                  <div className="col s12 m6">• Cardiac Monitor</div>
                  <div className="col s12 m6">• SculpSure</div>
                </div>
                <div className="row">
                  <div className="col s12 m6">• Biometric screening</div>
                  <div className="col s12 m6">• Pulse Oximetry</div>
                </div>
                <div className="row">
                  <div className="col s12 m6">• Pulmonary Function Testing</div>
                  <div className="col s12 m6">• Ear Lavages</div>
                </div>
                <div className="row">
                  <div className="col s12 m6">• EKG</div>
                  <div className="col s12 m6">• Skin Lesion Removal</div>
                </div>
                <div className="row">
                  <div className="col s12 m6">• Coumadin Management</div>
                  <div className="col s12 m6">• Arterial Brachial Index</div>
                </div>
                <div className="row">
                  <div className="col s12 m6">• Cryotherapy for Skin Lesions</div>
                </div>

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


export default Patients;

