import Table from "../../../components/share/table/Table";
import { NavLink } from "react-router-dom";
import { teachersData } from "../../../utils/data";
import { teacher_table_header } from "../../../utils/table_header";

type Pros = {
  handleOpenModal: (row: any, btnType: string,) => void;
};

const TeacherList: React.FC<Pros> = ({ handleOpenModal }) => {
  return (
    <div>
      <Table
        table_header={teacher_table_header}
        table_data={teachersData}
        page="teacher"
        renderRow={(row: any) => (
          <>
            <td className="flex items-center gap-2 p-2">
              <img
                src={row.photo}
                className="w-8 h-8 rounded-full"
                alt={`${row.name}'s photo`}
              />
              <div>
                <p className="font-bold">{row.name}</p>
                <p className="text-xs text-gray-400">{row.email}</p>
              </div>
            </td>
            <td>{row.teacherId}</td>
            <td>{row.subjects.join(", ")}</td>
            <td>{row.classes}</td>
            <td>{row.phone}</td>
            <td>{row.address}</td>
            <td>
              <div className="flex items-center gap-2">
                <NavLink to={`${row.id}`}>
                  <button className="bg-sky-200 rounded-full p-1">
                    <img
                      src="/images/view.png"
                      className="w-4 h-4"
                      alt="View"
                    />
                  </button>
                </NavLink>
                <button
                  onClick={() => handleOpenModal(row, "delete")}
                  className="bg-purple-200 rounded-full p-1"
                >
                  <img
                    src="/images/delete.png"
                    className="w-4 h-4"
                    alt="Delete"
                  />
                </button>
              </div>
            </td>
          </>
        )}
      />
    </div>
  );
};

export default TeacherList;
