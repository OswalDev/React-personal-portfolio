import Tailwind from "../assets/img/technologies/tailwind.svg";
import Laravel from "../assets/img/technologies/laravel.svg";
import Css from "../assets/img/technologies/css.svg";
import Express from "../assets/img/technologies/express.svg";
import Git from "../assets/img/technologies/git.svg";
import Nodejs from "../assets/img/technologies/nodejs.svg";
import MongoDB from "../assets/img/technologies/mongodb.svg";
import PHP from "../assets/img/technologies/php.svg";
import React from "../assets/img/technologies/react.svg";
import Redux from "../assets/img/technologies/redux.svg";
import JavaScript from "../assets/img/technologies/javascript.svg";
import TypeScript from "../assets/img/technologies/typescript.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/nav-icons/arrow1.svg";
import arrow2 from "../assets/img/nav-icons/arrow2.svg";
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
                        <p>These are some of the hard skills I have managed to learn these past years and keep improving every day.</p>
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
                            <div className="item">
                                <img src={TypeScript} alt="Image" />
                                <h5>TypeScript</h5>
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
