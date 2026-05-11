import reactLogo from '../assets/Public/react.svg';

const MyHeader = () => {
  return (
    <header className="bg-body-tertiary py-3 mb-4">
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <a href="#home" className="d-flex align-items-center text-decoration-none text-dark">
          <img src={reactLogo} alt="React logo" width="40" />
          <span className="ms-2 h5 mb-0">React App</span>
        </a>
        <nav className="nav">
          <a className="nav-link active" aria-current="page" href="#home">
            Home
          </a>
          <a className="nav-link" href="#link">
            Link
          </a>
          <a className="nav-link" href="#more">
            More
          </a>
        </nav>
      </div>
    </header>
  );
};

export default MyHeader;
