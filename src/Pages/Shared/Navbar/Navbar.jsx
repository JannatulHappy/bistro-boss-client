const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a>Item 555</a>
      </li>
      <li tabIndex={0} >
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-black">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <>
      <div className="fixed z-10 max-w-screen-xl text-white bg-black navbar bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 bg-black shadow menu menu-compact dropdown-content rounded-box w-52 "
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-xl normal-case btn btn-ghost">Bistro Boss</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
