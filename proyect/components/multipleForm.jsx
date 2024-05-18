import { Component } from "react";
import plus from '../src/assets/plus.svg';
import PropTypes from 'prop-types';
import axios from 'axios';

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputs: ['input-0', 'input-1'],
            response: null,
            errorMessage: null, // Estado para almacenar el mensaje de error
            showModal: false,
            polymers: [] // Estado para almacenar los polímeros obtenidos de la API
        };
        this.apiUrl = 'http://51.222.143.27:5000';
    }

    componentDidMount() {
        this.fetchPolymers();
    }

    fetchPolymers = async () => {
        try {
            const response = await axios.get(`${this.apiUrl}/all-polymers`);
            this.setState({ polymers: response.data });
        } catch (error) {
            console.error('Error fetching polymers:', error);
        }
    }

    render() {
        return (
            <>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 ml-8 mt-2 gap-4 md:w-80 sm:w-56 ">
                    <button onClick={this.handleAddInput} className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold h-11 py-2 px-4 rounded" disabled={this.state.inputs.length >= 5}>Add Input</button>
                    <button onClick={this.handleRemoveInput} className="relative bg-red-500 hover:bg-red-700 text-white font-bold h-11 py-2 px-4 rounded" disabled={this.state.inputs.length <= 2}>Remove Input</button>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="w-11/12 ml-8">
                        <div id="dynamicInput">
                            {this.state.inputs.map((input, index) => (
                                <FormInput key={input} isLast={index === this.state.inputs.length - 1} polymers={this.state.polymers} />
                            ))}
                        </div>
                        <button type="submit" onClick={this.toggleModal} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
                    </div>
                </form>
                {this.state.response && (
                    <p className="ml-8 mt-2 text-green-600">{this.state.response}</p>
                )}
                {this.state.errorMessage && (
                    <p className="ml-8 mt-2 text-red-600">{this.state.errorMessage}</p>
                )}
            </>
        );
    }

    toggleModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    }

    handleAddInput = () => {
        if (this.state.inputs.length < 5) {
            this.appendInputs(1);
        }
    }

    handleRemoveInput = () => {
        if (this.state.inputs.length > 2) {
            this.removeInputs(1);
        }
    }

    appendInputs(count) {
        const newInputs = Array.from({ length: count }, (_, i) => `input-${this.state.inputs.length + i}`);
        this.setState(prevState => ({ inputs: prevState.inputs.concat(newInputs) }));
    }

    removeInputs(count) {
        this.setState(prevState => ({ inputs: prevState.inputs.slice(0, -count) }));
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        // Limpiar el estado al inicio del submit
        this.setState({
            response: null,
            errorMessage: null
        });

        const formData = {
            materials: [],
            percentages: []
        };
        const formElements = e.target.elements;

        // Itera sobre los elementos del formulario
        for (let element of formElements) {
            // Verifica si el elemento tiene el nombre "material" y agrega su valor al array materials
            if (element.name === "material" && element.value.trim() !== "") {
                formData.materials.push(parseInt(element.value, 10));
            }
            // Verifica si el elemento tiene el nombre "percentage" y agrega su valor al array percentages
            if (element.name === "percentage" && element.value.trim() !== "") {
                formData.percentages.push(parseInt(element.value, 10));
            }
        }

        // Verifica si hay al menos 2 materiales y 2 porcentajes
        if (formData.materials.length < 2 || formData.materials.length > 5 || formData.percentages.length < 2 || formData.percentages.length > 5) {
            this.setState({ errorMessage: "Debe haber entre 2 y 5 materiales y porcentajes" });
            return;
        }

        const totalPercentage = this.sumPercentages(formData.percentages);
        if (totalPercentage !== 100) {
            this.setState({ errorMessage: "La suma de los porcentajes debe ser igual a 100" });
            return;
        }

        // Si todo está bien, envía la solicitud POST
        try {
            const response = await axios.post(`${this.apiUrl}/mix`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            this.setState({
                response: response.data,
                errorMessage: null, // Limpia cualquier mensaje de error anterior
                redirectTo: "/mix_polymers/response" // Redirecciona a la URL deseada
            });
            e.target.reset();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    sumPercentages = (percentages) => {
        //funcion que suma los valores dentro del array de la key percentages del objeto formData
        return percentages.reduce((total, sum) => total + sum, 0);
    }
}

function FormInput({ isLast, polymers }) {
    return (
        <>
            <div className="relative mt-2 ml-3 grid grid-cols-2  lg:grid-cols-5">
                <div className="flex items-center rounded-md shadow-sm gap-3 ">
                    <div className="grid grid-flow-col-3 md:grid-flow-row ">
                        <label htmlFor="material" className="text-sm font-semibold leading-6 text-neutral-400 ">Insert material</label>
                        <select name="material" className="appearance-none block w-full md:w-72 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight">
                            <option value="">Selecciona un material</option>
                            {polymers.map(([value, label]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid-flow-col-3 ml-2">
                        <label htmlFor="percentage" className="text-sm font-semibold leading-6  text-neutral-400">Insert percentage</label>
                        <input type="number" className="appearance-none block w-full md:w-44  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="percentage" placeholder="Insert percentage" />
                    </div>
                </div>
            </div>
            <span>{isLast ? null : <img src={plus} className="w-9" alt="Polimer plus" />}</span>
        </>
    );
}

FormInput.propTypes = {
    isLast: PropTypes.bool.isRequired,
    polymers: PropTypes.array.isRequired // Validate that polymers is an array
};

export default MultipleChoice;
