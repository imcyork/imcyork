import React from 'react';

const Faqs = () =>
  <div>
    <div className="spacer" />
    <div className="card">
      <div className="card-content">
        <div className="row">
          <div className="col offset-m2 m4 center">
            <img src="/images/faqs.jpg" />
          </div>
          <div className="col m6">
            <h5>Missed Appointments</h5>
            <span className="question orange-text">Is there a charge for a missed appointment?</span>
                        Yes, there is a $25.00 fee if you do not notify our staff of cancellation within 24 hours prior to your appointment.
                        <h5>Medical Record Request</h5>
            <span className="question orange-text">How can I request my medical records?</span>
                        A release form must be signed in person at the office. There is a $25.00 fee if transferring records out of the practice. If the medical records are to be transferred to another doctor’s office please have their fax number readily available.
                        <h5> Insurance Cards </h5>
            <span className="question orange-text">When do I need to bring my insurance card?</span>
                        Please bring your insurance card with you to every appointment.

                        <h5> New Patients </h5>
            <span className="question orange-text">What do I need to bring to my first appointment?</span>
                        Please bring the following items:
                            <li>Valid driver’s license</li>
            <li>All medication bottles</li>
            <li>A list of any allergies</li>
                        Also, please have your medical records transferred to our office prior your first appointment.
                        <h5> Co-pay </h5>
            <span className="question orange-text">When do I have to pay my co-pay?</span>
                        Your co-pay is due at the time of visit.
                    </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>;

export default Faqs;
