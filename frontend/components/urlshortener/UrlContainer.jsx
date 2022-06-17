const UrlContainer = ({ children }) => {
  return (
    <div className="url-container rounded-md p-5 shadow-md">
      <h2 className="text-center mb-4">Verklein je url</h2>
      {children}
    </div>
  );
};

export default UrlContainer;
