import { useState, useEffect } from "react";

/**
 * https://blog.logrocket.com/progressive-image-loading-react-tutorial/
 */
const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {

    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

    useEffect(() => {
        // update the image
        setImgSrc(src);
    }, [src]);

    return (
      <img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || ""}
      />
    );
  };
  export default ProgressiveImg;