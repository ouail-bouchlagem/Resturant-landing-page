import "./Testimonial.css";
import pic from "../assets/profile-pic.png";

export default function Testimonial() {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M9.70834 36.6667L12.4167 24.9583L3.33334 17.0833L15.3333 16.0417L20 5L24.6667 16.0417L36.6667 17.0833L27.5833 24.9583L30.2917 36.6667L20 30.4583L9.70834 36.6667Z"
          fill="#FE9E0D"
        />
      </svg>
    );
  }
  return (
    <section className="Testimonial">
      <h6>Testimonial</h6>
      <h1>What They Are Saying</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
      <div className="card">
        <img src={pic} />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="stars">{stars}</div>
        <h2>John Doe</h2>
      </div>
    </section>
  );
}
