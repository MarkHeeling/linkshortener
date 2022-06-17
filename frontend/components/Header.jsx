import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          px-4
          text-lg text-gray-700
        "
      >
        <div>
          <a href="#" className="flex">
            <Image src="/vercel.svg" width={115} height={26} />
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
            <li>
              <a
                class="md:px-6 py-2 block font-medium text-gray-500 hover:text-gray-900"
                href="#"
              >
                Inloggen
              </a>
            </li>
            <li>
              <a
                class="md:p-2 py-2 block text-white bg-indigo-600 font-medium rounded-md"
                href="#"
              >
                Registreren
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
