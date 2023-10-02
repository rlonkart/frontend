import React from "react";
import { Button } from "./Components/Button";
import { LogoWordmark } from "./Components/LogoWordmark";
import { TheLargest } from "./Components/TheLargest";
import "./style.css";

function Landing () {
    return (
        <div className="landing">
            <div className="div">
                <div className="navigation-c">
                    <LogoWordmark className="logo-wordmark-instance" />
                    <Button className="sign-up-button" divClassName="button-instance" text="Sign Up" />
                    <Button className="log-in-button" divClassName="button-instance" text="Log In" />
                </div>
                <div className="hero-e">
                    <div className="overlap-group">
                        <TheLargest
                            className="the-largest-community-of-photo-enthusiasts"
                            divClassName="the-largest-instance"
                            text="SOS &amp; Outdoor Adventure Tracking"
                        />
                        <p className="p">insert device photo/conceptual image here</p>
                    </div>
                </div>
                <div className="body-b">
                    <p className="text-wrapper-2">Never be restricted by cell service again!</p>
                    <div className="text-wrapper-3">Emergency SOS</div>
                    <p className="text-wrapper-4">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                    </p>
                    <div className="text-wrapper-5">Activity Tracking</div>
                    <p className="text-wrapper-6">
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                    <div className="text-wrapper-7">Ruggedized Design</div>
                    <p className="text-wrapper-8">
                        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </p>
                    <div className="text-wrapper-9">Simple Useability</div>
                    <p className="text-wrapper-10">
                        Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Landing;