import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";

const About = () => {
  return (
    <>
        <FondoAzul />
        <Navbar_ />
        <div className="flex flex-col md:flex-row justify-center md:gap-20">
            <div className="mt-8 bg-white p-6 flex flex-col md:h-96 shadow-lg relative pt-16 rounded-lg mb-8 md:mb-0">
                <h1 className="text-2xl font-bold text-center text-blue-400 mb-4">Hecho por:</h1>
                <ul className="list-disc list-inside">
                    <li>Andrés Juan Ramírez Torrez</li>
                    <li>Andrés Felipe Pico Zuñiga</li>
                    <li>Carlos Alberto Salcedo Rodríguez</li>
                    <li>Iván Jafet Olivella Rodríguez</li>
                    <li>Sahir Francisco Segura Serrano</li>
                </ul>
            </div>
            <div className="mt-8 bg-white p-6 flex flex-col md:h-96 shadow-lg relative pt-16 rounded-lg w-full md:w-96">
                <h1 className="text-2xl font-bold text-center text-blue-400 mb-4">Cliente:</h1>
                <ul className="list-disc list-inside">
                    <li>Mary Judith Arias Tapia</li>
                    <li>Universidad Tecnológica de Bolívar</li>
                    <li>Programa de Ingeniería Química</li>
                    <li>Semillero de Investigación en Polímeros y Compuestos - SIPYC</li>
                </ul>
            </div>
        </div>
    </>
  );
};

export default About;

