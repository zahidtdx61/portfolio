import Skill from "./Skill";
import cppImage from "/c++.png";
import cssImage from "/css.png";
import expressImage from "/express.png";
import firebaseImage from "/firebase.png";
import gitImage from "/git.png";
import htmlImage from "/html.png";
import javascriptImage from "/javascript.jpg";
import mongodbImage from "/Mongodb.png";
import mysqlImage from "/mysql.png";
import nodejsImage from "/nodejs.png";
import postgresqlImage from "/postgresql.png";
import pythonImage from "/python.png";
import reactImage from "/react.png";
import reduxImage from "/redux.png";
import tailwindcssImage from "/tailwindcss.jpg";
import typescriptImage from "/typescript.png";

const techStackImages = [
  cppImage,
  pythonImage,
  htmlImage,
  cssImage,
  tailwindcssImage,
  javascriptImage,
  nodejsImage,
  expressImage,
  typescriptImage,
  reactImage,
  reduxImage,
  mongodbImage,
  mysqlImage,
  postgresqlImage,
  firebaseImage,
  gitImage,
];

const Skills = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4  mt-16">
      <div className="flex flex-wrap justify-between gap-1 mt-4">
        {techStackImages.map((image, index) => {
          return <Skill key={index} image={image} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
