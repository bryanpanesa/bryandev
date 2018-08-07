import React, { Component } from 'react';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import phage2 from '../../images/projects/phagebiotics/phage2.jpg';
import tilemap from '../../images/projects/phagebiotics/tilemap.jpg';
import backgrounds from '../../images/projects/phagebiotics/backgrounds.jpg';
import explosion from '../../images/projects/phagebiotics/explosion.png';
import smallSprites from '../../images/projects/phagebiotics/smallSprites.png';
import playersprites from '../../images/projects/phagebiotics/playersprites.png';
import tutorial from '../../images/projects/phagebiotics/phage3.jpg';

class Phagebiotics extends Component {
    render() {
        var projectData = {
            title: "Phagebiotics: A 2D Survival Shooting Game",
            company: "Undergraduate Thesis",
            date: "2017 April",
            type: "Game Development",
            role: [
                "Front End Developer"
            ],
            tools_used: [
                "Java",
                "Tiled Map Editor",
                "Photoshop"
            ],
            team: [
                "Bryan Jay Panesa",
                "Dexter Miranda",
                "John Carlo Reñivo"
            ],
            desc: [
                "Phagebiotics intends to increase the awareness of using too much antibiotics that makes bacteria antibiotic-resistant and gain knowledge about bacteriophage that serves as an alternative in eliminating the so called ”Superbugs” or the antibiotic-resistant bacteria. The foremost objective of this study is to design and develop a game that aims to raise awareness of the battle against antibiotic-resistant bacteria and models it as a desktop game that is not only great and fun to play but also scientifically inclined. ",
                "The game was awarded as the  Best Undergraduate Thesis under Global Competitiveness during the College Student Research & Development Forum (1st Place), March 4, 2017.",
                "The game was also presented during the 13th Bicol University Student Research & Development Forum, March 10, 2017.",
                "You can watch the game preview in https://www.youtube.com/watch?v=R3jQ4Z_6iSE"
            ],
            for_project: "This game served as our undegraduate thesis."
        };
        return(
            <div>
                <figure className="image is-3by1">
                    <img src={phage2} alt="Phagebiotics: A 2D Survival Shooting Game" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4 has-text-centered">THE <strong>GAME</strong></h3>
                                <p className="is-size-5">The game utilized the exponential growth algorithm to perform the reproduction or replication of bacteria and bacteriophages. This game includes power-ups, which can be used to increase the number of bacteriophages and obtain new types of bacteriophage. Every level have some pop-ups that shows various facts about bacteria.</p><br />
                                <p className="is-size-5">The player must defeat the enemies by firing antibiotic bullets. Since some of the enimies are antibiotic-resistant, the player can summon a specific bacteriophage that will help him in eradicating the antibiotic-resistant bacteria. The game includes tutorial mode for the power-ups, game controls and game trivia about bacteria and bacteriophages.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={phage2} alt="Phagebiotics" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />

                    <div className="container">
                        <div className="columns">
                            <div className="column is-5 is-offset-1">
                                <h3 className="is-size-4 has-text-centered">MAP <strong>EDITOR</strong></h3><br />
                                <p className="is-size-5">I created the tilesets using photoshop and the tilemaps using Tile Map Editor. Creating was a challenge because it was my first time creating tilesets and tilemaps, but with the help of google searching some tutorials and techniques and a lot of failed revisions, I successfully created designs that would suit the game well.</p>
                            </div>
                            <div className="column is-5">
                                <h3 className="is-size-4 has-text-centered">MAP <strong>BACKGROUND</strong></h3><br />
                                <p className="is-size-5">Aside from tilesets and tilemaps, making the background blend with the tileset was also hard. I got the final designs of some levels somehow right after 4 sets of revisions.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-5 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={tilemap} alt="Tiled map" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-5">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={backgrounds} alt="Game level background designs" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br/><br/><br/><br/>

                    <div className="container">
                        <div className="columns">
                            <div className="column is-5 is-offset-1">
                                <h3 className="is-size-4 has-text-centered">ENEMY <strong>EXPLOSION</strong></h3><br />
                                <p className="is-size-5">To make the animation a bit smoother, I made 10 frames for every explosion animation of enemies with a delay of 70.</p>
                            </div>
                            <div className="column is-5">
                                <h3 className="is-size-4 has-text-centered">SMALL <strong>SPRITES</strong></h3><br />
                                <p className="is-size-5">Small sprites like power-ups and enemy fires were created with 4-8 frames from start of the animation until it dissolves.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-5 is-offset-1">
                                <div className="">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={explosion} alt="Explosion sprites" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-5">
                                <div className="">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={smallSprites} alt="Small sprites" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />

                    <div className="container">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4 has-text-centered">THE<strong> PLAYER</strong></h3>
                                <p className="is-size-5">Player sprites already had a base design of ForeignGuyMike from youtube and I just redesigned and added more animations in order to fit the required animation for the game. I changed the colors, added more objects to the player and made the player do more frames.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={playersprites} alt="Player sprites" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />

                    <div className="container">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4 has-text-centered"><strong>TUTORIAL</strong> MODE</h3>
                                <p className="is-size-5">A tutorial mode is also available for beginners and for those who want to receive bonus points. In the tutorial, the player will learn how to move, attack receive and use power-ups. It is not required to do a tutorial but it is essential in learning the mechanics of the game.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={tutorial} alt="Tutorial Mode" />
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

export default Phagebiotics;