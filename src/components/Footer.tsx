import github from "../../imgs/github.png";
import linkedin from "../../imgs/linkedin.png";
export default function Footer() {
  return (
    <section className="bg-main-color flex flex-col justify-center items-center h-60">
      <article>
        <h2>Made With Love By Karim</h2>
      </article>
      <article className="flex gap-2">
        <a href="https://github.com/K-Othman" target="_blank" rel="noreferrer">
          <img src={github} alt="github" className="w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/karim-abdelghany-7608b8ba/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="github" className="w-5" />
        </a>
      </article>
    </section>
  );
}
