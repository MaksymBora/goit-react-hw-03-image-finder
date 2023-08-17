import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imgItems }) => {
  return (
    <div>
      <ul>
        <ImageGalleryItem items={imgItems} />
      </ul>
    </div>
  );
};
