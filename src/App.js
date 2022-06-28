import axios from "axios";
import React, { Component } from "react";
import MudaTela from "../src/components/MudaTela"

export default class App extends Component {
  state = {
    keyAPI: "f17d0c39-2a4f-4086-a826-ec2038594148",
    baseURL: "https://labeninjas.herokuapp.com",
    allJobs: [],
  };

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
    try {
      const body = {
        title: "",
        description: "",
        price: "",
        paymentMethods: "",
        dueDate: "",
      };
      await axios.post(this.state.baseURL + "/jobs", body, {
        headers: {
          Authorization: this.state.keyAPI,
        },
      });
    } catch (error) {
      console.log(error.message);
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
  render() {
    return (
      <div>
        <MudaTela/>
      </div>
    );
  }
}
