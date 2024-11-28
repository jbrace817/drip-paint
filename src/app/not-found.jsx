function NotFound() {
  return (
    <div>
      <section className="grid min-h-full place-items-center bg-gradient-to-b from-orange-200 from-5% to-white to-70% px-6 py-32 sm:h-[calc(100vh-348px)] sm:py-32 lg:px-8 tallOrWideAndLandscape:h-auto">
        <div className="text-center">
          <p className="text-base font-semibold text-orange-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
