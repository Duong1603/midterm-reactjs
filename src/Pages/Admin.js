import React, { Component } from "react";
import axios from "axios";
import "../css/Admin.css";

// import { API, News } from "./../consert/MockAPI";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      images: "",
      size: "",
      decription: "",
      action: "ADD ITEM", //default ADD ITEM
      items: []
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeImages = this.changeImages.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changeDecription = this.changeDecription.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios
      .get(`https://61bc10c1d8542f0017824533.mockapi.io/updatenew`)
      .then((res) => {
        const items = res.data;
        this.setState({ items });
      });
  }
  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };
  changeSize = (e) => {
    this.setState({
      size: e.target.value
    });
  };
  changeDecription = (e) => {
    this.setState({
      decription: e.target.value
    });
  };
  changeImages = (e) => {
    this.setState({
      images: e.target.value
    });
  };

  addItem = () => {
    if (this.state.title !== "" && this.state.images !== "") {
      axios({
        method: "POST",
        url: `https://61bc10c1d8542f0017824533.mockapi.io/updatenew/`,
        data: {
          title: this.state.title,
          images: this.state.images,
          size: this.state.size,
          decription: this.state.decription
        }
      }).then((res) => {
        this.componentDidMount();
        this.setState({
          title: "",
          images: "",
          size: "",
          decription: ""
        });
      });
    }
  };

  Edit = (item, index) => {
    this.setState({
      action: "UPDATE ITEM",
      title: item.title,
      images: item.images,
      size: item.size,
      decription: item.decription,
      index: index,
      id: item.id
    });
  };
  updateItem = () => {
    axios({
      method: "PUT",
      url: `https://61bc10c1d8542f0017824533.mockapi.io/updatenew/${this.state.id}`,
      data: {
        title: this.state.title,
        images: this.state.images,
        size: this.state.size,
        decription: this.state.decription
      }
    }).then((res) => {
      this.componentDidMount();
    });
    this.setState({
      title: "",
      images: "",
      size: "",
      decription: "",
      action: "ADD_ITEM"
    });
  };

  deleteItem = (item) => {
    axios
      .delete(`https://61bc10c1d8542f0017824533.mockapi.io/updatenew/${item}`)
      .then((res) => {
        this.componentDidMount();
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>{this.state.action}</h1>
            <div className="form-group">
              <label>TITLE</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeTitle}
                value={this.state.title}
              />
            </div>
            <div className="form-group">
              <label>IMAGES</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeImages}
                value={this.state.images}
              />
            </div>
            <div className="form-group">
              <label>SIZE</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeSize}
                value={this.state.size}
              />
            </div>
            <div className="form-group">
              <label>DECRIPTION</label>
              <textarea
                type="text"
                name=""
                rows="2"
                cols="20"
                className="form-control"
                onChange={this.changeDecription}
                value={this.state.decription}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={
                  this.state.action === "ADD ITEM"
                    ? this.addItem
                    : this.updateItem
                }
              >
                SUBMIT
              </button>
            </div>
          </div>

          <div className="col-md-8">
            <h1>List News</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Title</th>
                  <th>Images</th>
                  <th>Decription</th>
                  <th>Edit</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.images} />
                    </td>
                    <td>{item.decription}</td>
                    <td>
                      <button
                        className="badge badge-warning"
                        onClick={() => this.Edit(item, index)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="badge badge-danger"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
