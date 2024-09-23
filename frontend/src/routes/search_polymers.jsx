import { Component } from 'react';
import axios from 'axios';
import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";
import Search from "../../components/search";


class Vista5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null, // Datos del acordeón
      polymers: [], // Almacenar los polímeros aquí
      openIndex: null,
      subOpenIndex: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const [responseTypes, responsePolymers2, responsePolymers4, responsePolymersAll] = await Promise.all([
        axios.get(`http://51.222.143.27:5000/types-from-type_id:2`, {
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        axios.get(`http://51.222.143.27:5000/polymers-from-type_id:2`, {
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        axios.get(`http://51.222.143.27:5000/polymers-from-type_id:4`, {
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        axios.get(`http://51.222.143.27:5000/all-polymers`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      ]);

      const data = {
        name: "Comportamiento con la temperatura",
        subItems: [
          {
            id: responseTypes.data[0][0],
            name: responseTypes.data[0][1],
            polymers: responsePolymers2.data
          },
          {
            id: responseTypes.data[1][0],
            name: responseTypes.data[1][1],
            polymers: responsePolymers4.data
          }
        ]
      };

      this.setState({ data, polymers: responsePolymersAll.data });
    } catch (error) {
      this.setState({ error: 'Error fetching data' });
      console.error('Error fetching data:', error);
    }
  };

  
  toggleAccordion = (index) => {
    this.setState({ openIndex: this.state.openIndex === index ? null : index });
  };

  toggleSubAccordion = (index) => {
    this.setState({ subOpenIndex: this.state.subOpenIndex === index ? null : index });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };


  render() {
    const {data,openIndex, subOpenIndex} = this.state;

    return (
      <>
      <div className="min-h-screen">
        <FondoAzul />
        <Navbar_ />
        <section>
          <Search/>
          {data ? (
            <div className="text-white mt-4">
              <div key={data.name} className="mb-4">
                <div
                  className="flex justify-between items-center bg-gray-800 text-white p-4 cursor-pointer"
                  onClick={() => this.toggleAccordion(data.name)}
                >
                  <h3 className="text-lg font-semibold">{data.name}</h3>
                  <svg
                    className={`w-6 h-6 transform ${openIndex === data.name ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === data.name && (
                  <div className="bg-gray-700 text-white p-4">
                    {data.subItems.map((subItem, index) => (
                      <div key={subItem.id} className="mb-2">
                        <div
                          className="flex justify-between items-center bg-gray-800 text-white p-2 cursor-pointer"
                          onClick={() => this.toggleSubAccordion(index)}
                        >
                          <h4 className="text-md font-semibold">{subItem.name}</h4>
                          <svg
                            className={`w-5 h-5 transform ${subOpenIndex === index ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {subOpenIndex === index && (
                          <div className="bg-gray-700 text-white p-4">
                            {subItem.polymers ? (
                              <div className="text-white">
                                {subItem.polymers.map((polymer, polymerIndex) => (
                                  <div key={polymerIndex} className="mb-2">
                                    <div className="flex justify-between items-center bg-gray-800 text-white p-2">
                                      <h4 className="text-md font-semibold">{polymer[1]}</h4>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p>Loading...</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent border-white align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                  </div>
                </div>
          )}
        </section>
      </div>
      </>
    );
  }
}

export default Vista5;
