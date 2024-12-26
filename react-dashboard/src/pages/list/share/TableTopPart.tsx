type Props = {
  title: string;
  handleOpenModal: (row: any, btnType: string) => void;
  page: string
};

const TableTopPart: React.FC<Props> = ({ title, handleOpenModal, page }) => {
  const isTeacherOrStudent = page === "teacher" || page === "student";

  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-xl p-2">{title}</p>
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full px-2 w-fit flex items-center gap-2 border-2 border-gray-300">
          <img className="w-3 h-3" src="/images/search.png" alt="" />
          <input
            type="text"
            className="text-gray-400 focus:outline-none"
            placeholder="Search from table..."
          />
        </div>
        <div className="bg-[#f5ec91] rounded-full p-1 cursor-pointer">
          <img className="w-4 h-4 " src="/images/filter.png" alt="" />
        </div>
        <div className="bg-[#f5ec91] rounded-full p-1 cursor-pointer">
          <img className="w-4 h-4 " src="/images/sort.png" alt="" />
        </div>
        <div
          onClick={() => isTeacherOrStudent && handleOpenModal(null, "add")}
          className="bg-[#f5ec91] rounded-full p-1 cursor-pointer"
        >
          <img className="w-4 h-4 " src="/images/plus.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TableTopPart;
