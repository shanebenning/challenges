import { Disclosure, Menu } from "@headlessui/react";
import Link from "next/link";
import { List, X } from "phosphor-react";
import cx from "~/lib/cx";
import { STORE_NAME } from "~/lib/constants";
import Container from "./container";

const HeaderBrand = ({ href = "/" }: { href?: string }) => (
  <Link href={ href }>
    <a className="block mt-0.5">
      {STORE_NAME.split(" ").map((word) => (
        <span key={word} className="text-xl first-of-type:font-semibold last-of-type:font-extrabold">
          {word}
        </span>
      ))}
    </a>
  </Link>
)

// todo: replace w/ icons
const MobileMenuToggle = ({ open }: { open: boolean }) => (
  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 hover:text-slate-700 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400">
      <span className="sr-only">Open Menu</span>
      {open ? (
        <X size={24} aria-hidden={true} />
      ) : (
        <List size={24} aria-hidden={true} />
      )}
    </Disclosure.Button>
  </div>
);

const userOptions = [
  { href: "#account", name: "Account" },
  { href: "#settings", name: "Settings" },
  { href: "#sign-out", name: "Sign Out" },
];

const navigation = [
  { href: "#store", name: "Store", current: false },
  { href: "#library", name: "Library", current: false },
];

const Header = () => {
  return (
    <Disclosure as="header" className="bg-slate-100 shadow-sm">
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex items-center justify-between h-16">
              <MobileMenuToggle open={open} />
              <div
                className={cx(
                  "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
                )}
              >
                <div className="shrink-0 flex items-center">
                  <div className="h-8 w-auto">
                    <HeaderBrand />
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(({ href, name, current }) => (
                      <Link key={ `${name}--${href}` } href={href}>
                        <a className={cx("")}>
                          {name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-slate-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-400 focus:ring-white">
                      <span className="sr-only">Open User Menu</span>
                      {/* avatar */}
                      <div className="w-8 h-8 bg-slate-800/25 rounded-full"></div>
                    </Menu.Button>
                    {/* Animate Transition on dropdown */}
                    <>
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* TODO: [Add] - signed in as */}
                        {userOptions.map(({ href, name }) => (
                          <Menu.Item key={ `${href}~${name}` }>
                            {({ active }) => (
                              <Link key={href} href={href}>
                                <a
                                  className={cx(
                                    active ? "text-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {name}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </>
                  </div>
                </Menu>
              </div>
            </div>
          </Container>

          <Disclosure.Panel className="sm:hidden">
            <div>
              {navigation.map(({ href, name, current }) => (
                <Disclosure.Button
                  key={`${href}${name}`}
                  as={Link}
                  href={href}
                  aria-current={current ? "page" : undefined}
                >
                  <a
                    className={cx(
                      current
                        ? "bg-gray-900 text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 text-base font-medium"
                    )}
                  >
                    {name}
                  </a>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
