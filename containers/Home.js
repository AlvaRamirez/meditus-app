import {
  Actividades,
  Videos,
  Nosotros,
  Contacto,
  Inicio,
  Footer,
} from "components";

const Home = ({ data }) => {
  console.log("data OK", data);

  return (
    <>
      <Inicio />
      <Actividades />
      <Videos />
      <Nosotros />
      <Contacto />
      <Footer />
    </>
  );
};

export default Home;
