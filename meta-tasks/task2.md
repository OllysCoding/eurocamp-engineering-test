### Task 2

#### Field: Frontend Development

The field of web/frontend development has many considerations & best practices. When developing a new application or working on an existing one it's important to consider the following:

- Accessibility: Your application should be fully compliant with WCAG 2.1
- Performance: Understanding the performance of your application is important, depending on its purpose you should consider
  - Measuring your site against the core web vitals (CWV)
  - A base level of performance optimisation can be acheived
    - Server-side-rendering or prerendering if either are applicable
    - Asset caching, all of your assets should be effeciently cached so they don't need to be re-fetched by the user. Hashing the name can allow for assets to be re-fetched when they are changed.
    - Image optimisation, using srcsets to serve the correct size to different users, using latest compression techniques like webp & avif where browsers support them.
    - JS tree-shaking, bundle splitting & code minification, it's important your bundles only contain the code necessary for it to operate (tree-shaking), that your bundles are effeciently split so the user only downloads code relevant to their current context (bundle splitting) & that your code is minified to remove excess whitespace, comments & shorten variable & function names (code minification)
- Testing
    - Unit testing with something like Jest
    - Component & visual regression testing with something like Storybook & Chromatic
    - End-to-end testing with something like cypress
- Observability: It's important to have insights into as many areas of your application function as possible
    - For security, use depedabot or snyk to highlight any vulnerable dependencies
    - For client-side errors, using something like sentry to monitor them
    - Use googles CWV library & your preffered backend to collect CWV from a sample of your users
    - Use Google Analytics or similar to measure traffic & user journeys
    - For server-side observability if relevant, you can use your host provided log tool (like cloudwatch) or stream your logs elsewhere (like an elasticsearch instance or datadog)


#### New Technologies

Currently, React & Typescript is a very safe choice when starting a new application, you should have no problem finding other examples of architecture & structure, and there are many 3rd party wrappers like next.js that can simplify your experience. Furthermore, these technologies are familiar to most web developers, simplifying your hiring & onboarding processes.

However, as javascript is, there are many new and interesting tools & libraries being developed, some of which are just worth knowing about, others which are ready for use in production today.

- SWC: The next-gen compilation tool replacing babel which can be used within webpack or standalone, incredibly fast compilation times offer an excellent local developer experience & fast CI/CD
- Vite: A super-fast build tool designed for modern javascript projects, replacing webpack/rollup/parcel, it doesn't need to generate 'bundles' for your dev-server, serving your source code on demand offers a vastly quicker startup time compared to other options
- Astro.js: A new all-in-one framework that is zero-javascript-first, using 'islands' of hydration to allow you to build rich experiences where needed.



