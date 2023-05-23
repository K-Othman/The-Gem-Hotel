import github from "../../../public/assets/imgs/github.png";
import linkedin from "../../../public/assets/imgs/linkedin.png";

export default function Footer() {
  return (
    <section className="bg-main-color flex flex-col justify-center items-center py-7">
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
