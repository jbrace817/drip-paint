import Image from "next/image";
import front from "../../../app/assets/home/about/aboutUsFront_m.jpeg";
import back from "../../../app/assets/home/about/aboutUsBack_m.jpeg";
function AboutUs() {
  return (
    <section>
      <header>
        <h2>WHO WE ARE</h2>
        <h3>About us</h3>
      </header>
      <div>
        <Image src={back} alt="Painters at work"></Image>
        <Image src={front} alt="Painters looking at blueprint"></Image>
      </div>
      <div>
        <p>
          With over 50 years of experience, Drip Painting is your trusted
          partner for professional painting services in the Doylestown, PA area.
          Our legacy of excellence is built on a commitment to quality, customer
          satisfaction, and attention to detail. From interior transformations
          to stunning exterior finishes, we bring expertise and passion to every
          project. At Drip Painting, we don’t just paint – we craft spaces that
          feel refreshed, inviting, and uniquely yours. Our seasoned team is
          dedicated to delivering results that exceed expectations, making your
          home look its best, inside and out.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
