import { GalleryItems } from 'components/GalleryItems/GalleryItems';

export const Gallery = ({ imgItems }) => {
  return (
    <div>
      <ul>
        <GalleryItems items={imgItems} />
      </ul>
    </div>
  );
};
