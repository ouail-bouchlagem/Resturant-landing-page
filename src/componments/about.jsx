import "./about.css";
import plate from "../assets/plate-2.png";
import btn from "../assets/btn.png";

export default function Main() {
  return (
    <section className="About">
      <div className="blob">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="331"
          height="1052"
          viewBox="0 0 331 1052"
          fill="none"
        >
          <path
            d="M0 0L39.2914 15.857L57.9146 26.573C77.9911 38.1252 96.8362 51.6961 114.157 67.0748C132.457 83.3227 148.952 101.496 163.355 121.281L190.504 158.57L217.095 208.407C223.833 219.567 229.741 231.207 234.772 243.234L244.083 265.492L261.546 299.471L280.596 348.854L292.899 392.348L303.218 436.295L313.537 469.821L313.946 471.677C325.282 523.144 331 575.69 331 628.391C331 647.966 328.888 667.485 324.7 686.607L322.269 697.709L313.537 733.047L303.218 761.137L301.622 768.144C295.818 793.63 287.843 818.572 277.785 842.698L266.784 869.084C263.299 877.444 259.053 885.466 254.1 893.048C247.447 903.231 239.563 912.554 230.627 920.805L217.095 933.299L190.504 957.311L188.037 959.413C169.873 974.896 150.378 988.746 129.781 1000.8C109.992 1012.55 89.0125 1022.16 67.1939 1029.48L0 1052V511.502V0Z"
            fill="#FE9E0D"
          />
        </svg>
      </div>
      <img className="plate" src={plate} alt="go" />
      <div className="text">
        <h6>About</h6>
        <h1>Food Is An Important Part Of A Balanced Diet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p>
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="buttons">
          <div className="btn-1">
            <button>Learn More</button>
          </div>
          <div className="btn-2">
            <img src={btn} />
            Watch Video
          </div>
        </div>
      </div>
    </section>
  );
}
