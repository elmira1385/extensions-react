import type { TIemes } from "./Items";

type ExtensionListProps = {
  filter: "all" | "active" | "inActive";
  setFilter: React.Dispatch<React.SetStateAction<"all" | "active" | "inActive">>;
  item: TIemes[];
};

const ExtentionList = ({ filter, setFilter ,item}: ExtensionListProps) => {
  const lengthAll=item.length
  const lengthActive=item.filter((i)=>(
    i.isActive
  ))
  const lengthInactive=item.filter((i)=>(
   !i.isActive 
  ))
  return (
    <div className="flex flex-col justify-between items-center gap-6">
      <div className="flex gap-2">
        <p className="text-3xl font-bold">
          Extensions List <span className="text-gray-500">({lengthAll})</span>
        </p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <button
          onClick={() => {
            setFilter("all");
          }}
          className={`py-2 px-4 text-[18px] rounded-full ${
            filter === "all" ? "bg-red-300" : "bg-gray-300"
          }`}
        >
          All({lengthAll})
        </button>
        <button
          onClick={() => {
            setFilter("active");
          }}
          className={`py-2 px-4 text-[18px] rounded-full ${
            filter === "active" ? "bg-red-300" : "bg-gray-300"
          }`}
        >
          Active <span>({lengthActive.length})</span>
        </button>
        <button
          onClick={() => {
            setFilter("inActive");
          }}
          className={`py-2 px-4 text-[18px] rounded-full ${
            filter === "inActive" ? "bg-red-300" : "bg-gray-300"
          }`}
        >
          Inactive <span>({lengthInactive.length})</span>
        </button>
      </div>
    </div>
  );
};

export default ExtentionList;
