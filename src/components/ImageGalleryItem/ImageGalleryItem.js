export const ImageGalleryItem = ({ items }) => {
  return (
    <>
      {items.map(item => {
        return (
          <li key={item.id}>
            <img
              src={item.webformatURL}
              alt={item.tags}
              width="380"
              load="lazy"
            />
          </li>
        );
      })}
    </>
  );
};
