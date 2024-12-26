import React, { useState } from "react";
import FormModal from "../../../components/share/modal/formModal";
import TeacherList from "../teachers/TeacherList";
import { useLocation } from "react-router-dom";
import StudentList from "../students/StudentList";
import SubjectList from "../subjects/SubjectList";
import ClassList from "../classes/ClassList";
import AssignmentList from "../assignments/AssignmentList";
import ResultList from "../results/ResultList";
import ExamList from "../exams/ExamList";
import LessonList from "../lessons/LessonList";
import ParentList from "../parents/ParentList";
import TableTopPart from "./TableTopPart";

type Props = {
    children: React.ReactElement<{
        openModal?: (row: Record<string, any>) => void;
    }>;
    page: string;
};

const ListContainer: React.FC<Props> = ({ }) => {
    const location = useLocation();

    const [modalOpen, setModalOpen] = useState(false);
    const [, setSelectedRow] = useState<Record<string, any> | null>(null);
    const [buttonType, setButtonType] = useState("");

    const openModal = (row: Record<string, any>, btnType: string,) => {
        setButtonType(btnType)
        setSelectedRow(row);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedRow(null);
        setModalOpen(false);
    };

    return (
        <div className="bg-white rounded-lg mt-4 p-2">
            <TableTopPart
                page={location.pathname.split("/")[1]}
                handleOpenModal={openModal}
                title={`All ${location.pathname.split("/")[1]}(s/es)`}
            />
            {location.pathname === "/teacher/list" ? (
                <TeacherList handleOpenModal={openModal} />
            ) : location.pathname === "/student/list" ? (
                <StudentList handleOpenModal={openModal} />
            ) : location.pathname === "/subject/list" ? (
                <SubjectList handleOpenModal={openModal} />
            ) : location.pathname === "/class/list" ? (
                <ClassList handleOpenModal={openModal} />
            ) : location.pathname === "/assignment/list" ? (
                <AssignmentList handleOpenModal={openModal} />
            ) : location.pathname === "/result/list" ? (
                <ResultList handleOpenModal={openModal} />
            ) : location.pathname === "/exam/list" ? (
                <ExamList handleOpenModal={openModal} />
            ) : location.pathname === "/lesson/list" ? (
                <LessonList handleOpenModal={openModal} />
            ) : location.pathname === "/parent/list" ? (
                <ParentList handleOpenModal={openModal} />
            ) : ""}

            {modalOpen && (
                <FormModal
                    isOpen={modalOpen}
                    setIsOpen={setModalOpen}
                    buttonType={buttonType}
                    page={location.pathname.split("/")[1]}
                    onCloseModal={closeModal}
                />
            )}
        </div>
    );
};

export default ListContainer;
