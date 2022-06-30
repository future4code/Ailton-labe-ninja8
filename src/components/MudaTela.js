import React from "react";
import { ContainerMudaTela } from "./styled";
import { AddSer } from "../pages/AddSer";
import { Carrinho } from "../pages/Carrinho";
import { ContrataSer } from "../pages/ContrataSer";
import { DetalheSer } from "../pages/DetalheSer";
import { Home } from "../pages/Home";

export default class MudaTela extends React.Component {
  state = {
    tela: "Home",
    produtoSelecionado: {},
  };

  goHome = () => {
    this.setState({ tela: "Home" });
  };

  goAddSer = () => {
    this.setState({ tela: "AddSer" });
  };
  goContrataSer = async () => {
    await this.props.getAllJobs();
    this.setState({ tela: "ContrataSer" });
  };
  goDetalheSer = (valor) => {
    this.setState({ tela: "DetalheSer", produtoSelecionado: valor });
  };

  goCarrinho = () => {
    this.setState({ tela: "Carrinho" });
  };

  escolheTela = () => {
    switch (this.state.tela) {
      case "Home":
        return (
          <Home
            goAddSer={this.goAddSer}
            goContrataSer={this.goContrataSer}
            goCarrinho={this.goCarrinho}
            goDetalheSer={this.goDetalheSer}
          />
        );
        break;
      case "AddSer":
        return (
          <AddSer
            goHome={this.goHome}
            goContrataSer={this.goContrataSer}
            createJob={this.props.createJob}
            onChangeTitle={this.props.onChangeTitle}
            onChangeDescription={this.props.onChangeDescription}
            onChangePrice={this.props.onChangePrice}
            onChangeDate={this.props.onChangeDate}
            inputTitle={this.props.inputTitle}
            inputDescription={this.props.inputDescription}
            inputPrice={this.props.inputPrice}
            paymentMethods={this.props.paymentMethods}
            onClickPayments={this.props.onClickPayments}
            AvisoErro={this.props.AvisoErro}
            AvisoOK={this.props.AvisoOK}
          />
        );
        break;
      case "ContrataSer":
        return (
          <ContrataSer
            goHome={this.goHome}
            goCarrinho={this.goCarrinho}
            goDetalheSer={this.goDetalheSer}
            allJobs={this.props.allJobs}
            adicionarCarrinho={this.props.adicionarCarrinho}
            onChangeSearch={this.props.onChangeSearch}
            inputSearch={this.props.inputSearch}
            onChangeMin={this.props.onChangeMin}
            inputMin={this.props.inputMin}
            onChangeMax={this.props.onChangeMax}
            inputMax={this.props.inputMax}
            onChangeSelect={this.props.onChangeSelect}
            limparCampos={this.props.limparCampos}
          />
        );
        break;
      case "DetalheSer":
        return (
          <DetalheSer
            allJobs={this.props.allJobs}
            goHome={this.goHome}
            goCarrinho={this.goCarrinho}
            goContrataSer={this.goContrataSer}
            servico={this.state.produtoSelecionado}
            adicionarCarrinho={this.props.adicionarCarrinho}
          />
        );
        break;
      case "Carrinho":
        return (
          <Carrinho
            removerTodoCarrinho={this.props.removerTodoCarrinho}
            removerCarrinho={this.props.removerCarrinho}
            goContrataSer={this.goContrataSer}
            goHome={this.goHome}
            carrinho={this.props.carrinho}
          />
        );
        break;
    }
  };
  render() {
    return <ContainerMudaTela>{this.escolheTela()}</ContainerMudaTela>;
  }
}
