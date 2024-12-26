import Table from "../../../components/share/table/Table";
import { studentsData } from "../../../utils/data";
import { student_table_header } from "../../../utils/table_header";

type Pros = {
  handleOpenModal: (row: any, btnType: string) => void;
};

const StudentList: React.FC<Pros> = ({ handleOpenModal }) => {
  return (
    <div>
      <Table
        table_header={student_table_header}
        table_data={studentsData}
        page="student"
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
                <p className="text-xs text-gray-400">{row.class}</p>
              </div>
            </td>
            <td>{row.studentId}</td>
            <td>{row.grade}</td>
            <td>{row.phone}</td>
            <td>{row.address}</td>
            <td>
              <div className="flex items-center gap-2">
                <button className="bg-sky-200 rounded-full p-1">
                  <img src="/images/view.png" className="w-4 h-4" alt="View" />
                </button>
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

export default StudentList;
