import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putUpdateProfile } from "../../store/actions/user.action";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
import { storeImageToFireBase } from "../../utils/storeImageToFirebase.";
import Load from "../Load";
export function ModalUploadAvatar({ users, reload, setReload, w }) {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState(users.avatar);
  const [coverImageUrl, setCoverImageUrl] = useState(users.thumnail);
  useEffect(
    () => {
      const uploadImage = async () => {
        setIsLoading(true);
        if (!selectedFile) {
          setIsLoading(false);
          return;
        }
        const { isSuccess, imageUrl, message } = await storeImageToFireBase(
          selectedFile
        );
        if (isSuccess) {
          w ? setProfileImageUrl(imageUrl) : setCoverImageUrl(imageUrl);
          setIsLoading(false);
          return imageUrl;
        } else {
          console.log(message);
        }
        setIsLoading(false);
      };
      uploadImage();
    },
    // eslint-disable-next-line
    [selectedFile]
  );
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const onUpdateUser = (e) => {
    e.preventDefault();
    dispatch(
      putUpdateProfile(users, profileImageUrl, coverImageUrl, reload, setReload)
    );
    closeModal();
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  return (
    <>
      <div className="modal-header" style={{ padding: "0px 20px 40px" }}>
        {w ? (
          <h4 className="modal-title">Cập nhật ảnh đại diện</h4>
        ) : (
          <h4 className="modal-title">Cập nhật ảnh bìa</h4>
        )}
      </div>
      <div className="modal-body">
        <form onSubmit={onUpdateUser} noValidate>
          <div className="form-default form-s">
            <div className="fileUploader ">
              <div className="fileContainer">
                {isLoading ? (
                  <>
                    <button
                      type="button"
                      disabled
                      style={{
                        opacity: ".4",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      className="chooseFileButton btn btn-primary btn--m"
                    >
                      Chọn hình <Load isSmall={true} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="chooseFileButton btn btn-primary btn--m"
                    >
                      Chọn hình
                    </button>
                    <input
                      type="file"
                      name="profileImageUrl"
                      accept="image/*"
                      onChange={onSelectFile}
                      id="upload"
                      className="btn"
                      style={{
                        opacity: 0,
                        zIndex: 1,
                        top: 0,
                        width: "74%",
                        position: "absolute",
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            {w ? (
              <div className="ReactCrop ReactCrop--fixed-aspect">
                {profileImageUrl == null || profileImageUrl === "" ? (
                  <img
                    src="https://source.unsplash.com/random/?car, automobile, oto"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                ) : (
                  <img
                    src={profileImageUrl}
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                )}
              </div>
            ) : (
              <div className="ReactCrop ReactCrop--fixed-aspect">
                {coverImageUrl == null || coverImageUrl === "" ? (
                  <img
                    src="https://source.unsplash.com/random/?car, automobile, oto"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                ) : (
                  <img
                    src={coverImageUrl}
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                )}
              </div>
            )}
            <button className="btn btn-primary btn--m">Cập nhật</button>
          </div>
        </form>
      </div>
    </>
  );
}
