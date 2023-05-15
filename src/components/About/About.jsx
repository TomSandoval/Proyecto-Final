import "../About/About.css";
import image from "../../assets/home-regular-24.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container-about">
      <Link to="/">
        <button className="btn btn-outline-success">Home</button>
      </Link>
      {/* <Link className={`Detail/${params?.id}`}>
        <button>Back</button>
      </Link> */}
      <h1>About Us</h1>
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
