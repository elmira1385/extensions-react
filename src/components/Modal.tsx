
import { useModalStore } from "../store/useOpenModal";
type TProps={
    Delete:()=>void
}
const Modal = ({Delete}:TProps) => {
  const { isOpen ,setOpen ,setSelected} = useModalStore();
  
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-black/70 z-40 w-full h-full flex justify-center items-center p-4 ">
          <div className="p-8 bg-white flex flex-col gap-6 justify-center items-center rounded-2xl border-2 border-red-500">
            <h3 className="font-bold text-xl text-center">
              Are you sure you want to remove this extension?
            </h3>
            <div className="flex justify-between items-center gap-6 rounded-full">
              <button onClick={Delete} className="px-4 py-2 bg-gray-300 rounded-full text-xl">
                Remove
              </button>
              <button onClick={()=>{
                setOpen(false)
                setSelected(null)
              }} className="px-6 py-2 bg-gray-300 rounded-full text-xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
