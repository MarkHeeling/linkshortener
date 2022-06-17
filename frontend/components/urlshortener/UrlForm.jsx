import { useState } from "react";
import { shortenUrl } from "../../network/shortenUrl";

const UrlForm = () => {
  const apiKey = "9a89892ddee9dc4013e9dba4959f131f04452";
  const [url, setUrl] = useState(null);
  const [shortendUrl, setShortendUrl] = useState(null);

  const handleSubmit = async (e) => {
    shortenUrl(apiKey, url).then(function (response) {
      setShortendUrl(response);
    });
  };

  return (
    <>
      <div className="border-blue-500 border-2 rounded-md">
        <input
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Url..."
          className="rounded-md"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white">
          verkleinen
        </button>
      </div>
      <div>
        <a>{shortendUrl}</a>
      </div>
    </>
  );
};

export default UrlForm;
