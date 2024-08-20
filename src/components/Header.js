import SearchBar from "./HeaderSearchBar";

const Header = () => {
  return (
    <header className="p-6 bg-black">
      <div className="flex justify-center">
        <nav className="mb-6">
          <ul className="flex items-center">
            <li className="mx-3"><a className="text-white" href="#">Best<br />Match</a></li>
            <li className="mx-3"><a className="text-white" href="#">Hightest<br />Rated</a></li>
            <li className="mx-3"><a className="text-white" href="#">Most<br />Reviewed</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;