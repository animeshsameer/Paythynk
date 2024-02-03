import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <hr className="border-black mb-5" />
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-2 px-4 py-1 text-center text-black sm:flex-row sm:justify-between sm:text-left">
        <div className="">© 2024 | All Rights Reserved</div>

        <div className="flex items-center justify-center">
          <FaGithub className="mr-2" />
          <a
            className=""
            href="https://github.com/royalpinto007/AI-Marketplace"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
