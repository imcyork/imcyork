import React from 'react';

const Sculpsure = () => ({


  pauseSlides() {
    $('.slider').slider('pause');
    const myVideo = document.getElementById('video1');
    myVideo.play();
    console.log('Clicked');
  },

  render() {
    const styles = {
      backgroundPosition: 'left',
      width: '70vw',
    };

    const styles2 = {
      backgroundPosition: 'bottom',
    };


    return (
      <div>
        <center><img style={styles} src="/images/sculpt2.jpg" /></center>
        <div className="row">
          <div className="col offset-m2 m8">
            <h4>What is SculpSure?</h4>
            <h5>SculpSure is a breakthrough FDA approved, non-invasive light based body contouring system designed to reduce stubborn fat in just 25 minute treatments. This laser technology targets and heats fat cells under the skin without affecting the skin’s surface but raising the temperature of the fat cells and damaging their structural integrity. After the treatment, the damaged fat cells are removed permanently. They are naturally absorbed from your body through your lymphatic system. Since there is no downtime with SculpSure you can have one treatment done during your lunch break and return to work immediately. Patients will start seeing results as early as 6 weeks, with optimal results at 12 weeks.</h5>
          </div>
        </div>
        <div className="row">
          <div className="center">
            <img className="customizable" height="400px" src="/images/how_it_works.jpg" />
            <img className="customizable" height="400px" src="/images/sculpt_machine.jpg" />
          </div>
        </div>
        <div className="row">
          <div className="col offset-m2 m8">
            <h4>Is SculpSure right for me?</h4>
            <h5>SculpSure is ideal for people with trouble spots particularly those that seem resistant to diet and exercise.</h5>
          </div>
        </div>
        <center><iframe width="560" height="315" src="https://www.youtube.com/embed/1Ch3oZqtLT4" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen /></center>
        <div className="row">
          <div className="col offset-m2 m8">
            <h4>What kind of results can I expect?</h4>
            <h5> Patients routinely achieve up to a 24% reduction in fat after their first treatment. These results are permanent as once the fat cells are destroyed, they can not come back.</h5>
          </div>
        </div>
        <div className="row">
          <div className="col offset-m2 m8">
            <h4>Am I a candidate?</h4>
            <h5> Do you live a healthy, active lifestyle, but have annoying pockets of fat that just won’t go away? Perhaps you have thought about body contouring procedures before, but do not want to have surgery, or just don’t have time in your busy schedule to recover from a procedure? SculpSure may be the body contouring solution to help you achieve a slimmer, more sculpted appearance. Call us and schedule your free consultation and learn more about your customized SculpSure treatment.</h5>
          </div>
        </div>
        <div className="row">
          <div className="center">
            <img className="customizable" height="500px" src="/images/customizable.jpg" />
          </div>
        </div>
        <div className="row">
          <div className="col offset-m2 m8">
            <h4>Is it safe?</h4>
            <h5>SculpSure is FDA cleared for the treatment of the abdomen, flanks, back, inner thighs, and outer thighs.</h5>
          </div>
            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/oiovVqXhOlQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></center>
        </div>
        <div className="row">
          <div className="col offset-m2 m8">
            <h4>What is the difference between SculpSure and Coolsculpting?</h4>
            <h5>The applicators:
                                                    Coolsculpting is another body contouring system designed to destroy fat by using suction applicators and freezing to kill off the fat cells.
                                                    While the SculpSure’s applicator is a flat sapphire crystal that lays directly against the skin as a 1060nm diode laser is used to generate heat deep in the skin and melt the fat without affecting the skin surface or any underlying structures.
                                            </h5>
            <h5>

                                                    Treatment areas:
                                                <h5>SculpSure is able to treat up to four different areas of the body in a single 25-minute session. </h5>
                                                While Coolsculpting is able to treat just one area at a time. Even if an office has two Coolsculpting machines available and can offer Dual Sculpting, it will still typically take 3 to 4 hours to treat an average patient’s abdomen and flanks.
                                                <h5>  What is the dynamics between treated and untreated areas?
                                                       With Coolsculpting the suction applicator can cause a “shelving”effect, this a demarcation between the treated and non-treated areas, also known as “a shark bite.” Since the SculpSure’s applicator sits directly on top of the skin and does not require suction this allows for a tapering effect between treated and non-treated areas, thus there are no delineations.</h5>
                                                    What are some drawbacks to Coolsculpting?
                                                    First, at least an inch of unwanted fat in any given area is required in order to adequately be sucked into the applicator.
                                                    The second issue deals with pain. The force required by the suction can be extremely painful during the first 6 minutes of treatment, before the targeted area can become numb. Also some patients have reported increased tenderness following treatments, especially once the numbness has worn off.
                                                    Lastly, there have been reports that due to the freezing process used by Coolsculpting that this can cause long-term nerve damage, along with temporary nodules, bruising, and itching that can last weeks or even months. These symptoms may require prescription medications to alleviate. By contrast, since SculpSure uses heat it does not damage any tissue other than fat, and there are no reported cases of post procedure nerve pain or numbness. There may be some initial swelling or bruising after treatment, however this typically lasts less than 24 hours.
                                                    IS there anything SculpSure can offer that Coolsculpting can  not?
                                                    Since SculpSure uses heat, it has also been shown to stimulate collagen within the treated area. This leads to tightening of the skin in addition to fat cell destruction.
                                                </h5>
          </div>
        </div>
        <div className="row">
          <div className="center">
            <img className="customizable" height="500px" src="/images/social_sculpt.jpg" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col offset-m2 m8">
            <h4 className="center">Before and After</h4>
          </div>
        </div>
        <div className="slider big-slider">
          <ul className="slides big-slides">
            <li>
              <img style={styles2} src="/images/before_after_sculpt_1.jpg" />
            </li>
            <li>
              <img style={styles2} src="/images/before_after_sculpt_2.jpg" />
            </li>
            <li>
              <img style={styles2} src="/images/before_after_sculpt_3.jpg" />
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  },

  componentDidMount() {
    $('.slider').slider({ transition: 100 });
    $('.slider2').slider();
    $('.customizable').materialbox();
  },
});
export default Sculpsure;
