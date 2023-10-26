import "./main.css";
import vector from "../assets/vector.png";
import plate from "../assets/plate-1.png";

export default function Main() {
  return (
    <main className="Main">
      <div className="text">
        <h1>Your Favourite Food Delivered Hot & Fresh</h1>
        <p>
          Healthy switcher chefs do all the prep work, like peeding, chopping &
          marinating, so you can cook a fresh food.
        </p>
        <button>
          Order Now
          <img src={vector} alt="go" />
        </button>
      </div>
      <img  className="plate" src={plate} alt="go" />
    </main>
  );
}
