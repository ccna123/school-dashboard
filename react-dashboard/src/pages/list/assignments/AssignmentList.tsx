import Table from "../../../components/share/table/Table";
import { assignmentsData } from "../../../utils/data";
import { assignment_table_header } from "../../../utils/table_header";

type Props = {
  handleOpenModal: (row: any, type: string) => void;
};

const AssignmentList: React.FC<Props> = ({ handleOpenModal }) => {
  return (
    <div>
      <Table
        table_header={assignment_table_header}
        table_data={assignmentsData}
        page="assignment"
        renderRow={(row: any) => (
          <>
            <td className="p-2">{row.subject}</td>
            <td>{row.class}</td>
            <td>{row.teacher}</td>
            <td>{row.dueDate}</td>
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

export default AssignmentList;
