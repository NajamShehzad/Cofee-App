import React, { Component } from 'react';




class Picture extends Component {
    constructor(props) {
        super()
        // this.state = {}
    }



    render() {
        return (
            <div className="row my-5">
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="img-div d-flex align-items-center justify-content-center">
                        <div>
                            {/* {imgUrls.length >= 1 && <img src={imgUrls[0]} width="230" height="230px" />}
                            {imgUrls.length === 0 && <img src={plusIcon} width="70px" />} */}
                            <input type="file" className="img-upload" onChange={this.handleImg} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="img-div d-flex align-items-center justify-content-center">
                        <div>
                            {/* {imgUrls.length >= 1 && <img src={imgUrls[0]} width="230" height="230px" />}
                            {imgUrls.length === 0 && <img src={plusIcon} width="70px" />} */}
                            <input type="file" className="img-upload" onChange={this.handleImg} />
                        </div>
                    </div>
                </div><div className="col-md-4 col-sm-6 col-12">
                    <div className="img-div d-flex align-items-center justify-content-center">
                        <div>
                            {/* {imgUrls.length >= 1 && <img src={imgUrls[0]} width="230" height="230px" />}
                            {imgUrls.length === 0 && <img src={plusIcon} width="70px" />} */}
                            <input type="file" className="img-upload" onChange={this.handleImg} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Picture;