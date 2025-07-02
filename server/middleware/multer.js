import multer from "multer";

// this middleware function is for uploading images
const upload = multer({ storage: multer.diskStorage({}) });

export default upload;
