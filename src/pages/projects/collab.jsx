import React, { Component } from 'react';
import '../../components/css/projects.css';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import collab from '../../images/projects/collab/collab.jpg';
import collab1 from '../../images/projects/collab/collab1.png';
import collab2 from '../../images/projects/collab/collab2.png';
import collab3 from '../../images/projects/collab/collab3.png';

class Collab extends Component {
    render() {
        var projectData = {
            title: "Collab",
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
                "An app specifically for photoshoot collaborations like X-Deals(Exchange Deals) wherein photographers, models, hair & make-up artists and designers can easily and safely locate each other."
            ],
            for_project: "This project was made for my personal product design journey."
        };
        return (
            <div>
                <figure className="image">
                    <img src={collab} alt="Collab" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <section className="section">
                    <div className="containter">

                        <div className="container">
                            <div className="columns">
                                <div className="column is-10 is-offset-1">
                                    <h3 className="is-size-4 has-text-centered"><strong>The Concept</strong></h3><br />
                                    <p className="is-size-5">As a hobbyist photographer, I had a goal to connect my profession as a developer & designer to my hobby. I decided to create an app specifically for photoshoot collaborations like X-Deals(Exchange Deals) wherein photographers, models, hair & make-up artists and designers can easily and safely locate each other.</p><br />
                                    <p className="is-size-5">I had a lot of ideas on to put on this app like a tracking system to track nearby photographer or models, posting collaborations with complete details like theme, location, time, number of photographers, models and hmua needed for the shoot. The app will also include a profile, ranking and a feedback system to make the collaborations safe for everyone.</p><br/>
                                    <p className="is-size-5">I truly believe that an app like this will change the world of photography collaboration in the Philippines or globally because it will affect newbie photographers and models with regards their confidence of looking for a collaboration without any experience. Not to mention the proper standard of looking for a collaboration will also be embedded in every user rather than just posting on social media randomly.</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-4">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={collab1} alt="Collab" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={collab2} alt="Collab" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={collab3} alt="Collab" />
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

export default Collab;