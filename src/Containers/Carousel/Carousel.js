import React, { Component } from 'react';
import Classes from './Carousel.module.css';
export class Carousel extends Component {
  state = {
    imgFront: '/front_2.JPG',
    imgBack: '/background_1.JPG'
  };
  render() {
    return (
      <>
        <section>
          <div className={'row ' + Classes.BackgroundDiv}>
            <div className={'col-md-12 '}>
              <img src={this.state.imgBack} className={Classes.Background} />
            </div>
          </div>

          <div className={'row'}>
            <div className={'col-md-4 offset-md-1 ' + Classes.FrontDiv}>
              <img src={this.state.imgFront} className={Classes.Front} />
            </div>
            <div className={'col-md-6 ' + Classes.mobilePosition}>
              <div className={Classes.input}>
                <h1>
                  Harry
                  <span style={{ color: '#a80038' }}>Ipsum.</span>
                </h1>
                <h4 className='offset-md-3'>
                  Dummy Text Generator of most famous Fantasy Novel.
                </h4>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
