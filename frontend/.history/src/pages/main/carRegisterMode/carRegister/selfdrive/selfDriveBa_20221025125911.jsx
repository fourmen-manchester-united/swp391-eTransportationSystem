import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Load from "../../../../../components/Load";
import { SET_CAR_IMAGE } from "../../../../../store/constants/car.const";
import { storeImageToFireBase } from "../../../../../utils/storeImageToFirebase.";

function SelfDriveBa({ carImages, setCarImage }) {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
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
          setCarImage([...carImages, { image: imageUrl }]);
          dispatch({
            type: SET_CAR_IMAGE,
            payload: [...carImages, { image: imageUrl }],
          });
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
  const deleteImage = (id) => {
    setCarImage(carImages.filter((elm, index) => index !== id));
    dispatch({
      type: SET_CAR_IMAGE,
      payload: carImages.filter((elm, index) => index !== id),
    });
  };
  return (
    <div>
      <div className="group form-default">
        <h6>Hình ảnh</h6>
        <p className="summary">
          Đăng nhiều hình ở các góc độ khác nhau để tăng thông tin cho xe của
          bạn.
        </p>
        <div className="list-photos">
          <ul>
            <li>
              <div className="obj-photo">
                <span className="ins">
                  <div className="fileUploader ">
                    <div className="fileContainer">
                      <div className="errorsContainer" />
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
                            name="image"
                            accept="image/*"
                            onChange={onSelectFile}
                            id="upload"
                            className="btn"
                            style={{
                              opacity: 0,
                              zIndex: 1,
                              top: 0,
                              left: 0,
                              width: "100%",
                              position: "absolute",
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </span>
              </div>
            </li>
            {carImages.length > 0 &&
              carImages.map((carImages, index) => (
                <li key={index}>
                  <div
                    className="obj-photo"
                    style={{
                      backgroundImage: `url(${carImages.image})`,
                    }}
                  >
                    <Link
                      to="#"
                      className="func-remove"
                      onClick={() => deleteImage(index)}
                    >
                      <i className="ic ic-remove" />
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelfDriveBa;
