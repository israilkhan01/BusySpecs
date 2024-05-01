// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <div className="rest">

        <div className="profileDetailsEdit">
          <div className="profileDetailHeader">
              <div className="welcome">
                        <h2 className="welcome-text">Welcome Back, Azhar !  <i
                            className="fas fa-laugh text-[rgb(104, 5, 5)]"></i></h2>
            <span className="WelcomeDescription">
                Thanx For Joining Our Community which will help the millions of Developer/Designers  acrooss the World.. 
            </span>
              </div>
              <div className="profilesvg">
                {/* <!-- <img src="./Images/ProfileHead.svg" alt="" srcset=""> --> */}
              </div>
          </div>
          <div className="DetailSection">
              <div className="insideDetailSection">
                 <div className="completionHeader">
                    <div className="xxz"><h3>Profile Completion <span className="text-[#5f4ea6]">70%</span></h3>
                        {/* <!-- <div>70%</div> --> */}
                    </div>
                    <div><i className="fas fa-info-circle"></i></div>

                 </div>
                  <div className="completion">
                      <div className="completionSlider"></div>
                  </div>
                <div className="editbuttonContainer">
                    <table className="w-[80%]">
                   
                  
                        <tr>
                          <td>Name</td>
                          <td className="particularDetail">Azhar Ahmed</td>
                        
                        </tr>
                        <tr>
                            <td>Bio</td>
                            <td className="particularDetail">Dream For Success and Also Work for It.</td>
                        </tr>
                        <tr>
                            <td>Prefrences</td>
                            <td className="prefrences particularDetail" >
                                <div>Navs</div>
                                <div>Footers</div>
                                <div>Cards</div>
                                <div>Corusal</div>
                                <div>Grids </div>
                            </td>
                        </tr>
                        <tr>
                          <td>Email Address</td>
                          <td className="particularDetail">Azhar@gmail.com</td>
                        </tr>
                        <tr>
                            <td>DOB</td>
                            <td className="particularDetail">26 June 1998</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td className="particularDetail"><input type="text" value="Male" /></td>
                        </tr>
                      </table>
                     
                      <div className="editButton">
                          <div className="Edit">Edit <i className="fas fa-user-edit"></i></div>
                      </div>

                </div>

                <div className="SaveChanges">
                    <button className="saved">Save Changes</button>
                </div>
              </div>
          </div>
          <div className="UserFavWebs">
              <div className="web1 fav">
                  <h1><i className="fas fa-award"></i></h1>
                  <div className="wf" >https://www.awwwards.com/</div >

              </div>
              <div  className="web2 fav">
                  <h1><i className="fas fa-award"></i></h1>
                  <div className="wf" >https://www.awwwards.com/</div >

              </div>
              <div className="web3 fav">
                  <h1><i className="fas fa-award"></i></h1>
                  <div className="wf">https://www.awwwards.com/</div >

              </div>
          </div>

          {/* <!-- <div className="div" style="background: brown; height: 400px ; width: 100%; position: relative;" >

        </div> -->

        </div>
        <!-- <div></div> --> */}

            </div>
            </div>
    )
  }