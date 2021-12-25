import "../styles/about.css";
import { FaGithub } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import foto from "../assets/foto.jpg";

const About = () => (
    <section className="about">
      <h1 className="about__title">
        Acerca de
      </h1>
      <div className="info">
        <div className="info__image">
          <img src={ foto } className="info__image--img" alt="foto"/>
        </div>
        <div className="info__name">
          <h3>Bryan Manzano</h3>
        </div>
        <div className="info__description">
          <p className="info__description--paragraph">
            Estudiando en Make It Real, ampliando mis conocimientos en diversos temas de desarrollo web para ser un Desarrollador FullStack competente.
          </p>
        </div>
        <div className="info__learn">
          <h4>¿Qu&eacute; aprend&iacute; durante el curso?</h4>
          <ul className="info__list">
            <li className="info__list--item">Correcto manejo de Hooks en React</li>
            <li className="info__list--item">HTTP, CORS y autenticaci&oacute;n</li>
            <li className="info__list--item">Testing con Jest y React Testing Library</li>
          </ul>
        </div>
        <div className="info__network">
          <h4 className="info__network--title">
            Contacto
          </h4>
          <div className="info__network--mail">
            <GoMail />
            <a href="mailto:bryanmmr@gmail.com">bryanmmr@gmail.com</a>
          </div>
          <div className="info__network--github">
            <FaGithub />
            <a href="https://github.com/bryanmmr">github.com/bryanmmr</a>
          </div>
        </div>
      </div>
    </section>
)

export default About
