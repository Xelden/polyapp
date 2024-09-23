import Navbar_ from "../../components/nbar";
import logo from '../assets/Bg.png'; // Importa la imagen aquí


export default function Vista1() {
  return (
    <section className="contenido-principal bg-b min-h-dvh" style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Navbar_ />

      <div className="container w-full mx-auto min-h-[calc(100dvh_-_80px)] p-5">
        <h1 className=" text-center font-bold text-4xl mt-8 text-white " >Herramienta Virtual Para Mezcla De Polímeros</h1>
        <div className="w-full flex flex-col md:flex-row gap-20 mt-20 justify-center py-10">

          <a href="/mix_polymers">
            <div className="bg-white p-6 flex flex-col gap-4 h-96 shadow-lg relative pt-16 rounded-lg">
              <div className="size-24 absolute right-1/2 translate-x-1/2 top-[-48px] p-2 rounded-full bg-white shadow-md shadow-sky-700">
                <img src={"/flask.png"} alt="" className="p-1" />
              </div>
              <h3 className="text-4xl font-weight text-center text-blue-400 font-bold ">Mezcla de Polímeros</h3>
              <p>Un espacio donde puedas mezclar polímeros con los materiales que tengas a tu disposición.</p>
            </div>
          </a>

          <a href="/search_polymers">
            <div className="bg-white p-6 flex flex-col gap-4 h-96 shadow-lg relative pt-16 rounded-lg">
              <div className="size-24 absolute right-1/2 translate-x-1/2 top-[-48px] p-2 rounded-full bg-white shadow-md shadow-sky-700">
                <img src={"/glass.png"} alt="" className="p-1" />
              </div>
              <h3 className="text-4xl font-weight text-center text-blue-400 font-bold ">Busqueda de Polímeros</h3>
              <p>Espacio donde puedes encontrar información sobre los polímeros que deseas utilizar en tus experimentos.</p>
            </div>
          </a>

          <a href="/suggest_polymers">
            <div className="bg-white p-6 flex flex-col gap-4 h-96 shadow-lg relative pt-16 rounded-lg">
              <div className="size-24 absolute right-1/2 translate-x-1/2 top-[-48px] p-2 rounded-full bg-white shadow-md shadow-sky-700">
                <img src={"/right.png"} alt="" className="p-1" />
              </div>
              <h3 className="text-4xl font-weight text-center text-blue-400 font-bold ">Sugerencia de Polímeros</h3>
              <p>Espacio donde puedes recibir sugerencias para la creación de mezclas según tus necesidades.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}