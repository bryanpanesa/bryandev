import React, { Component } from 'react';

//Component
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import typeabBlock from '../../images/projects/typeab/Typeab-block.jpg';
import type2 from '../../images/projects/typeab/type2.PNG';
import type5 from '../../images/projects/typeab/type5.PNG';
import type6 from '../../images/projects/typeab/type6.PNG';

class Typeab extends Component {
    render() {
        var projectData = {
            title: "Type AB",
            company: "Freelance",
            date: "2017 January",
            type: "Web Development",
            role: [
                "Front End Developer"
            ],
            tools_used: [
                "jQuery",
                "Bootstrap"
            ],
            team: [
                "Bryan Jay Panesa"
            ],
            desc: [
                "Type AB is a commercial organization which aims to provide livelihood projects to the Pantawid Pamilyang Pilipino Program or 4Ps beneficiaries through abaca (Manila hemp) products. This is a project website I made for my friend from another college.",
                "Live demo at https://bryanpanesa.github.io/type-ab/"
            ],
            for_project: "This module was made for a freelance project."
        };
        return(
            <div>
            <figure className="image is-3by1">
                <img src={typeabBlock} alt="Type AB" />
            </figure>  
            <Navbar />
            <Header projectData={projectData} />
                <section className="section">
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-5 is-offset-1">
                                <h3 className="is-size-4">THE <strong>PROGRAM</strong></h3><br />
                                <p className="is-size-5">Pantawid Pamilyang Pilipino Program (4Ps) is a human development measure of the national government that provides conditional cash grants to the poorest of the poor, to improve the health, nutrition, and the education of children aged 0-18. The Department of Social Welfare and Development is the lead government agency of the 4Ps.</p>
                            </div>
                            <div className="column is-5">
                                <h3 className="is-size-4"><strong>4Ps</strong> PROGRAM</h3><br />
                                <p className="is-size-5">The 4Ps as adapted from the CCT Programs in Latin America is a poverty reduction strategy that provides cash grants to extremely poor households to allow the members of the families to meet certain human development goals.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={type2} alt="Type AB"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br/><br/><br/><br/>
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4"><strong>ABACA</strong> PRODUCTS</h3><br/>
                                <p className="is-size-5">The main purpose of the site was to showcase the different kinds of products made from abaca.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={type5} alt="Type AB" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={type6} alt="Type AB" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
            </div>
        );
    }
}

export default Typeab;