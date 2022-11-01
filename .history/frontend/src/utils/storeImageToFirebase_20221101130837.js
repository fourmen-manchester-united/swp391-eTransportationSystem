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
    const imageRef
}