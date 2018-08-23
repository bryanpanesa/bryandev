import React, { Component } from 'react';

//Component
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import presidentsBlock from '../../images/projects/presidents/Presidents-block.jpg';
import pres1 from '../../images/projects/presidents/presidents1.PNG';
import pres2 from '../../images/projects/presidents/presidents2.PNG';

class Presidents extends Component {
    render() {
        var projectData = {
            title: "Presidents of the Philippines",
            company: "Free Code Camp",
            date: "2017 May",
            type: "Web Development",
            role: [
                "Front End Developer"
            ],
            tools_used: [
                "Bootstrap",
                "jQuery"
            ],
            team: [
                "Bryan Jay Panesa"
            ],
            desc: [
                "As part of the Free Code Camp Front End Development Certification, this CodePen tribute page for the Presidents of the Philippines was made."
            ],
            for_project: "This project was made during my online bootcamp at Free Code Camp as a CodePen webpage."
        };
        return (
            <div>
                <figure className="image is-3by1">
                    <img src={presidentsBlock} alt="Presidents" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <section className="section">
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-5 is-offset-1">
                                <h3 className="is-size-4"><strong>DIFFUCULTY</strong> LEVEL</h3><br />
                                <p className="is-size-5">This project from Free Code Camp went easy because you are to use a framework like Bootstrap and I already know how to use bootstrap, so it was fairly easy.</p>
                            </div>
                            <div className="column is-5">
                                <h3 className="is-size-4"><strong>HOSTING</strong> ASSETS</h3><br />
                                <p className="is-size-5">Hosting images became a hassle because I haven't hosted my images before so I searched for a solution and I hosted all my image in Dropbox. The hassle part of hosting was when I neeeded to change all the image urls from dropbox to ?raw=1 in order for them to work.</p>
                            </div>
                        </div>
                        <div className="columns has-text-centered">
                            <div className="column is-5 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={pres1} alt="Presidents" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-5 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={pres2} alt="Presidents" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div><br /><br /><br /><br />
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4"><strong>LESSON</strong> LEARNED</h3><br />
                                <p className="is-size-5">I hosted my images because after letting someone take a look at the site, some images don't load. So I figured out that there was a problem with the linking of images.</p><br/>
                                <p className="is-size-5">One thing I learned from this project is that not all images from Google Images are always up and running.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Presidents;