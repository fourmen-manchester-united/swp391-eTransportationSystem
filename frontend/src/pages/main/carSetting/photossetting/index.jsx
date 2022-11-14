import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Load from "../../../../components/Load";
import { SET_UPDATE_CAR_IMAGE } from "../../../../store/constants/car.const";
import { storeImageToFireBase } from "../../../../utils/storeImageToFirebase.";

function PhotosSetting({ carDetail }) {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [carImages, setCarImage] = useState(carDetail.carImages);
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
            type: SET_UPDATE_CAR_IMAGE,
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
      type: SET_UPDATE_CAR_IMAGE,
      payload: carImages.filter((elm, index) => index !== id),
    });
  };
  return (
    <div className="list-photos settings">
      <div className="list-thumb">
        <div className="draggable">
          <div className="obj-photo">
            <div className="fix-img no-drag">
              <div className="fileUploader" style={{ width: "100%" }}>
                <div
                  className="fileContainer"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "70px",
                  }}
                >
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
                        className="btn"
                        onChange={onSelectFile}
                        style={{
                          opacity: 0,
                          position: "absolute",
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {carImages.map((carImages, index) => (
          <div className="draggable" key={index}>
            <div className="obj-photo">
              <div className="fix-img no-drag">
                <img src={carImages.image} alt="" />
              </div>
              <Link
                to="#"
                className="func-remove"
                onClick={() => deleteImage(index)}
              >
                <i className="ic ic-remove" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotosSetting;
