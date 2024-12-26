import Table from "../../../components/share/table/Table";
import { lessonsData } from "../../../utils/data";
import { lesson_table_header } from "../../../utils/table_header";

type Props = {
  handleOpenModal: (row: any, type: string) => void;
};

const LessonList: React.FC<Props> = ({ handleOpenModal }) => {
  return (
    <div>
      <Table
        table_header={lesson_table_header}
        table_data={lessonsData}
        page="lesson"
        renderRow={(row: any) => (
          <>
            <td className="p-2">{row.subject}</td>
            <td>{row.class}</td>
            <td>{row.teacher}</td>
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

export default LessonList;
