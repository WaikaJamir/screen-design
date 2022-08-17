import { useRef, useState, useCallback, useEffect } from "react";
import Form from "./Form";

// const videoConstraints = {
//   width: 720,
//   height: 360,
//   facingMode: "user",
// };

const Webcame = () => {
  const [isCaptureEnable, setCaptureEnable] = useState(false);
  const [url, setUrl] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }

    if (!isCaptureEnable) {
      setCaptureEnable(false);
    }
  }, [webcamRef, isCaptureEnable]);

  useEffect(() => {
    console.log("imageSrc", url);
  }, [url]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      capture();
      setCaptureEnable(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isCaptureEnable, capture]);

  const openButton = () => {
    setCaptureEnable(true);
  };
  const closeButton = () => {
    setCaptureEnable(false);
  };
  const clearButton = () => {
    setUrl(null);
  };

  return (
    <>
      <Form
        openButton={openButton}
        closeButton={closeButton}
        url={url}
        webcamRef={webcamRef}
        isCaptureEnable={isCaptureEnable}
        capture={capture}
        clearButton={clearButton}
        src={url}
      />
    </>
  );
};
export default Webcame;

// converting into jpeg format

// function dataURLtoFile(dataurl, filename) {
//   var arr = dataurl.split(","),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);

//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }

//   return new File([u8arr], filename, { type: mime });
// }
// //Usage:
// const file = dataURLtoFile(
//   "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/",
//   "img.jpg"
// );
// console.log(file);
