/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={classNames(
                "inline-flex items-center justify-center w-12 h-12 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 focus:outline-none",
                props.menuClass
              )}
            >
              {props.label}
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {props.items.map((item, i) => {
                  return (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <Link
                          to={item.route}
                          onClick={item.onClick}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-700"
                              : "text-gray-600",
                            "px-4 py-2 text-sm flex space-x-2 items-center"
                          )}
                        >
                          {/* <BsFillPersonFill /> */}
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
