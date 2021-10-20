import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <main className="intro">
      <section className="i-left">
        left
        <div className="i_left--wrapper">
          <h2 className="i_left_wrapper--intro">Hello, My name is</h2>
          <h1 className="i_left_wrapper--name">Gurol Bilgin</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">HTML CSS / SASS</div>
              <div className="i-title-item">JavaScript</div>
              <div className="i-title-item">ReactJS</div>
              <div className="i-title-item">Django</div>
            </div>
          </div>
        </div>
      </section>
      <section className="i-right">right</section>
    </main>
  );
};

export default Intro;
