import heropng from "../images/herogroupImg.png";
const Hero = () => {
  return (
    <section className="hero">
      <img src={heropng} alt="air bnb group" className="heropng"/>
     
      <h1 className="hero--header">Online Experience</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
