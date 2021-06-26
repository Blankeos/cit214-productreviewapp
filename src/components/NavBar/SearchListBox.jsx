/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useEffect, useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

// Services
import { search } from "../../services/restServices";

// Icons
import { RiSearch2Line } from "react-icons/ri";
import { BsX } from "react-icons/bs";
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";
import DefaultPhoto from "../ProductPage/DefaultPhoto";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchListBox({
  searchBoxNode,
  listBoxNode,
  closeSearchMode,
  ...rest
}) {
  // Refs
  const searchRef = useRef();
  const menuButtonRef = useRef();
  const history = useHistory();

  // States
  const [currentItem, setCurrentItem] = useState(-1);
  const [query, setQuery] = useState(null);

  const [queriedResults, setQueriedResults] = useState(null); // data
  const [isSearching, setIsSearching] = useState(false); // for loading
  const [promiseCounter, setPromiseCounter] = useState(0);

  const onResponse = ({ promiseId, results }) => {
    // refuse promise if it was not the last
    if (promiseId !== promiseCounter) {
      console.log(promiseId, "is not equal to", promiseCounter);
      return;
    }
    // reset counter to avoid overflow
    setPromiseCounter(0);

    // do what needs to be done
    setQueriedResults(results);
    setIsSearching(false);
  };

  const asyncFunction = async (query) => {
    const promiseId = promiseCounter;
    setPromiseCounter((prev) => {
      return prev + 1;
    });
    const results = await search(query);
    return { promiseId, results };
  };

  const loadData = (query) => {
    setIsSearching(true);
    asyncFunction(query).then(onResponse);
  };

  // Hooks
  useEffect(() => {
    loadData(query);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    const name = e.key;

    if (name === "ArrowDown") {
      if (!queriedResults) return;
      setCurrentItem((prev) => {
        if (prev + 1 < queriedResults.userResults.length) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }

    if (name === "ArrowUp") {
      if (!queriedResults) return;

      setCurrentItem((prev) => {
        if (prev - 1 < 0) {
          return -1;
        } else {
          return prev - 1;
        }
      });
    }

    if (name === "Enter") {
      if (currentItem !== null) {
        history.push(`/profile/${queriedResults.userResults[currentItem].uid}`);
        closeSearchMode();
      }
    }
  };

  return (
    <motion.div
      initial={{ width: "15%" }}
      animate={{
        width: "100%",
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className="relative inline-block text-left w-full"
    >
      <>
        {/* SearchBox */}
        <div className="text-sm flex bg-white transition-all duration-300 ease-out w-11/12 md:w-full focus-within:shadow-lg py-2 px-2.5 rounded-full space-x-1 md:border md:border-gray-300 items-center">
          <RiSearch2Line size="1.2em" color="gray" />
          <div className="flex w-full" ref={searchBoxNode}>
            <input
              onKeyDown={handleKeyPress}
              ref={searchRef}
              autoFocus
              onChange={handleChange}
              className="w-full p-1 outline-none focus:ring-primary focus:ring-1 focus:rounded-sm flex-grow"
              placeholder="Search..."
            ></input>
            <button
              className="px-1.5 focus:ring-primary focus:ring-1 rounded-full focus:outline-none transition transform active:scale-75"
              onClick={() => {
                searchRef.current.focus();
                searchRef.current.value = "";
              }}
            >
              <BsX size="1.2em" color="gray" />
            </button>
          </div>
        </div>

        {/* ListBox */}
        <Transition
          show={query ? query.length > 0 : false}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div
            static
            className="w-full origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto"
            style={{ maxHeight: "25rem" }}
          >
            <div ref={listBoxNode} className="py-1">
              {isSearching ? (
                <div className="relative flex w-full h-28 justify-center items-center">
                  <AnimatedLoadingIcon size="2.5rem" />
                </div>
              ) : queriedResults ? (
                queriedResults.userResults.map((item, i) => {
                  return (
                    <ListItem key={i} index={i} currentItem={currentItem}>
                      <UserItem user={item} closeSearchMode={closeSearchMode} />
                    </ListItem>
                  );
                })
              ) : (
                <div className="relative flex w-full h-28 justify-center items-center">
                  <AnimatedLoadingIcon size="2.5rem" />
                </div>
              )}
            </div>
          </div>
        </Transition>
      </>
    </motion.div>
  );
}

export const ListItem = ({ index, currentItem, children, ...rest }) => {
  return (
    <span
      className={`text-sm flex space-x-2 items-center hover:bg-gray-100 hover:text-gray-700 cursor-pointer ${
        index === currentItem ? "bg-gray-100 text-gray-700" : "text-gray-600"
      }`}
    >
      {children}
    </span>
  );
};

const UserItem = ({ user, ...rest }) => {
  return (
    <>
      <Link
        to={`/profile/${user.uid}`}
        onClick={() => rest.closeSearchMode()}
        className="flex space-x-2 items-center w-full h-full px-4 py-2"
      >
        <div className="rounded-full overflow-hidden h-9 w-9">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              className="object-fit object-cover w-full h-full"
            />
          ) : (
            <DefaultPhoto size="1rem" />
          )}
        </div>
        <span className="text-black">{user.displayName}</span>
      </Link>
    </>
  );
};
