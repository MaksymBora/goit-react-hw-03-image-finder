import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery.styled';

export const Gallery = ({ imgItems }) => {
  return (
    <div>
      <ImageGallery>
        <GalleryItem items={imgItems} />
      </ImageGallery>
    </div>
  );
};
