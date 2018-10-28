import React, { Component } from 'react';




class Picture extends Component {
    constructor(props) {
        super()
        this.state = {
            imageUrl: []
        }
    }

    pickImage(image, no) {
        const { imageUrl } = this.state;
        let reader = new FileReader();
        console.log(image.target.files[0]);

        if (image.target.files[0]) {
            reader.readAsDataURL(image.target.files[0]);
            reader.onload = (e) => {
                let image64 = e.target.result;
                imageUrl[no] = image64;
                this.setState({ imageUrl })
            };
        }
    }

    render() {
        const { imageUrl } = this.state;
        const { SubmitInfo } = this.props;
        return (

            <form onSubmit={(e) => { e.preventDefault(); SubmitInfo(this.state) }}>
                <div className="row my-5">
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="img-div d-flex align-items-center justify-content-center">
                            <div>
                                {imageUrl[0] && <img src={imageUrl[0]} width="230" height="230px" />}
                                {/* {imageUrl.length === 0 && <img src={plusIcon} width="70px" />} */}
                                <input type="file" className="img-upload" onChange={(e) => this.pickImage(e, 0)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="img-div d-flex align-items-center justify-content-center">
                            <div>
                                {imageUrl[1] && <img src={imageUrl[1]} width="230" height="230px" />}
                                {/* {imageUrl.length === 0 && <img src={plusIcon} width="70px" />} */}
                                <input type="file" className="img-upload" onChange={(e) => this.pickImage(e, 1)} />
                            </div>
                        </div>
                    </div><div className="col-md-4 col-sm-6 col-12">
                        <div className="img-div d-flex align-items-center justify-content-center">
                            <div>
                                {imageUrl[2] && <img src={imageUrl[2]} width="230" height="230px" />}
                                {/* {imageUrl.length === 0 && <img src={plusIcon} width="70px" />} */}
                                <input type="file" className="img-upload" onChange={(e) => this.pickImage(e, 2)} />
                            </div>
                        </div>
                    </div>
                </div >
                <div>
                    <button>
                        Next
                    </button>
                </div>
            </form>
        )
    }
}
export default Picture;