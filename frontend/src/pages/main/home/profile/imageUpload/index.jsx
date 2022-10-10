import React, { useEffect, useState } from "react";
import styles from "../settingProfile.module.css";
import { storeImageToFireBase } from "./../../../../utils/storeImageToFirebase.";
export default function ImageUpload({ defaultImage, imageList, setImageList }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const style = {
    uploadedImage: {
      height: "100%",
      overflow: "hidden",
    },
    image: {
      width: "35px",
      maxHeight: "35px",
      opacity: "0",
      cursor: "pointer",
      position: "absolute",
      zIndex: "1",
    },
    container: {
      position: "absolute",
      bottom: "20px",
      right: "50px",
    },
    svg: {
      fontSize: "35px",
      cursor: "pointer",
      filter:
        "invert(56%) sepia(17%) saturate(473%) hue-rotate(194deg) brightness(84%) contrast(80%)",
    },
  };

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
          setImageList(imageUrl);
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
  return (
    <div>
      <div className={styles.imageHandler} id={styles.profilePhotoThumbnail}>
        {imageList == null || imageList === "" ? (
          <img
            src={defaultImage}
            alt="thumbnail"
            className={styles.thumbnail}
          />
        ) : (
          <img src={imageList} alt="thumbnail" />
        )}
      </div>
      {isLoading ? (
        <div className={styles.upravitnahratsmazat}>
          <div
            className="loadingio-spinner-ripple-ormwzc5m72e"
            style={{ transform: "translate(-15px, -10px)" }}
          >
            <div className="ldio-gw2gg1659v">
              <div />
              <div />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.upravitnahratsmazat}>
          <input
            style={style.image}
            type="file"
            name="profileImageUrl"
            accept="image/*"
            onChange={onSelectFile}
            id="upload"
          />
          <img
            src="https://www.worldee.com/images/upravitimg.svg"
            alt="Upravit"
          />
        </div>
      )}
    </div>
  );
}
