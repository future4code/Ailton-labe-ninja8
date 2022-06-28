import axios from "axios";
import React, { Component } from "react";
import MudaTela from "../src/components/MudaTela"




export default class App extends Component {
  state = {
    keyAPI: "f17d0c39-2a4f-4086-a826-ec2038594148",
    baseURL: "https://labeninjas.herokuapp.com",
    allJobs: [],
    inputTitle: "",
    inputDescription: "",
    inputPrice: "",
    paymentMethods: [false, false, false, false, false],
    dueDateInput: "",
  };

  componentDidMount() {
    this.gelAllJobs()

  }

  ////////// API //////////

  // createAPIKey = () => {
  //   try {
  //     const body = {
  //       name: "Grupo 08",
  //     };
  //     const response = axios.post(`${this.state.baseURL}/auth`, body);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  gelAllJobs = async () => {
    try {
      const response = await axios.get(this.state.baseURL + "/jobs", {
        headers: {
          Authorization: this.state.keyAPI,
        },
      });
      console.log(response)
      this.setState({
        allJobs: response.data.jobs,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  getJobById = async (id) => {
    try {
      const response = await axios.get(this.state.baseURL + `/jobs/${id}`, {
        headers: {
          Authorization: this.state.keyAPI,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
    // this.setState({})
  };

  createJob = async () => {
    if (this.state.inputTitle.trim() !== '') {
      if (this.state.inputDescription.trim() !== '') {
        if (this.state.inputPrice.trim() !== '') {
          if (this.state.paymentMethods.indexOf(true, 0) !== -1) {
            if (new Date().toISOString().slice(0, 10) <= this.state.dueDateInput) {
              try {
                let arrayConvertido = []
                if (this.state.paymentMethods[0] === true) {
                  arrayConvertido.push('Pix')
                }
                if (this.state.paymentMethods[1] === true) {
                  arrayConvertido.push('Debito')
                }
                if (this.state.paymentMethods[2] === true) {
                  arrayConvertido.push('Credito')
                }
                if (this.state.paymentMethods[3] === true) {
                  arrayConvertido.push('Boleto')
                }
                if (this.state.paymentMethods[4] === true) {
                  arrayConvertido.push('PayPal')
                }

                const body = {
                  title: this.state.inputTitle,
                  description: this.state.inputDescription,
                  price: Number(this.state.inputPrice),
                  paymentMethods: arrayConvertido,
                  dueDate: this.state.dueDateInput,
                };
                await axios.post(this.state.baseURL + "/jobs", body, {
                  headers: {
                    Authorization: this.state.keyAPI,
                  },
                });
                this.gelAllJobs()
                alert('serviço criado com sucesso')
              } catch (error) {
                console.log(error.message);
              }
            } else {
              alert('escolha uma data igual ou posterior ao dia atual')
            }
          } else {
            console.log('escolha uma forma de pagamento')
          }
        } else {
          console.log('preencha o campo do preço')
        }
      } else {
        console.log('preencha o campo da descrição')
      }
    } else {
      console.log('preecha o campo do titulo')
    }

  };

  deleteJob = async (id) => {
    try {
      await axios.delete(this.state.baseURL + `/jobs/${id}`, {
        headers: {
          Authorization: this.state.keyAPI,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  updateJob = async (id) => {
    try {
      const body = {
        taken: true,
      };
      const response = await axios.post(
        this.state.baseURL + `/jobs/${id}`,
        body,
        {
          headers: {
            Authorization: this.state.keyAPI,
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  ////////// API //////////

  /// Funções onChange ///

  onChangeTitle = (e) => {
    this.setState({ inputTitle: e.target.value.trim() })
  }
  onChangeDescription = (e) => {
    this.setState({ inputDescription: e.target.value.trim() })
  }
  onChangePrice = (e) => {
    this.setState({ inputPrice: e.target.value })
  }
  onChangeDate = (e) => {
    this.setState({ dueDateInput: e.target.value })
  }

  /// Funções onChange ///

  /// Funções onClick ///

  onClickPayments = (index) => {
    let array = [...this.state.paymentMethods]
    array[index] = !array[index]
    this.setState({ paymentMethods: array })
  }

  /// Funções onClick ///

  render() {
    return (
      <div>
        
        <MudaTela
          createJob={this.createJob}
          onChangeTitle={this.onChangeTitle}
          onChangeDescription={this.onChangeDescription}
          onChangePrice={this.onChangePrice}
          onChangeDate={this.onChangeDate}
          inputTitle={this.state.inputTitle}
          inputDescription={this.state.inputDescription}
          inputPrice={this.state.inputPrice}
          paymentMethods={this.state.paymentMethods}
          onClickPayments={this.onClickPayments}
        />
      </div>
    );
  }
}
