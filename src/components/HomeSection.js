import React from 'react';
import Avatar from "../assets/images/hero.png";

export default function HomeSection() {
    return (
        <div>
            <div className="container">
                <div className="hero__img">
                    <img src={Avatar} alt="" />
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({})
