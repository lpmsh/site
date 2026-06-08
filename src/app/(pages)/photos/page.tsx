import Gallery, { Photo } from "./Gallery";
import photosData from "./photos.json";

const photos = photosData as Photo[];

// Warm up the connection to the Blob CDN before any image request fires.
const blobOrigin = photos[0] ? new URL(photos[0].url).origin : null;

export default function Photos() {
  return (
    <>
      {blobOrigin && (
        <link rel="preconnect" href={blobOrigin} crossOrigin="anonymous" />
      )}
      <Gallery photos={photos} />
    </>
  );
}
