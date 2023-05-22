import { Link } from "react-router-dom";

export function Error404({ msg = "404 Page not found" }) {
  return (
    <section className="absolute h-[100vh] top-0 bg-[#34383C] w-[100%]">
      <div className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[300px] p-5">
        <h2> {msg} </h2>
        <p>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>
        <Link to="/">Back To Our Site</Link>
      </div>
    </section>
  );
}
