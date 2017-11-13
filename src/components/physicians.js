import React from 'react';


const Physicians = () => ({


    /* open(id) {
        console.log(id);
        $('#' + id).modal('open');
    },
    */

  open1() {
    $('#modal1').modal('open');
  },

  open2() {
    $('#modal2').modal('open');
  },

  open3() {
    $('#modal3').modal('open');
  },

  open4() {
    $('#modal4').modal('open');
  },

  render() {
    return (
      <div>
        <div className="row physicians">
          <div className="col s12 m3 center">
            <div className="polaroid" onClick={this.open1.bind(this)}>
              <img height="200px" src="/images/Tom2.jpg" />
              <div className="polar-cap">
                <h5>Dr. Kurland</h5>
              </div>
            </div>
          </div>
          <div className="col s12 m3 center">
            <div className="polaroid" onClick={this.open2.bind(this)}>
              <img height="200px" src="/images/Pete3.jpg" />
              <div className="polar-cap">
                <h5>Dr. Kouvatsos</h5>
              </div>
            </div>
          </div>
          <div className="col s12 m3 center">
            <div className="polaroid" onClick={this.open3.bind(this)}>
              <img height="200px" src="/images/Carol.jpg" />
              <div className="polar-cap">
                <h5>Carol Snyder, CRNP</h5>
              </div>
            </div>
          </div>
          <div className="col s12 m3 center">
            <div className="polaroid" onClick={this.open4.bind(this)}>
              <img height="200px" src="/images/Bradley.jpg" />
              <div className="polar-cap">
                <h5>Dr. Bradley</h5>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        <div id="modal1" className="modal">
          <div className="modal-content">
            <img className="circle doctor_pic" height="200px" src="/images/Tom2.jpg" />
            <h4>Dr. Thomas Kurland</h4>
            <p>Dr. Thomas Kurland obtained his education at the Philadelphia College of Osteopathic Medicine, and completed his internship and residency at Community General Osteopathic Hospital. Dr. Kurland is Board Certified by the American College of Osteopathic Internists, and maintains hospital affiliations with Memorial Hospital. He is also affiliated with the MDVIP program.</p>
          </div>
        </div>


        <div id="modal2" className="modal">
          <div className="modal-content">
            <img className="circle doctor_pic" height="200px" src="/images/Pete3.jpg" />
            <h4>Dr. Peter Kouvatsos</h4>
            <p>Dr. Peter Kouvatsos is a York County native. He obtained his education at the Lake Erie College of Osteopathic Medicine, completed his internship at Heart of Lancaster and residency at Memorial Hospital. Dr. Kouvatsos is Board Certified by the American College of Osteopathic Internists, and maintains hospital affiliation with Memorial Hospital.</p>
          </div>
        </div>


        <div id="modal4" className="modal">
          <div className="modal-content">
            <img className="circle doctor_pic" height="200px" src="/images/Bradley.jpg" />
            <h4>Dr. Craig Bradley</h4>
            <p>Dr. Craig Bradley is a graduate of the Michigan State University College of Osteopathic Medicine and is certified in family medicine by the American Board of Osteopathic Family Physicians. He is on staff at York Memorial Hospital and a member of the American Osteopathic Association, the Pennsylvania Osteopathic Medical Association, and the Pennsylvania Osteopathic Family Physician Society. Prior to joining Internal Medicine Consultants in 2014, Dr. Bradley was in private practice at the Spry Family Medical Center for 35 years.</p>
          </div>
        </div>


        <div id="modal3" className="modal">
          <div className="modal-content">
            <img className="circle doctor_pic" height="200px" src="/images/Carol.jpg" />
            <h4>Carol Snyder</h4>
            <p>Carol Snyder is a Certified Registered Nurse Practitioner with over 30 years in the medical field. She initially obtained her B.S.N./R.N. Degree from the Eastern Mennonite University in Lancaster, Pennsylvania. After several years of hands on clinical experience, she went on to pursue further education and advanced to a Masters of Science in Nursing from Millersville University as a Family Nurse Practitioner. She later achieved her Post Masters Certification from the University of Pennsylvania in Adult Geriatric Care and Acute Care. Carol Snyder is a Board Certified Registered Nurse Practitioner and maintains hospital affiliation with Memorial Hospital.</p>
          </div>
        </div>

      </div>
    );
  },

  componentDidMount() {
    $('.modal').modal();
  },

});


export default Physicians;
