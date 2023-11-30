import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from 'react-bootstrap/Dropdown';
import i18n from "../i18n";

export default function Header() {
  const { t } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md shadow-slate-900/5 transition duration-500">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center space-x-8 justify-between px-6 lg:px-8 py-4">
          <div className="flex items-center">
            
            <a aria-label="Home page" href="index.html">
              <h1>cpB.</h1>
            </a>
            <nav className="hidden lg:flex lg:space-x-8 lg:ml-12 xl:ml-16">
              <a
                href="doc.html"
                className="text-sm hover:text-sky-500 py-2.5 text-slate-900 font-display font-semibold"
              >
                Books
              </a>
              <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Topics
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">{t('Beginners Roadmap')}</Dropdown.Item>
                <Dropdown.Item href="#">{t('Codeforces Solution')}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </nav>
          </div>
          <div className="flex items-center flex-1 justify-end">
            <div className="w-full md:w-72 xl:w-96">
              <div className="w-full">
                <label className="sr-only">Search</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-slate-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    data-minchars={1}
                    data-maxitems={30}
                    className="block w-full rounded-md border-0 bg-white py-2.5 pl-10 pr-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>


            <div className="language-toggle" style={{ marginLeft: '20px'}}>
              <button
                className={`btn-sm btn-primary ${
                  i18n.language === "en" ? "active" : ""
                }`}
                onClick={() => changeLanguage("en")}
              >
                English
              </button>
              <button
                className={`btn-sm btn-primary ${
                  i18n.language === "bn" ? "active" : ""
                }`}
                onClick={() => changeLanguage("bn")}
              >
                বাংলা
              </button>
            </div>


            <button
              type="button"
              className="relative lg:hidden ml-4"
              aria-label="Open navigation"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                className="h-6 w-6 stroke-slate-500"
              >
                <path d="M4 7h16M4 12h16M4 17h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="z-10 origin-top transform transition hidden lg:hidden border-y border-slate-200">
          <div className="overflow-hidden bg-white">
            <div className="space-y-1 p-4 sm:p-6">
              <div x-data="{ accordion: false }">
                <a
                  href="#"
                  className="flex items-center rounded-lg px-4 py-3 text-base font-display font-semibold text-slate-900 hover:text-sky-500 hover:bg-slate-50"
                >
                  <span className="flex-1">Dropdown</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform-none"
                    viewBox="0 0 20 20"
                    fill="currentcolor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <div x-show="accordion" className="hidden">
                  <a
                    href="https://hugo-wireframe.netlify.app/heros/"
                    className="ml-4 flex items-center group rounded-lg px-4 py-3 text-slate-900 hover:text-sky-500 hover:bg-slate-50"
                  >
                    <div className="flex-shrink-0 mr-2.5 group-hover:text-sky-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-display font-semibold">
                      Application setting
                    </span>
                  </a>
                  <a
                    href="https://hugo-wireframe.netlify.app/features/"
                    className="ml-4 flex items-center group rounded-lg px-4 py-3 text-slate-900 hover:text-sky-500 hover:bg-slate-50"
                  >
                    <div className="flex-shrink-0 mr-2.5 group-hover:text-sky-500">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 6C3.75 4.75736 4.75736 3.75 6 3.75H8.25C9.49264 3.75 10.5 4.75736 10.5 6V8.25c0 1.24264-1.00736 2.25-2.25 2.25H6c-1.24264.0-2.25-1.00736-2.25-2.25V6z"
                          stroke="currentcolor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M3.75 15.75c0-1.2426 1.00736-2.25 2.25-2.25H8.25c1.24264.0 2.25 1.0074 2.25 2.25V18c0 1.2426-1.00736 2.25-2.25 2.25H6c-1.24264.0-2.25-1.0074-2.25-2.25V15.75z"
                          stroke="currentcolor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.5 6c0-1.24264 1.0074-2.25 2.25-2.25H18c1.2426.0 2.25 1.00736 2.25 2.25V8.25c0 1.24264-1.0074 2.25-2.25 2.25H15.75c-1.2426.0-2.25-1.00736-2.25-2.25V6z"
                          stroke="currentcolor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.5 15.75c0-1.2426 1.0074-2.25 2.25-2.25H18c1.2426.0 2.25 1.0074 2.25 2.25V18c0 1.2426-1.0074 2.25-2.25 2.25H15.75c-1.2426.0-2.25-1.0074-2.25-2.25V15.75z"
                          stroke="currentcolor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-base font-display font-semibold">
                      Product features
                    </span>
                  </a>
                  <a
                    href="https://hugo-wireframe.netlify.app/testimonials/"
                    className="ml-4 flex items-center group rounded-lg px-4 py-3 text-slate-900 hover:text-sky-500 hover:bg-slate-50"
                  >
                    <div className="flex-shrink-0 mr-2.5 group-hover:text-sky-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-display font-semibold">
                      Free resources
                    </span>
                  </a>
                  <a
                    href="https://hugo-wireframe.netlify.app/galleries/"
                    className="ml-4 flex items-center group rounded-lg px-4 py-3 text-slate-900 hover:text-sky-500 hover:bg-slate-50"
                  >
                    <div className="flex-shrink-0 mr-2.5 group-hover:text-sky-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-display font-semibold">
                      Video tutorials
                    </span>
                  </a>
                </div>
              </div>
              <a
                href="doc.html"
                className="block rounded-lg px-4 py-3 text-base font-display font-semibold text-slate-900 hover:text-sky-500 hover:bg-slate-50"
              >
                Document
              </a>
              <a
                href="contact.html"
                className="block rounded-lg px-4 py-3 text-base font-display font-semibold text-slate-900 hover:text-sky-500 hover:bg-slate-50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
     
    </>
  );
}
