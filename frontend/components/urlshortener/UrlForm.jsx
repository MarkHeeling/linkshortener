import { useState } from "react";
import { shortenUrl } from "../../network/shortenUrl";

const UrlForm = () => {
  const apiKey = "9a89892ddee9dc4013e9dba4959f131f04452";
  const [url, setUrl] = useState(null);
  const [shortendUrl, setShortendUrl] = useState("bitly.com/fdasfsda");

  const handleSubmit = async (e) => {
    shortenUrl(apiKey, url).then(function (response) {
      setShortendUrl(response);
    });
  };

  return (
    <>
      <div class="relative w-96">
        <input
          type="search"
          id="search"
          class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
          placeholder="Url verkleinen"
          required
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-80 font-medium rounded-lg text-sm px-4 py-2 "
          onClick={handleSubmit}
        >
          verkleinen
        </button>
      </div>
      <div>
        <h2 className="text-center">Jouw nieuwe url</h2>
        <p>{shortendUrl}</p>
      </div>
    </>
  );
};

export default UrlForm;
