import React, { Component } from "react";
import "./index.css";
import firebase from '../../config/firebase';


// const messaging = firebase.messaging();

// messaging.onMessage(payload => {
//   console.log('messagePayload*********',payload);
// });



class NotificationScreen extends Component {
  constructor() {
    super();
    this.state = {
      notificationScr: [],
      friendProfile: null,
    };
    
  }


  componentWillMount() {
    const friend = this.props.friend
    // localStorage.setItem("notif","false");
    firebase.database().ref(`users/${friend.userId}`).on('value',(data =>{
      const friendProfile = data.val().profile.picture.data.url;
      console.log("pictureData",friendProfile)
      this.setState({friendProfile:friendProfile});
    }))
      // this.changeStatus();
    
    
  }

  // changeStatus() {
  //   const {notificationScr,showNOt,firstTime} =this.state;
  //   const th = this;
  //   var userId = localStorage.getItem("meetingAppUserId");
  //   db.collection("meetUps")
  //     .where("meetUPWithId", "==", userId)
  //     // .where("userId", "==", userId)
  //     .onSnapshot(res => {
  //       const chk = localStorage.getItem("notif");
  //       const arr = [];
  //       if(chk == "true"){
  //         // this.state.showNOt =true;
         
  //       this.setState({showNOt:true},() => {
  //         console.log("dddd------------------")
  //       })
  //       }
        
        
  //       res.forEach(res => {
  //   localStorage.setItem("notif","true");

  //         console.log(res.data());
  //         console.log("-----------------------chlgya baiii");
  //         arr.push(res.data());
  //         this.setState({notificationScr:arr});
  //       });
  //     });
  // }
  
  clickOn = () => {
    this.props.changeState();
    // var box = document.querySelector(".bg-modal2");
    // const th = this;
    // // Detect all clicks on the document
    // document.addEventListener("click", function(event) {
    
    // // If user clicks inside the element, do nothing
    // if (event.target.closest(".notifi")) return;
    
    // // If user clicks outside the element, hide it!
    //     // box.classList.add("js-is-hidden");
    //     console.log("clicked");
    //     th.setState({showNOt: false});
    // });
  }
 


  render() {
    const {notificationScr,showNOt} = this.state;
    return (
      <div>


        <div className="bg-modal2" onClick={this.clickOn}>
        <div className="modal-contents2">
      {/* {notificationScr.length &&
      notificationScr.map(res => {
        return( */}
          
        
          <div className="notifi">
            <div>
              <div className="parentNot">
                <div className="lightCir lightCir1">
                  <div className="lightCirb1" />
                </div>
                <div className="lightCir lightCir2">
                  <div className="lightCirb2" />
                </div>
              </div>

              <div className="childNot">
                <div
                  className="lightCir lightCir1"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div
                    className="lightCirb1"
                    style={{ backgroundColor: "transparent" }}
                  >

                    <div className="imgDivNot imgDivNot2" style={{overflow: "hidden"}}>
                        <img src={this.state.friendProfile}style={{
                          width:"150%"
                        }}/>
                  </div>
                  </div>

                </div>
                <div
                  className="lightCir lightCir2"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div
                    className="lightCirb2"
                    style={{ backgroundColor: "transparent" }}
                  >
                <div className="imgDivNot imgDivNot2" style={{overflow: "hidden"}}>
                        <img src={this.props.currentUser.profile.picture.data.url}style={{
                          width:"150%"
                        }}/>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="notiP">{/*res.userData.nickName*/}</p>
            <div className="infoDivNoti">
              <p>Duration : {525}</p>
              <p>Location : {52}</p>
              <p>Time : 18/5/19 - 05:30</p>
            </div>
            <div className="btnDivNoti">
              <button>Direction</button>
              <button>Confirm</button>
            </div>
          </div>
        )
      
    
    {/* })
        
    } */}
    </div>
     </div>
      
      </div>
    );
  }
}

export default NotificationScreen;
