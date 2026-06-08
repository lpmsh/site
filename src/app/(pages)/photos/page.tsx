import Gallery, { Photo } from "./Gallery";
import photos from "./photos.json";

export default function Photos() {
  return <Gallery photos={photos as Photo[]} />;
}
