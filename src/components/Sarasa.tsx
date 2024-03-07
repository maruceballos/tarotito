export function Sarasa(props: any) {
  return (
    <section className="text-white-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            {props.t1}
          </h1>
          <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0">
            {props.t2}
          </button>
        </div>
      </div>
    </section>
  );
}
