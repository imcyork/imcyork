import React from 'react';


const IndexPage = () => ({
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div className="top_options">
          <a href="https://www.medentmobile.com/portal/index.php?practice_id=8fTfL3cT" className="orange-text"> MEDENT Patient Portal</a>
          <a href="/images/form.pdf" className="orange-text">New Patient Form</a>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="carousel fix">
              <a className="carousel-item" href="https://www.google.com/maps/dir/''/1777+5th+Ave,+York,+PA+17403/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c88ee09abdd845:0x647241f36cd01fa6?sa=X&ved=0ahUKEwixzvTnt5nWAhWFyyYKHZ2cAhIQwwUIKTAA"><img src="/images/imc.jpg" /></a>
              <a className="carousel-item" href="/sculpsure"><img alt="" src="/images/sculpt.jpg" /></a>
              <a className="carousel-item" href="/mdvip"><img alt="" src="/images/mdvip.jpg" /></a>
            </div>
          </div>
        </div>
        <h4 className="center orange-text italic">We are accepting new patients for IMC, SculpSure and MDVIP.</h4>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
    );
  },

  componentDidMount() {
    $('.carousel').carousel({ padding: 4 });


    setInterval(() => {
      $('.carousel').carousel('next', 1);
    }, 3000);
  },

});

export default IndexPage;