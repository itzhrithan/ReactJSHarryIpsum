import React, { Component } from 'react';
import Classes from './Carousel.module.css';
export class Carousel extends Component {
  render() {
    return (
      <>
        <section>
          <div className={'row ' + Classes.BackgroundDiv}>
            <div className={'col-md-12 '}>
              <img
                src='https://itzhrithan.github.io/ReactJSHarryIpsum/public/background_1.jpg'
                className={Classes.Background}
              />
            </div>
          </div>

          <div className={'row'}>
            <div className={'col-md-4 offset-md-1 ' + Classes.FrontDiv}>
              <img
                src='https://itzhrithan.github.io/ReactJSHarryIpsum/public/front_2.jpg'
                className={Classes.Front}
              />
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
