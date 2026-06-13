import p1 from "../assets/p1.svg";
const Items = () => {
  return (
    <section className="flex flex-wrap gap-8">
      <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white shadow-xl ">
        <div className="flex justify-between items-center gap-4">
          <img src={p1} alt="" />
          <div className="flex flex-col ">
            <p className="font-bold text-xl">DevLens</p>
            <p className="text-xl text-gray-500">
              Quickly inspect page layouts and visualize element boundaries.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
            <button className="bg-gray-200 py-2 px-4 text-xl text-gray-600 rounded-full">
               Remove
            </button>
            <button className="w-18 h-8 bg-gray-200 rounded-full ">
                <div className="w-7 h-7 bg-red-300 rounded-full"></div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Items;
