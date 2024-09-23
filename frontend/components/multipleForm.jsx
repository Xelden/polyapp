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
            errorMessage: null,
            showModal: false,
            polymers: [],
            isLoading: false,
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
        this.setState({ response: null, errorMessage: null, showModal: true });
        const formData = {
            materials: [],
            percentages: []
        };
        const formElements = e.target.elements;

        for (let element of formElements) {
            if (element.name === "material" && element.value.trim() !== "") {
                formData.materials.push(parseInt(element.value, 10));
            }
            if (element.name === "percentage" && element.value.trim() !== "") {
                formData.percentages.push(parseInt(element.value, 10));
            }
        }
        
        if (formData.materials.length < 2 || formData.materials.length > 5 || formData.percentages.length < 2 || formData.percentages.length > 5) {
            this.setState({ errorMessage: "Debe haber entre 2 y 5 materiales y porcentajes deben sumar 100%" });
            return;
        }
        
        const totalPercentage = this.sumPercentages(formData.percentages);
        if (totalPercentage !== 100) {
            this.setState({ errorMessage: "La suma de los porcentajes debe ser igual a 100" });
            return;
        }
        this.setState({ isLoading: true });
        try {
            const response = await axios.post(`${this.apiUrl}/mix`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            this.setState({
                response: response.data,
                errorMessage: null,
                isLoading: false,
            });
            e.target.reset();
        } catch (error) {
            console.error('Error:', error);
            this.setState({ isLoading: false, errorMessage: "Ocurrió un error al procesar la solicitud." });
        }
    }
    
    sumPercentages = (percentages) => {
        return percentages.reduce((total, sum) => total + sum, 0);
    }
        
    render() {
        return (
            <>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 ml-8 mt-2 gap-4 md:w-96 sm:w-56">
                    <button onClick={this.handleAddInput} className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold h-11 py-2 px-4 rounded" disabled={this.state.inputs.length >= 5}>Agregar material</button>
                    <button onClick={this.handleRemoveInput} className="relative bg-red-500 hover:bg-red-700 text-white font-bold h-11 py-2 px-4 rounded" disabled={this.state.inputs.length <= 2}>Quitar material</button>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="w-11/12 ml-8">
                        <div id="dynamicInput">
                            {this.state.inputs.map((input, index) => (
                                <FormInput key={input} isLast={index === this.state.inputs.length - 1} polymers={this.state.polymers} />
                            ))}
                        </div>
                        <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enviar</button>
                    </div>
                </form>
                {this.state.showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
                    <article className="bg-white p-8 rounded w-4/5 max-w-screen-lg mx-4 overflow-auto max-h-screen modal-content">
                        {this.state.isLoading ? (
                            <div className="flex justify-center items-center">
                                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div dangerouslySetInnerHTML={{ __html: this.state.response }} />
                                <h2 className="ml-2 mt-1 text-red-600 font-extrabold">{this.state.errorMessage}</h2>
                            </>
                        )}
                        <div className="flex justify-end">
                            <button onClick={this.toggleModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Cerrar</button>
                        </div>
                    </article>
                </div>
            )}
            </>
        );
    }
}

function FormInput({ isLast, polymers }) {
    return (
        <>
            <div className="relative mt-2 ml-3 flex flex-wrap">  
                <div className="flex items-center rounded-md shadow-sm gap-3 w-full">
                    <div className="grid grid-flow-col-3 md:grid-flow-row">
                        <label htmlFor="material" className="text-sm font-semibold leading-6 text-neutral-400">
                        Selecciona un material
                        </label>
                        <select
                        name="material"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight mr-4"
                        >
                        <option value="">Selecciona un material</option>
                        {polymers.map(([value, label]) => (
                            <option key={value} value={value}>
                            {label}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="grid-flow-col-3 ml-2">
                        <label htmlFor="percentage" className="text-sm font-semibold leading-6 text-neutral-400">
                        Inserta un porcentage
                        </label>
                        <input
                        type="number"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mr-4"
                        name="percentage"
                        placeholder="Inserta un porcentage"
                        />
                    </div>
                </div>
            </div>
            <span>{isLast ? null : <img src={plus} className=" w-7" alt="Polimer plus" />}</span>
        </>
    );
}

FormInput.propTypes = {
    isLast: PropTypes.bool.isRequired,
    polymers: PropTypes.array.isRequired
};

export default MultipleChoice;