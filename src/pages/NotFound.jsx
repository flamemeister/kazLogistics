import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="section not-found container">
      <span className="eyebrow">Great Steppe Logistics</span>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>
        Кажется, вы оказались не там. Проверьте адрес или вернитесь на главную.
      </p>
      <Link className="button" to="/">
        На главную
      </Link>
    </section>
  );
}
