import React, { Component } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
padding-bottom: 1rem;
h1{
font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  color: #737373;
}
`

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <div>
          <div>
            <img src={this.state.image} alt=''/>

    <h1>{this.props.which}</h1>
            <input type="file" name="X_ray" onChange={this.onImageChange} />

          </div>
        </div>
      </Wrapper>
    );
  }
}
export default ImageUpload;
