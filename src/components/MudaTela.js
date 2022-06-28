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
  };

  goHome = () => {
    this.setState({ tela: "Home" });
  };

  goAddSer = () => {
    this.setState({ tela: "AddSer" });
  };
  goContrataSer = () => {
    this.setState({ tela: "ContrataSer" });
  };
  goDetalheSer = () => {
    this.setState({ tela: "DetalheSer" });
  };

  goCarrinho = () => {
    this.setState({ tela: "Carrinho" });
  };

  escolheTela = () => {
    switch (this.state.tela) {
      case "Home":
        return <Home goAddSer={this.goAddSer}  goContrataSer={this.goContrataSer}
        goCarrinho={this.goCarrinho}  goDetalheSer={this.goDetalheSer}/>;
        break;
      case "AddSer":
        return <AddSer goHome={this.goHome}
        goContrataSer={this.props.goContrataSer}
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
        />;
        break;
      case "ContrataSer":
        return <ContrataSer goHome={this.goHome}  goCarrinho={this.goCarrinho}
         goDetalheSer={this.goDetalheSer}/>;
        break;
      case "DetalheSer":
        return <DetalheSer goHome={this.goHome}  goCarrinho={this.goCarrinho}
        goContrataSer={this.goContrataSer} />;
        break;
      case "Carrinho":
        return <Carrinho goContrataSer={this.goContrataSer} goHome={this.goHome} />;
        break;
    }
  };

  render() {
    return <ContainerMudaTela>
        {this.escolheTela()}
    </ContainerMudaTela>;
  }
}
