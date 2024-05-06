import React from "react";
import "./styles/layout.css";
import Link from "next/link";
function SideBar() {
  return (
    <div className="profile-container">
      <div className="userProfile">
        <div className="profileImageCont">
          <div className="profileImg">
            <img
              className="w-[210px] h-56"
              src="/images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="userName">Azhar Ahmed</div>
          <div className="userLikesTempCounts">
            <div className="totalLikes">
              <i className="fas fa-heart"></i> 3.1k
            </div>
            <div className="totalTemplates">
              <i className="fas fa-file-code"></i> 100
            </div>
            <div className="savesTemplateCouts">
              <i className="fas fa-bookmark"></i> 67
            </div>
          </div>

          <div className="userProfileLinks">
            <div className="k Profile">
              <Link href={"/dashboard"}>
                <div className="a">
                  <i className="fas fa-user mr-2"></i>
                  Profile
                </div>
              </Link>
            </div>
            <div className="k UploadTemplate">
                <Link href={"/dashboard/upload-template"}>
              <div className="a">
                <i className="fas fa-upload"></i> Upload Template
                              </div>
                              </Link>
            </div>
            <div className="k UploadedTemplate">
              <div className="a">
                <i className="fas fa-file-code"></i> My Templates
              </div>
            </div>
            <div className="k SavedTemplates">
              <div className="a">
                <i className="fas fa-bookmark"></i> Saved Templates
              </div>
            </div>
          </div>
        </div>

        <div className="kb AccountSettings">
          <div className="a">
            <i className="fas fa-cog"></i> Account Settings
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
