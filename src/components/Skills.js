import Tailwind from "../assets/img/tailwind.svg";
import Laravel from "../assets/img/laravel.svg";
import Css from "../assets/img/css.svg";
import Express from "../assets/img/express.svg";
import Git from "../assets/img/git.svg";
import Nodejs from "../assets/img/nodejs.svg";
import MongoDB from "../assets/img/mongodb.svg";
import PHP from "../assets/img/php.svg";
import React from "../assets/img/react.svg";
import Redux from "../assets/img/redux.svg";
import JavaScript from "../assets/img/javascript.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={React} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Redux} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={Tailwind} alt="Image" />
                                <h5>TailwindCSS</h5>
                            </div>
                            <div className="item">
                                <img src={Express} alt="Image" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={PHP} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={Git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={Laravel} alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={Nodejs} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={MongoDB} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={Css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={JavaScript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
