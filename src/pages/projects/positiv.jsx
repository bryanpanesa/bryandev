import React, { Component } from 'react';
import '../../components/css/projects.css';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import positiv from '../../images/projects/positiv/positiv.jpg';
import positiv1 from '../../images/projects/positiv/positiv1.png';
import positiv2 from '../../images/projects/positiv/positiv2.png';
import positiv3 from '../../images/projects/positiv/positiv3.png';
import positiv4 from '../../images/projects/positiv/positiv4.png';

class Positiv extends Component {
    render() {
        var projectData = {
            title: "Positiv",
            company: "Personal Project",
            date: "2018 September",
            type: "Product Design",
            role: [
                "UI/UX Designer"
            ],
            tools_used: [
                "Adobe XD",
                "Adobe Photoshop"
            ],
            team: [
                "Bryan Jay Panesa"
            ],
            desc: [
                "Mobile app that saves positive moments in someone's everyday life."
            ],
            for_project: "This project was made for my personal product design journey."
        };
        return (
            <div>
                <figure className="image">
                    <img src={positiv} alt="Bureau of Fire Protection Asssessment & Reports System" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <section className="section">
                    <div className="containter">

                        <div className="container">
                            <div className="columns">
                                <div className="column is-10 is-offset-1">
                                    <h3 className="is-size-4 has-text-centered"><strong>The App</strong></h3><br />
                                    <p className="is-size-5">This was one of the app design I made for my daily UI/UX design challenge.</p><br />
                                    <p className="is-size-5">I was really down during that time, full of negativities on my mind so I decided to design an app that only stores or keeps positive stuff.</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={positiv1} alt="Fire Safety Inspection Certificate" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={positiv2} alt="Fire Safety Evaluation Clearance" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={positiv3} alt="Fire Safety Inspection Certificate" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={positiv4} alt="Fire Safety Evaluation Clearance" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br /><br /><br />

                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Positiv;