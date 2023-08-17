import {
  ImageGalleryItem,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const GalleryItem = ({ items }) => {
  return (
    <>
      {items.map(item => {
        return (
          <ImageGalleryItem key={item.id}>
            <ImageGalleryItemImg
              src={item.webformatURL}
              alt={item.tags}
              load="lazy"
            />
          </ImageGalleryItem>
        );
      })}
    </>
  );
};
