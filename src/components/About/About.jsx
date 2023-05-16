import "../About/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container-about">
      <div className="container-h1">
        <h1>Sobre Nosotros</h1>
      </div>
      <Link to="/">
        <button className="btn btn-outline-success">Hogar</button>
      </Link>
      <div className="About">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          animi accusantium voluptate deserunt repudiandae? Rem officia
          doloribus labore suscipit dolorum ea, eos excepturi ipsa consequatur
          perferendis laudantium voluptatum, obcaecati sit. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Asperiores animi accusantium
          voluptate deserunt repudiandae? Rem officia doloribus labore suscipit
          dolorum ea, eos excepturi ipsa consequatur perferendis laudantium
          voluptatum, obcaecati sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores animi accusantium voluptate deserunt
          repudiandae? Rem officia doloribus labore suscipit dolorum ea, eos
          excepturi ipsa consequatur perferendis laudantium voluptatum,
          obcaecati sit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Asperiores animi accusantium voluptate deserunt repudiandae? Rem
          officia doloribus labore suscipit dolorum ea, eos excepturi ipsa
          consequatur perferendis laudantium voluptatum, obcaecati sit.
        </p>
      </div>
    </div>
  );
}
