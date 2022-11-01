import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid4 } from "uuid";
import { storage } from "../configs/firebase.configs";

export const storeImageToFireBase = async (uploadedImage) => {
  if (uploadedImage === null) {
    return {
      isSuccess: false,
      imageUrl: "",
      message: "Upload image failed",
    };
  }
  const imageRef = ref(storage, `images/${uploadedImage.name}${uuid4()}`);
  try {
    const response = await uploadBytes(imageRef, uploadedImage);
    const url = await getDownloadURL(response.ref);
  }
};
