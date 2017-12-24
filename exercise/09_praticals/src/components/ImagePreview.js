
import React, { Component } from 'react';

class ImagePreview extends Component {
  state = {
    img: '',
  };

  onFilesSelected = (e) => {
    const file = e.target.files.item(0);
    const reader = new FileReader();
    reader.addEventListener('load', this.onImagesLoaded);
    reader.readAsDataURL(file);
  }
  onImagesLoaded= (e) => {
    this.setState({
      img: e.target.result,
    });
  }
  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={this.onFilesSelected}
        />
        <br />
        <img src={this.state.img} width="200" />
      </div>
    );
  }
}

export default ImagePreview;
