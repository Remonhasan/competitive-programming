import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();

  const code =
    "Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur";
  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 pt-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        {/* <CodeBlock
      text={code}
      language={'c++'}
      showLineNumbers={10}
      theme={dracula}
    /> */}

        <header className="mb-9">
          <p className="font-display text-sm font-semibold text-sky-500 mb-1 mr-5">
            Introduction
          </p>
          <h1 className="font-display text-3xl  text-slate-900 font-semibold mr-5">
            Getting started
          </h1>
          <div className="flex mt-4">
            <div className="ml-4">
              <p className="font-display font-semibold text-sm text-slate-900">
                Muhammad Shahriar Alam
              </p>
              <p className="text-sm text-slate-500">
                University of Chittagong | ACM ICPC Dhaka Regional-2020, 17th
                Rank | Software Engineer @ Enosis Solution
              </p>
            </div>
            <div className="flex-none">
              <a
                href="https://codeforces.com/profile/_Muhammad"
                className="rounded-md bg-sky-50 px-2.5 py-1.5 text-sm font-semibold font-display text-sky-500 shadow-sm hover:bg-sky-100"
              >
                Profile
              </a>
            </div>
          </div>
          <p
            className="text-lg text-slate-600 mt-9"
            style={{ textAlign: "left" }}
          >
           {t('I have written in many details how a beginner can start from Competitive Programming Zero, how to practice in Codeforces, how to learn different topics Step by Step, and from where to learn. How a Beginner Codeforces 0 Rating will be 1600+ (Expert) in Codeforces and also Basic Topics : C Programming, C++ STL, Greedy, Bruteforce, Constructive Algorithm, Partial Sum, Binary Search, Number Theory, Basic Graph Theory, Basic I have discussed in details when, how and where to learn Dynamic Programming. The blog is a little big because the 0 to 1600 journey is also a little long. So be patient and read the whole thing well.')}
          </p>
        </header>

        <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-semibold lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-slate-500 prose-a:font-semibold prose-a:no-underline prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg">
          <h6 id="who-am-i">{t('Who am I?')}</h6>
          <div className="my-8 rounded-2xl p-6 bg-yellow-50">
            <div className="prose text-yellow-800 [--tw-prose-background:theme(colors.yellow.50)] prose-a:text-yellow-900 prose-code:text-yellow-900">
              <div className="row">
                <div className="col-md-6" style={{ textAlign: "left" }}>
                  Muhammad Shahriar Alam,
                  <br />
                  CSE 17 Batch, University of Chittagong
                  <br />
                  ACM ICPC Dhaka Regional-2020, 17th Rank
                </div>
                <div className="col-md-6" style={{ textAlign: "left" }}>
                  Codeforces : _Muhammad (max. 1830, Expert)
                  <br />
                  Software Engineer, Enosis Solution
                  <br />
                  Founder, CPS Academy
                </div>
              </div>
            </div>
          </div>
          <h7 id="motivation" style={{  fontWeight: 'bold' }}>{t('Motivation')}</h7>
          <p style={{ textAlign: "left" }}>
            {t('A beginner faces many problems when he starts or wants to start competitive programming. How to start, from where to practice, after what to learn, from where to learn, how to improve, how long to think about a problem, many more. I have written this blog as an answer to all these questions and a basic guideline for a beginner. However, this blog does not have to be strictly followed. Because everyones style of improvement is not the same. So take this blog as a standard and you will develop it as your own. However, if you strictly follow this blog, there will be improvement in Sha Allah. So lets get started.')}
          </p>
          {/* <pre className="prism-code language-shell">
            <code>
              plugins: [ require('@tailwindcss/forms'),
              require('@tailwindcss/typography'), ]
            </code>
          </pre>
          <p>
            Possimus saepe veritatis sint nobis et quam eos. Architecto
            consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea
            deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam
            asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus
            tempora cupiditate est quod.
          </p> */}
          <hr/>
          <h7 id="learning-c" style={{  fontWeight: 'bold' }}>{t('Learning C Programming and Starting Basic Problem Solving')}</h7>
          <p>
            {t('First learn C programming well by watching a good book or video. I would suggest Herbert Scheldts Teach Yourself C book. From this book: printf / scanf ( I/O ), if-else, while loop, for loop, do-while loop, array/string, function, recursion, structure, file, pointer. Learn these topics serially well. You can watch this video of mine for Recursion:')}
          </p>
          <iframe
            width="800"
            height="315"
            src="https://www.youtube.com/embed/WyHKSK50Za4" // Replace with your video ID
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>
            {t('Apart from learning all the above topics, problem solving practice should be done on Different Online Jude. You can start practice from beecrowd. It is one of the easiest online judge. It was previously named URI. I started my competitive programming journey from here.')}
          </p>
          BeeCrowd Website:
         <a href="https://www.beecrowd.com.br/judge/en/login?redirect=%2Fen%2Fproblems%2Findex%2F1%3Fsource%3Dpost_page-----a4dcd478c15f--------------------------------">Click Here
         </a>
          

          <div className="my-8 rounded-2xl p-6 bg-yellow-50">
            <p className="font-display text-xl text-yellow-900 mt-0 mb-2.5">
              Consequatur et cum atque mollitia
            </p>
            <div className="prose text-yellow-800 [--tw-prose-background:theme(colors.yellow.50)] prose-a:text-yellow-900 prose-code:text-yellow-900">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur culpa qui
                officia deserunt mollit laborum.
              </p>
            </div>
          </div>

          <div className="my-8 rounded-2xl p-6 bg-sky-50">
            <p className="font-display text-xl text-sky-900 mt-0 mb-2.5">
              Consequatur et cum atque mollitia
            </p>
            <div className="prose text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur culpa qui
                officia deserunt mollit laborum.
              </p>
            </div>
          </div>

          <div className="my-8 rounded-2xl p-6 bg-green-50">
            <p className="font-display text-xl text-green-900 mt-0 mb-2.5">
              Consequatur et cum atque mollitia
            </p>
            <div className="prose text-green-800 [--tw-prose-background:theme(colors.green.50)] prose-a:text-green-900 prose-code:text-green-900">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur culpa qui
                officia deserunt mollit laborum.
              </p>
            </div>
          </div>

          <div className="my-8 rounded-2xl p-6 bg-red-50">
            <p className="font-display text-xl text-red-900 mt-0 mb-2.5">
              Consequatur et cum atque mollitia
            </p>
            <div className="prose text-red-800 [--tw-prose-background:theme(colors.red.50)] prose-a:text-red-900 prose-code:text-red-900">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur culpa qui
                officia deserunt mollit laborum.
              </p>
            </div>
          </div>
          <hr></hr>
          <h6 id="basic-usage">Basic usage</h6>
          <p>
            Praesentium laudantium magni. Consequatur reiciendis aliquid nihil
            iusto ut in et. Quisquam ut et aliquid occaecati. Culpa veniam aut
            et voluptates amet perspiciatis. Qui exercitationem in qui. Vel qui
            dignissimos sit quae distinctio.
          </p>
          <h7 id="your-first-cache">Your first cache</h7>
          <p>
            Minima vel non iste debitis. Consequatur repudiandae et quod
            accusamus sit molestias consequatur aperiam. Et sequi ipsa eum
            voluptatibus ipsam. Et quisquam ut.
          </p>
          <p>
            Qui quae esse aspernatur fugit possimus. Quam sed molestiae
            temporibus. Eum perferendis dignissimos provident ea et. Et
            repudiandae quasi accusamus consequatur dolore nobis. Quia
            reiciendis necessitatibus a blanditiis iste quia. Ut quis et amet
            praesentium sapiente.
          </p>
          <h4>Change your password</h4>
          <ol className="ol-pretty uk-list-large">
            <li>Click your team name to open the Team Menu.</li>
            <li>
              Select Profile &amp; account. This will open your profile on the
              right side of your screen.
            </li>
            <li>
              Under your name, click Account Settings. This will open your
              Account settings.
            </li>
            <li>By Password, click expand.</li>
            <li>Enter your Current Password, and then a New Password.</li>
            <li>Click Save Password.</li>
          </ol>
          <p>
            Ea est autem fugiat velit esse a alias earum. Dolore non amet soluta
            eos libero est. Consequatur qui aliquam qui odit eligendi ut impedit
            illo dignissimos.
          </p>
          <p>
            Ut dolore qui aut nam. Natus temporibus nisi voluptatum labore est
            ex error vel officia. Vero repellendus ut. Suscipit voluptate et
            placeat. Eius quo corporis ab et consequatur quisquam. Nihil officia
            facere dolorem occaecati alias deleniti deleniti in.
          </p>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      John Smith
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Front-end Developer
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      johnsmith@example.com
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Member
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      John Smith
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Front-end Developer
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      johnsmith@example.com
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Member
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      John Smith
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Front-end Developer
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      johnsmith@example.com
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Member
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h7 id="adding-middleware">Adding middleware</h7>
          <p>
            Officia nobis tempora maiores id iusto magni reprehenderit velit.
            Quae dolores inventore molestiae perspiciatis aut. Quis sequi
            officia quasi rem officiis officiis. Nesciunt ut cupiditate. Sunt
            aliquid explicabo enim ipsa eum recusandae. Vitae sunt eligendi et
            non beatae minima aut.
          </p>
          <p>
            Harum perferendis aut qui quibusdam tempore laboriosam voluptatum
            qui sed. Amet error amet totam exercitationem aut corporis
            accusantium dolorum. Perspiciatis aut animi et. Sed unde error ut
            aut rerum.
          </p>
          <p>
            Ut quo libero aperiam mollitia est repudiandae quaerat corrupti
            explicabo. Voluptas accusantium sed et doloribus voluptatem fugiat a
            mollitia. Numquam est magnam dolorem asperiores fugiat. Soluta et
            fuga amet alias temporibus quasi velit. Laudantium voluptatum
            perspiciatis doloribus quasi facere. Eveniet deleniti veniam et quia
            veritatis minus veniam perspiciatis.
          </p>
          <hr></hr>
          <h6 id="getting-help">Getting help</h6>
          <p>
            Consequuntur et aut quisquam et qui consequatur eligendi.
            Necessitatibus dolorem sit. Excepturi cumque quibusdam soluta ullam
            rerum voluptatibus. Porro illo sequi consequatur nisi numquam nisi
            autem. Ut necessitatibus aut. Veniam ipsa voluptatem sed.
          </p>
          <h7 id="submit-an-issue">Submit an issue</h7>
          <p>
            Inventore et aut minus ut voluptatem nihil commodi doloribus
            consequatur. Facilis perferendis nihil sit aut aspernatur iure ut
            dolores et. Aspernatur odit dignissimos. Aut qui est sint sint.
          </p>
          <p>
            Facere aliquam qui. Dolorem officia ipsam adipisci qui molestiae.
            Error voluptatem reprehenderit ex.
          </p>
          <p>
            Consequatur enim quia maiores aperiam et ipsum dicta. Quam ut sit
            facere sit quae. Eligendi veritatis aut ut veritatis iste ut
            adipisci illo.
          </p>
          <h7 id="join-the-community">Join the community</h7>
          <p>
            Praesentium facilis iste aliquid quo quia a excepturi. Fuga
            reprehenderit illo sequi voluptatem voluptatem omnis. Id quia
            consequatur rerum consectetur eligendi et omnis. Voluptates iusto
            labore possimus provident praesentium id vel harum quisquam.
            Voluptatem provident corrupti.
          </p>
          <p>
            Eum et ut. Qui facilis est ipsa. Non facere quia sequi commodi
            autem. Dicta autem sit sequi omnis impedit. Eligendi amet dolorum
            magnam repudiandae in a.
          </p>
          <p>
            Molestiae iusto ut exercitationem dolorem unde iusto tempora atque
            nihil. Voluptatem velit facere laboriosam nobis ea. Consequatur
            rerum velit ipsum ipsam. Et qui saepe consequatur minima laborum
            tempore voluptatum et. Quia eveniet eaque sequi consequatur nihil
            eos.
          </p>
        </div>

        <dl className="mt-12 flex">
          <div>
            <dt className="font-display text-sm font-semibold text-slate-900">
              Previous
            </dt>
            <dd className="mt-1">
              <a
                className="text-sm text-slate-600 hover:text-slate-900"
                href="index.html"
              >
                <span aria-hidden="true">←</span> Getting started
              </a>
            </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="font-display text-sm font-semibold text-slate-900">
              Next
            </dt>
          </div>
        </dl>
        <div className="mt-12 flex flex-col items-center space-y-6 border-t border-slate-200 pt-10">
          <h7 className="font-display font-semibold text-slate-900 text-lg">
            Was this article helpful?
          </h7>
          <div className="flex space-x-4">
            <button
              type="button"
              className="flex items-center space-x-2 min-w-[3.75rem] rounded-md bg-sky-50 px-2.5 py-1.5 text-sm font-semibold font-display text-sky-500 shadow-sm hover:bg-sky-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>Yes</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-2 min-w-[3.75rem] rounded-md bg-sky-50 px-2.5 py-1.5 text-sm font-semibold font-display text-sky-500 shadow-sm hover:bg-sky-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>No</span>
            </button>
          </div>
          <p className="text-slate-700 text-sm">
            Have more questions?{" "}
            <a className="underline hover:text-sky-500" href="#">
              Submit a request.
            </a>
          </p>
        </div>
      </div>
      <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav id="toc" aria-labelledby="on-this-page-title" className="w-56">
          <h6 className="font-display text-sm font-semibold text-slate-900">
            On this page
          </h6>
          <ol className="mt-4 space-y-3 text-sm">
            <li>
              <h7>
                <a
                  className="font-normal text-slate-500 hover:text-slate-900"
                  href="#who-am-i"
                >
                  Who am I ?
                </a>
              </h7>
              <ol className="mt-2 space-y-3 pl-5 text-slate-500">
                <li>
                  <a className="hover:text-slate-900" href="#motivation">
                    Motivation
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900"
                    href="#learning-c"
                  >
                    Learning C Programming
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <h7>
                <a
                  className="font-normal text-slate-500 hover:text-slate-900"
                  href="#basic-usage"
                >
                  Basic usage
                </a>
              </h7>
              <ol className="mt-2 space-y-3 pl-5 text-slate-500">
                <li>
                  <a className="hover:text-slate-900" href="#your-first-cache">
                    Your first cache
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#adding-middleware">
                    Adding middleware
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <h7>
                <a
                  className="font-normal text-slate-500 hover:text-slate-900"
                  href="#getting-help"
                >
                  Getting help
                </a>
              </h7>
              <ol className="mt-2 space-y-3 pl-5 text-slate-500">
                <li>
                  <a className="hover:text-slate-900" href="#submit-an-issue">
                    Submit an issue
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-900"
                    href="#join-the-community"
                  >
                    Join the community
                  </a>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
