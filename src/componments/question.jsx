import "./question.css";

export default function question() {
  return (
    <section className="question">
      <h1>Have Question In Mind? Let Us Help You</h1>
      <form>
        <input type="text" placeholder="yourmail@gmail.com" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
