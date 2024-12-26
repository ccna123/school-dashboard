import Table from "../../../components/share/table/Table";
import { subjectsData } from "../../../utils/data";
import { subject_table_header } from "../../../utils/table_header";

type Pros = {
  handleOpenModal: (row: any, btnType: string) => void;
};

const SubjectList: React.FC<Pros> = ({ handleOpenModal }) => {
  return (
    <div>
      <Table
        table_header={subject_table_header}
        table_data={subjectsData}
        page="subject"
        renderRow={(row: any) => (
          <>
            <td className="p-2">{row.name}</td>
            <td>{row.teachers.join(", ")}</td>
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

export default SubjectList;
