const UrlContainer = ({ children }) => {
  return (
    <div className="w-auto p-5 m-20 bg-white rounded-md shadow-sm url-container">
      <h2 className="mb-4 text-lg font-medium text-center">Verklein je url</h2>
      {children}
    </div>
  );
};

export default UrlContainer;
