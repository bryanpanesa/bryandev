import React, { Component } from 'react';

//Component
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import crud1 from '../../images/projects/inventory/crud1.PNG';
import crud2 from '../../images/projects/inventory/crud2.PNG';
import inventoryBlock from '../../images/projects/inventory/Inventory-block.jpg';

class Inventory extends Component {
    render() {
        var projectData = {
            title: "PHP C.R.U.D.",
            company: "Just for fun",
            date: "2017 May",
            type: "Web Development",
            role: [
                "Web Developer"
            ],
            tools_used: [
                "PHP",
                "Bootstrap",
                "MySql"
            ],
            team: [
                "Bryan Jay Panesa"
            ],
            desc: [
                "Inventory System is a system I made when I was studying object-oriented programming of PHP and was supposedly a system I will design for Jay-Poy Electronics, an electronics shop in our town."
            ],
            for_project: "This project was made during my leisure time just to learn PHP OOP."
        };
        return (
            <div>
                <figure className="image is-3by1">
                    <img src={inventoryBlock} alt="Inventory System" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <section className="section">
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-5 is-offset-1">
                                <h3 className="is-size-4"><strong>ADDING</strong> PRODUCTS</h3><br />
                                <p className="is-size-5">The system consists of basic functions like adding products with names and quantity.</p>
                            </div>
                            <div className="column is-5">
                                <h3 className="is-size-4"><strong>DELETING</strong> PRODUCTS</h3><br />
                                <p className="is-size-5">Another function is deleting of added products from the database with very simple buttons.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={crud1} alt="Type AB" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4"><strong>UPDATING</strong> PRODUCTS</h3><br/>
                                <p className="is-size-5">Updating products is also possible after clicking the edit button of a product and will transform the adding products interface into updating the selected product.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={crud2} alt="Inventory"/>
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

export default Inventory;