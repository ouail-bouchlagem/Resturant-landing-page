import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="icon">{props.icon}</div>
      <h3 className="title">{props.title}</h3>
      <p className="discription">{props.discription}</p>
    </div>
  );
}
