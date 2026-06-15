import { useModalStore } from "../store/useOpenModal";
import Modal from "./Modal";

export type ItemsProps = {
  filter: "all" | "active" | "inActive";
  item: TIemes[];
  setItem: React.Dispatch<React.SetStateAction<TIemes[]>>;
};
export interface TIemes {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}
const Items = ({ filter, item, setItem }: ItemsProps) => {
  //this is for false or true active
  const Toggle = (id: string) => {
    const one = item.map((item) =>
      item.id === id ? { ...item, isActive: !item.isActive } : item
    );

    setItem(one);
  };

  //this is for filter items according button
  const filterItem = item.filter((i) => {
    if (filter === "active") return i.isActive;
    if (filter === "inActive") return !i.isActive;
    return true; //all
  });
  // this is for delete each of them
  const deleteItem = () => {
  setItem((prev) => prev.filter((i) => i.id !== selected));
  setOpen(false);
  setSelected(null);
};
   const{setOpen,setSelected ,selected}=useModalStore()
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {filterItem.map((each) => (
        <div
          key={each.id}
          className="flex flex-col gap-4 p-6 rounded-3xl bg-white shadow-xl "
        >
          <div className="flex justify-between items-center gap-4">
            <img src={each.logo} alt="" />
            <div className="flex flex-col ">
              <p className="font-bold text-xl">{each.name}</p>
              <p className="text-xl text-gray-500">{each.description} </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                setOpen(true)
                setSelected(each.id)
              }}
              className="bg-gray-200 py-2 px-4 text-xl text-gray-600 rounded-full"
            >
              Remove
            </button>
            <button
              onClick={() => {
                Toggle(each.id);
              }}
              className={`w-18 h-8  rounded-full ${
                each.isActive ? "bg-[#DE473F]" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-7 h-7  rounded-full bg-white ${
                  each.isActive ? "translate-x-10.5 " : "translate-x-0.5 "
                }`}
              ></div>
            </button>
          </div>
        </div>
      ))}
      <Modal Delete={deleteItem}/>
    </section>
  );
};

export default Items;
