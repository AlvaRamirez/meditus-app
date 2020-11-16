import {
  Actividades,
  Videos,
  Nosotros,
  Contacto,
  Inicio,
  Footer,
  Header,
} from "components";

const Home = ({ data }) => {
  console.log("data OK", data);

  return (
    <>
     <Header />
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
