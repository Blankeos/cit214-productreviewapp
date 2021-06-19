import React, { useState, useEffect } from "react";

// Context API & Hooks
import { Link, matchPath, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Services
import { toast } from "react-toastify";

// Components
import NavSearch from "./NavSearch";
import AuthRender from "./AuthRender";
import DropDown from "./DropDown";
import { animateScroll as scroll } from "react-scroll";

// Icons
import Logo from "../assets/imgs/cafely_logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import { BsFillPersonFill, BsInfoCircleFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { GiShoppingBag } from "react-icons/gi";
import { FaUserCog } from "react-icons/fa";
import DefaultPhoto from "./ProductPage/DefaultPhoto";
import NavLi from "./NavBar/NavLi";

const Nav = () => {
  const history = useHistory();
  const location = useLocation();

  const { logout, currentUser, authStateChecked } = useAuth();
  const [searchMode, setSearchMode] = useState(false);
  const [menuActive, setMenuActive] = useState({
    state: false,
    btnClass: "",
    menuClass: "-translate-y-full",
  });

  const locationIsMatch = (locationToMatchWith) => {
    return location.pathname.includes(locationToMatchWith);
  };

  const handleMenuButton = () => {
    setMenuActive((prevState) => {
      return {
        ...prevState,
        state: !prevState.state,
      };
    });

    if (menuActive.state) {
      setMenuActive((prev) => ({
        ...prev,
        btnClass: "menu-btn-active",
        menuClass: "",
      }));
    } else {
      setMenuActive((prev) => ({
        ...prev,
        btnClass: "",
        menuClass: "-translate-y-full",
      }));
    }
  };

  useEffect(() => {
    handleMenuButton();
  }, []);

  const handleLogout = async () => {
    await logout();
    history.push("/login");
    toast.warn("👋 You have logged out. See you later!", { autoClose: 5000 });
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      scroll.scrollToTop();
    } else {
      history.push("/");
    }
  };

  return (
    <>
      {/* Search Mode NavBar */}
      {searchMode && (
        <NavSearch
          onClickOutside={() => {
            setSearchMode(false);
          }}
        />
      )}

      {/* Default NavBar Container */}
      <nav className="sticky top-0 bg-white shadow-lg z-20">
        <div
          className="h-16 md:h-28 flex justify-between items-center w-full py-5 px-8 md:py-8 md:max-w-6xl mx-auto"
          style={{
            display: searchMode ? "none" : "flex",
          }}
        >
          {/* The Leftmost Side */}
          <div className="flex md:space-x-4 items-center w-full mr-10">
            {/* The Logo */}
            <button onClick={handleLogoClick} className="focus:outline-none">
              <img
                alt="Cafely Logo"
                className="w-16 h-16 md:w-20 md:h-20 relative transform -translate-y-1 transition duration-300 ease-out hover:scale-110 active:scale-90"
                src={Logo}
              />
            </button>

            {/* Responsive Mobile Menu Content & Also the NavList */}
            <div
              className={
                "bg-primary md:bg-transparent flex flex-col space-y-4 top-0 left-0 py-5 pt-20 absolute w-full items-center md:relative md:flex-row md:items-center md:mt-0 md:space-x-4 md:space-y-0 md:py-0 rounded-b-2xl transition-all transform motion-reduce:transition-transform md:-translate-y-0 " +
                menuActive.menuClass
              }
            >
              {/* Search Box */}
              <div className="text-sm flex bg-white transition-all ease-out py-2 px-2.5 md:w-48 rounded-full space-x-1 md:border md:border-gray-300 items-center w-10/12">
                <RiSearch2Line size="1.2em" color="gray" />
                <input
                  onFocus={() => {
                    setSearchMode(true);
                  }}
                  className="w-full p-1"
                  placeholder="Search..."
                ></input>
              </div>

              {/* Kebab Dropdown on sm */}
              <div className="p-2 hidden md:flex lg:hidden ">
                <DropDown
                  menuClass="bg-transparent shadow-none transition transform active:scale-75 active:bg-gray-100 p-1"
                  label={
                    <BiDotsVerticalRounded
                      size="2em"
                      className="text-primary"
                    />
                  }
                  items={[
                    {
                      label: "Review",
                      route: "/review",
                    },
                    {
                      label: "Products",
                      route: "/products",
                    },
                    {
                      label: "About",
                      route: "/about",
                    },
                  ]}
                />
              </div>

              {/* Some contents from Rightmost that ONLY appear in mobile. */}
              <div className="md:hidden flex w-full">
                {authStateChecked &&
                  (!currentUser ? (
                    <div className="flex w-full justify-center space-x-4">
                      <Link
                        onClick={handleMenuButton}
                        className="px-4 py-2 rounded-full border-gray-800 border-2 text-gray-800 hover:bg-gray-800 hover:text-primary"
                        to="/login"
                      >
                        Login
                      </Link>
                      <Link
                        onClick={handleMenuButton}
                        className="px-4 py-2 rounded-full bg-gray-800 border-2 border-gray-800 text-primary hover:bg-gray-900 hover:border-gray-900"
                        to="/register"
                      >
                        Register
                      </Link>
                    </div>
                  ) : (
                    <div className="px-2 w-full justify-center flex space-x-3 items-center overflow-hidden">
                      {/* Photo */}
                      <div
                        className="w-16 h-16 rounded-full bg-white flex-shrink-0"
                        style={{
                          backgroundImage: `url('${currentUser.photoURL}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      {/* Profile Info */}
                      <div className="flex-wrap">
                        <h5 className="font-semibold">
                          {currentUser.displayName}
                        </h5>
                        <p className="text-sm text-gray-700">
                          {currentUser.email}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Actual NavList */}
              <ul className="flex flex-col w-full items-start px-8 text-center space-y-4 text-gray-800 md:flex-row md:space-x-6 md:space-y-0 md:hidden lg:flex py-3.5">
                {authStateChecked && currentUser && (
                  <>
                    <Link
                      className="md:hidden"
                      onClick={handleMenuButton}
                      to="/profile"
                    >
                      <NavLi
                        icon={<BsFillPersonFill />}
                        locationIsMatch={locationIsMatch}
                        slugName="profile"
                      >
                        Profile
                      </NavLi>
                    </Link>
                    <Link
                      className="md:hidden"
                      onClick={handleMenuButton}
                      to="/accountSettings"
                    >
                      <NavLi
                        icon={<FaUserCog />}
                        locationIsMatch={locationIsMatch}
                        slugName="accountSettings"
                      >
                        Account Settings
                      </NavLi>
                    </Link>
                  </>
                )}
                <Link onClick={handleMenuButton} to="/review">
                  <NavLi
                    icon={<MdRateReview />}
                    locationIsMatch={locationIsMatch}
                    slugName="review"
                  >
                    Review
                  </NavLi>
                </Link>
                <Link onClick={handleMenuButton} to="/products">
                  <NavLi
                    icon={<GiShoppingBag />}
                    locationIsMatch={locationIsMatch}
                    slugName="products"
                  >
                    Products
                  </NavLi>
                </Link>
                <Link onClick={handleMenuButton} to="/about">
                  <NavLi
                    icon={<BsInfoCircleFill />}
                    locationIsMatch={locationIsMatch}
                    slugName="about"
                  >
                    About
                  </NavLi>
                </Link>
                {authStateChecked && currentUser && (
                  <button
                    className="md:hidden"
                    onClick={() => {
                      handleLogout();
                      handleMenuButton();
                    }}
                  >
                    <NavLi
                      icon={<GoSignOut />}
                      locationIsMatch={locationIsMatch}
                    >
                      Sign Out
                    </NavLi>
                  </button>
                )}
              </ul>
            </div>
          </div>

          {/* The Rightmost Side */}
          <div>
            {/* Hamburger Menu Button */}
            <div
              onClick={handleMenuButton}
              className={
                "relative md:hidden w-5 h-5 flex flex-col cursor-pointer space-y-1 transition-all " +
                menuActive.btnClass
              }
            >
              <span className="bg-gray-800 w-full h-0.5 rounded-sm transform transition-transform duration-300"></span>
              <span className="bg-gray-800 w-full h-0.5 rounded-sm transition-all duration-200"></span>
              <span className="bg-gray-800 w-full h-0.5 rounded-sm  transform transition-transform duration-300"></span>
            </div>

            {/* Contents of Rightmost Navigation List */}
            <ul className="hidden md:flex md:space-x-2">
              {authStateChecked && !currentUser && (
                <React.Fragment>
                  <li>
                    <Link
                      className="select-none text-sm disabled:opacity-50 border-2 border-primary text-primary px-4 py-2 rounded-full hover:text-white transition hover:bg-primary"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="select-none text-sm disabled:opacity-50 border-2 border-primary bg-primary px-4 py-2 rounded-full text-white transition hover:bg-yellow-400 hover:border-yellow-400"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                </React.Fragment>
              )}

              {/* UserButton */}
              <AuthRender>
                <div className="flex items-center space-x-5">
                  <p className="text-sm text-gray-700 overflow-hidden whitespace-nowrap">
                    {currentUser && currentUser.displayName}
                  </p>
                  <DropDown
                    menuClass="bg-primary hover:bg-yellow-400 transition focus:ring-2 focus:ring-offset-2 focus:ring-primary transform active:scale-75 relative overflow-hidden"
                    label={
                      currentUser && currentUser.photoURL ? (
                        currentUser.photoURL && (
                          <div
                            className="w-full h-full absolute"
                            style={{
                              backgroundImage: `url('${currentUser.photoURL}')`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        )
                      ) : (
                        <DefaultPhoto size="1em" />
                      )
                    }
                    items={[
                      {
                        icon: <BsFillPersonFill className="text-primary" />,
                        label: "Profile",
                        route: "/profile",
                      },
                      {
                        icon: <FaUserCog className="text-primary" />,
                        label: "Account Settings",
                        route: "/accountSettings",
                      },
                      {
                        icon: <GoSignOut className="text-primary" />,
                        label: "Sign Out",
                        route: "/logout",
                        onClick: handleLogout,
                      },
                    ]}
                  />
                </div>
              </AuthRender>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
