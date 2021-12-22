import Resizer from "react-image-file-resizer";

export const FileResize = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      700,
      400,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });
