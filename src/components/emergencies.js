/* eslint-disable max-len */
import React from 'react';

const Emergencies = () =>
  <div>
    <div className="spacer" />
    <div className="card">
      <div className="card-content">
        <div className="row">
          <div className="col offset-m2 m4 center">
            <img src="/images/emergencies.jpg" />
          </div>
          <div className="col m6">
            <h5 className="font1">
                    If you or a family member is experiencing a life threatening medical emergency, please
                    <a href="tel:911"><span className="red-text"> contact 911</span></a>  immediately.
                </h5>
            <h5 className="font1">
                    If you or a family member are experiencing a non-life threatening medical emergency, please call our office for an appointment or medical assistance.
                </h5>
            <h5 className="font1">
                    After hours a medical provider is available on call via telephone for assistance with non-life threatening medical emergencies. For all other questions or inquiries, please leave a voicemail and a member of our staff will get back to you on the following business day.
                </h5>
            <a className="font1" href="tel:717-843-8051"><h4 className="center red-text">717-843-8051</h4></a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>;
export default Emergencies;
