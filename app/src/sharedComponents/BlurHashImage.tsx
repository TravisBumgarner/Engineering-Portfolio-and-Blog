import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { useBlurhash } from "../hooks/useBlurHash";
import { useInView } from "framer-motion";
import { blurHashLookup } from "../blurHashLookup";

interface Props {
  src: string;
}

const getBlurHash = (src: string) => {
  // This works because __STATIC__ always includes a public in the url.
  const relativePath = src.split("/public")[1];
  console.log(relativePath);
  const result = blurHashLookup[relativePath as keyof typeof blurHashLookup];

  if (!result) {
    // Shame me for this code!
    throw new Error("missing blurhash");
  }

  return result;
};

const BlurHashImage = ({ src }: Props) => {
  //   const [isVisible, setIsVisible] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const isComingIntoView = useInView(imgRef, {
    margin: "0px 0px 1500px 0px",
  });

  const { width, height, blurHash } = useMemo(() => {
    return getBlurHash(src);
  }, [src]);

  const blurUrl = useBlurhash(
    !imgLoaded && isComingIntoView ? blurHash : null,
    width,
    height
  );

  const handleOnLoad = useCallback(() => {
    setImgLoaded(true);
  }, []);

  return (
    <StyledImage
      width={width}
      height={height}
      $blurUrl={blurUrl}
      ref={imgRef}
      // Fixes brief flickering of a broken image if using '' here.
      {...(isComingIntoView ? { src } : {})}
      // Above is lazy loading so don't use this.
      // loading="lazy"
      onLoad={handleOnLoad}
    />
  );
};

const StyledImage = styled.img<{
  $blurUrl: string | null;
}>`
  background-size: 100% 100%;
  background-repeat: -no-repeat;
  ${(props) =>
    props.$blurUrl &&
    `
      background-image: url(${props.$blurUrl});
      
  `}
`;

// ${(props) =>
//     props.$useSquareImage
//       ? `
//       object-fit: cover;
//       width: 100%;
//       aspect-ratio: 1 / 1; /* This maintains a 1:1 aspect ratio */
//     `
//       : `
//     `}

export default BlurHashImage;
