import "./About.css";

const About = () => {
  return (
    <main className="about">
      About
      <section className="a-left">
        <div className="a_left-card"></div>
        <div className="a_left-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className
          />
        </div>
      </section>
      <section className="a-right"></section>
    </main>
  );
};

export default About;
