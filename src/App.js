import axios from "axios";
import React, { Component } from "react";
import MudaTela from "../src/components/MudaTela";

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
    inputSearch: "",
    inputMin: "",
    inputMax: Infinity,
    carrinho: [],
    AvisoErro: "",
    AvisoOK: "",
    mostraMenu:false,
  };

  componentDidMount() {
    this.getAllJobs();
    if (localStorage.getItem("carrinho")) {
      this.setState({
        carrinho: JSON.parse(localStorage.getItem("carrinho")),
      });
    }
    // this.verificaCarrinho();
  }

  // verificaCarrinho = async () => {
  //   await this.getAllJobs();
  //   console.log(this.state.allJobs.length)
  //   if (this.state.carrinho.length === 0) {
  //     for (const item of this.state.allJobs) {
  //       console.log("opa");
  //       this.updateJob(item, false);
  //     }
  //   }
  // };

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
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

  getAllJobs = async () => {
    try {
      const response = await axios.get(this.state.baseURL + "/jobs", {
        headers: {
          Authorization: this.state.keyAPI,
        },
      });
      this.setState({
        allJobs: response.data.jobs,
        inputTitle: "",
        inputDescription: "",
        inputPrice: "",
        paymentMethods: [false, false, false, false, false],
        dueDateInput: "",
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
  };

  createJob = async () => {
    if (this.state.inputTitle.trim() !== "") {
      if (this.state.inputDescription.trim() !== "") {
        if (this.state.inputPrice.trim() !== "") {
          if (this.state.paymentMethods.indexOf(true, 0) !== -1) {
            if (
              new Date().toISOString().slice(0, 10) <= this.state.dueDateInput
            ) {
              try {
                let arrayConvertido = [];
                if (this.state.paymentMethods[0] === true) {
                  arrayConvertido.push("Pix");
                }
                if (this.state.paymentMethods[1] === true) {
                  arrayConvertido.push("Debito");
                }
                if (this.state.paymentMethods[2] === true) {
                  arrayConvertido.push("Credito");
                }
                if (this.state.paymentMethods[3] === true) {
                  arrayConvertido.push("Boleto");
                }
                if (this.state.paymentMethods[4] === true) {
                  arrayConvertido.push("PayPal");
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
                this.setState({
                  AvisoOK: "Serviço cadastrado com sucesso! :)",
                  inputTitle: "",
                  inputDescription: "",
                  inputPrice: "",
                  paymentMethods: [false, false, false, false, false],
                  dueDateInput: "",
                });
                await this.getAllJobs();
              } catch (error) {
                console.log(error.message);
              }
            } else {
              this.setState({
                AvisoErro: "Escolha uma data igual ou posterior ao dia atual!",
              });
            }
          } else {
            this.setState({
              AvisoErro: "Escolha uma forma de pagamento!",
            });
          }
        } else {
          this.setState({
            AvisoErro: "Preencha o campo do preço!",
          });
        }
      } else {
        this.setState({
          AvisoErro: "Preecha o campo da descrição!",
        });
      }
    } else {
      this.setState({
        AvisoErro: "Preecha o campo do titulo!",
      });
    }
  };

  deleteJob = async (id) => {
    try {
      await axios.delete(this.state.baseURL + `/jobs/${id}`, {
        headers: {
          Authorization: this.state.keyAPI,
        },
      });
      this.getAllJobs();
    } catch (error) {
      console.log(error.message);
    }
  };

  // updateJob = async (item, troca) => {
  //   try {
  //     const body = {
  //       taken: troca,
  //     };
  //     await axios.post(this.state.baseURL + `/jobs/${item.id}`, body, {
  //       headers: {
  //         Authorization: this.state.keyAPI,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // não estamos usando pois não parece servir para os objetivos pedidos ou explicados pelo enunciado, ao meu entendimento (Paulo)

  ////////// API //////////

  /// Funções onChange ///

  onChangeTitle = (e) => {
    this.setState({
      inputTitle: e.target.value.trim(),
      AvisoErro: "",
      AvisoOK: "",
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      inputDescription: e.target.value.trim(),
      AvisoErro: "",
      AvisoOK: "",
    });
  };
  onChangePrice = (e) => {
    this.setState({ inputPrice: e.target.value, AvisoErro: "", AvisoOK: "" });
  };
  onChangeDate = (e) => {
    this.setState({ dueDateInput: e.target.value, AvisoErro: "", AvisoOK: "" });
  };

  onChangeSearch = (e) => {
    this.setState({ inputSearch: e.target.value });
  };
  onChangeMin = (e) => {
    this.setState({ inputMin: e.target.value });
  };
  onChangeMax = (e) => {
    if (e.target.value !== "") {
      this.setState({ inputMax: e.target.value });
    } else {
      this.setState({ inputMax: Infinity });
    }
  };
  onChangeSelect = (e) => {
    if (e.target.value === "Crescente") {
      this.setState({
        allJobs: this.state.allJobs.sort((a, b) => {
          return a.price - b.price;
        }),
      });
    }
    if (e.target.value === "Decrescente") {
      this.setState({
        allJobs: this.state.allJobs.sort((a, b) => {
          return b.price - a.price;
        }),
      });
    }
    if (e.target.value === "Prazos") {
      this.setState({
        allJobs: this.state.allJobs.sort((a, b) => {
          return (
            new Date(a.dueDate.slice(0, 10)) - new Date(b.dueDate.slice(0, 10))
          );
        }),
      });
    }
    if (e.target.value === "Serviços") {
      this.getAllJobs();
    }
  };

  /// Funções onChange ///

  /// Funções onClick ///

  onClickMostraMenu = () =>{
    this.setState({
      mostraMenu: !this.state.mostraMenu
    })
  }

  onClickPayments = (index) => {
    let array = [...this.state.paymentMethods];
    array[index] = !array[index];
    this.setState({ paymentMethods: array });
  };

  adicionarCarrinho = async (item) => {
    let novoCarrinho = [...this.state.carrinho];
    novoCarrinho.push(item);
    // await this.updateJob(item, true);
    await this.getAllJobs();
    this.setState({ carrinho: novoCarrinho });
  };

  limparCampos = () => {
    this.setState({
      inputSearch: "",
      inputMin: "",
      inputMax: Infinity,
    });
  };

  removerCarrinho = async (itemRemovido) => {
    const novoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id !== itemRemovido.id) {
        return item;
      }
    });
    // await this.updateJob(itemRemovido, false);
    await this.getAllJobs();
    this.setState({
      carrinho: novoCarrinho,
    });
  };

  removerTodoCarrinho = async (comprar) => {
    // for (const item of this.state.carrinho) {
    //   await this.updateJob(item, false);
    // }
    await this.getAllJobs();
    this.setState({
      carrinho: [],
    });
    if (comprar === true) {
      alert("obrigado por comprar");
    }
  };

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
          onChangeSearch={this.onChangeSearch}
          inputSearch={this.state.inputSearch}
          onChangeMin={this.onChangeMin}
          inputMin={this.state.inputMin}
          onChangeMax={this.onChangeMax}
          inputMax={this.state.inputMax}
          onChangeSelect={this.onChangeSelect}
          allJobs={this.state.allJobs}
          adicionarCarrinho={this.adicionarCarrinho}
          carrinho={this.state.carrinho}
          limparCampos={this.limparCampos}
          removerCarrinho={this.removerCarrinho}
          getAllJobs={this.getAllJobs}
          removerTodoCarrinho={this.removerTodoCarrinho}
          AvisoErro={this.state.AvisoErro}
          AvisoOK={this.state.AvisoOK}
          deleteJob={this.deleteJob}
          mostraMenu={this.state.mostraMenu}
          onClickMostraMenu={this.onClickMostraMenu}
        />
      </div>
    );
  }
}
