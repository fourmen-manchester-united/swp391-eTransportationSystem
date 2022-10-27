import { Link } from "react-router-dom";
export default function Err() {
  return (
    <section className="fail-page">
      <div className="container">
        <div className="fail-page-content">
          <img src="/images/404.png" alt={404} />
          <p>
            <strong> We are sorry, the page cannot be found</strong>
          </p>
          <p>
            Go to <Link to="/">main page</Link> or use the
            <Link to="/">search toolbar</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
