import { Component } from 'react';
import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";
import axios from 'axios';

class Vista4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      loading: false,
      responseMessage: null,
      errorMessage: null,
      showModal: false
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
      responseMessage: null,
      errorMessage: null,
      showModal: true
    });

    try {
      const response = await axios.post('http://51.222.143.27:5000/suggest', { prompt: this.state.inputValue }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      this.setState({ responseMessage: response.data, loading: false });
    } catch (error) {
      this.setState({ errorMessage: 'Error submitting form: ' + error.message, loading: false });
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <>
      <div className="min-h-screen">
        <FondoAzul />
        <Navbar_ />
        <section>
          <h1 className="text-white font-bold text-center text-2xl mt-2">Sugerencia de Polímeros</h1>
          <form onSubmit={this.handleSubmit} className="mx-auto max-w-lg mt-5">
            <label htmlFor="input" className="text-white">Escribe lo que desees crear:</label>
            <input 
              type="text"
              name= "input" 
              value={this.state.inputValue} 
              onChange={this.handleInputChange}
              className="mt-4 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            />
            <input 
              type="submit" 
              className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" 
              value="Enviar" 
              disabled={this.state.loading}
            />
          </form>
          {this.state.showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
              <article className="bg-white p-8 rounded w-4/5 max-w-screen-lg mx-4 overflow-auto max-h-screen modal-content">
                {this.state.loading ? (
                  <div className="flex justify-center items-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: this.state.responseMessage }} />
                    <h2 className="ml-2 mt-1 text-red-600 font-extrabold">{this.state.errorMessage}</h2>
                  </>
                )}
                <div className="flex justify-end">
                  <button onClick={this.toggleModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Cerrar</button>
                </div>
              </article>
            </div>
          )}
        </section>
      </div>
    </>
    );
  }
}

export default Vista4;
