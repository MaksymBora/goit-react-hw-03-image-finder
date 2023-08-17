export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
