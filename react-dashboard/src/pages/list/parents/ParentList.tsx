import Table from "../../../components/share/table/Table";
import { parentsData } from "../../../utils/data";
import { parent_table_header } from "../../../utils/table_header";

type Props = {
  handleOpenModal: (row: any, type: string) => void;
};

const ParentList: React.FC<Props> = ({ handleOpenModal }) => {
  return (
    <div>
      <Table
        table_header={parent_table_header}
        table_data={parentsData}
        page="parent"
        renderRow={(row: any) => (
          <>
            <td className="flex items-center gap-2 p-2">
              <div>
                <p className="font-bold">{row.name}</p>
                <p className="text-xs text-gray-400">{row.email}</p>
              </div>
            </td>
            <td>{row.students.join(", ")}</td>
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

export default ParentList;
