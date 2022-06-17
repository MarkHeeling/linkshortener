import Header from "../components/Header";
import UrlContainer from "../components/urlshortener/UrlContainer";
import UrlForm from "../components/urlshortener/UrlForm";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <UrlContainer>
          <UrlForm />
        </UrlContainer>
      </div>
    </>
  );
}
