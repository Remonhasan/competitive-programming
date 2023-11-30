import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Sidebar() {

   const { t } = useTranslation();

  return (
    <>
     <div style={{ marginLeft: '5px' }}> 
     <div className="hidden lg:relative lg:block lg:flex-none">
        <div
          className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden pt-16 pl-0.5 pr-8 xl:w-72 xl:pr-16"
        >
          <nav className="text-sm">
            <ul className="space-y-9">
              <li>
               
                
                <h6 className="font-display font-semibold text-slate-900">{t('Competitive Programming')}</h6>
                
                <ul className="mt-4 space-y-4 border-slate-200">
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-sky-500 before:bg-sky-500"
                      href="index.html"
                      >{t('How to Start ?')}</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Getting started</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Installation</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h6 className="font-display font-semibold text-slate-900">
                  Previous Year Question (CSE)
                </h6>
                <ul className="mt-4 space-y-4 border-slate-200">
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-sky-500 before:bg-sky-500"
                      href="index.html"
                      >1st Year 1st Semester (1.1)</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="index.html"
                      >1st Year 2nd Semester (1.2)</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="index.html"
                      >2nd Year 1st Semester (2.1)</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="index.html"
                      >2nd Year 2nd Semester (2.2)</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="index.html"
                      >3rd Year 1st Semester (3.1)</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="index.html"
                      >3rd Year 2nd Semester (3.2)</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="index.html"
                      >4th Year 1st Semester (4.1)</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="index.html"
                      >4th Year 2nd Semester (4.2)</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h6 className="font-display font-semibold text-slate-900">
                  Core concepts
                </h6>
                <ul className="mt-4 space-y-4 border-slate-200">
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Understanding flow</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Predicting user journey</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Basics of design</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Introduction to development</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >The load effect</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h6 className="font-display font-semibold text-slate-900">
                  Advanced guides
                </h6>
                <ul className="mt-4 space-y-4 border-slate-200">
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Writing plugins</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Neuralink integration</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Temporal paradoxes</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Testing blocks</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Compile-time caching</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Predictive data generation</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h6 className="font-display font-semibold text-slate-900">
                  API reference
                </h6>
                <ul className="mt-4 space-y-4 border-slate-200">
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >FetchAdvance.load()</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >GetAdvance.get()</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >UploadAdvance.load()</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >LoadAdvance.push()</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <h2 className="font-display font-semibold text-slate-900">
                  Contributing
                </h2>
                <ul className="mt-4 space-y-4 border-slate-200">
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >How to contribute</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Architecture guide</a
                    >
                  </li>
                  <li className="relative">
                    <a
                      className="block w-full pl-3.5 before:pointer-events-none before:absolute before:left-0.5 before:top-1/2 before:h-0.5 before:w-1.5 before:-translate-y-1/2 text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-900 hover:before:block"
                      href="doc.html"
                      >Design principles</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
     </div>
    </>
  )
}
