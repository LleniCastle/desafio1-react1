import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './complements/Card';
import Header from './complements/Header';//revisar
import Footer from './complements/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Header title="Adopta un perrito" />
        <div className="galery">
          <MyCard
            className="Card"
            image="https://media.licdn.com/dms/image/D4E12AQFyOLRHZUsUxg/article-cover_image-shrink_600_2000/0/1667655319602?e=1696464000&v=beta&t=n0gz4yiy6Pb3fdteNWX-Vzv69GOGl05r_vFDTGzlTPg"
            name="Bartolo"
            text="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
            bg="success"
            title="Husky"
          />
          <MyCard
            className="Card"
            image="https://images.hola.com/imagenes/estar-bien/20210525190156/razas-de-perro-grandes-bobtail/0-955-947/bobtail-6a-a.jpg"
            name="Messi"
            text="Es juguetón, amigble y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
            bg="primary"
            title="Bobtail"
          />
          <MyCard
            className="Card"
            image="https://www.bunko.pet/__export/1644190971658/sites/debate/img/2021/04/15/shar_pei_raza_crop1618510758992.jpeg_1758632412.jpeg"
            name="Gohan"
            text="Un perro de tamaño mediano con un corzón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
            bg="danger"
            title="Shar Pei"
          />
          <MyCard
            className="Card"
            image="https://images.hola.com/imagenes/estar-bien/20180523124493/el-beagle-es-la-raza-ideal-para-todas-las-casas/0-569-463/beagle-t.jpg"
            name="Princesa"
            text="Es una compañera leal y cariñosa que adora los mimos y abrazos. ¡Ayuda a princesa a encontrar su final feliz! "
            bg="warning"
            title="Beagle"
          />
        </div>
        <Footer title="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros 
      con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta a un perro 
      y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
      </div>
    </>
  );
}
export default App;