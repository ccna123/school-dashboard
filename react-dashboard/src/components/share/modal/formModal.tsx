import React from "react";
import ModalContainer from "./ModalContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faUpload } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  buttonType: string;
  page: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
};

// Define the schema for validation
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type FormData = z.infer<typeof schema>;

const FormModal: React.FC<Props> = ({ buttonType, page, onCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      {buttonType === "delete" ? (
        <ModalContainer>
          <div
            onClick={onCloseModal}
            className="text-5xl cursor-pointer w-fit ml-auto"
          >
            &times;
          </div>
          <p className="text-xl font-bold text-center">
            Do you want to delete this {page} data?
          </p>
          <button
            type="button"
            className="bg-red-400 p-1 text-xl text-white rounded-lg font-bold w-full my-4 hover:bg-opacity-60 duration-100"
          >
            Delete
          </button>
        </ModalContainer>
      ) : buttonType === "add" && (page === "teacher" || page === "student") ? (
        <ModalContainer>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">Create a new {page}</p>
            <FontAwesomeIcon
              onClick={onCloseModal}
              icon={faCircleXmark}
              className="text-2xl cursor-pointer"
            />
          </div>
          {/* input section */}
          <form onSubmit={onSubmit}>
            <div>
              <p className="my-4">Authentication Information</p>
              <div className="flex justify-between items-center gap-4">
                <Input
                  type="text"
                  label="Username"
                  register={register}
                  fieldName="username"
                  errors={errors.username}
                />
                <Input
                  type="text"
                  label="Email"
                  register={register}
                  fieldName="email"
                  errors={errors.email}
                />
                <Input
                  type="password"
                  label="Password"
                  register={register}
                  fieldName="password"
                  errors={errors.password}
                />
              </div>
              <p className="my-4">Personal Information</p>
              <div className="grid grid-cols-3 items-center gap-4">
                <Input
                  register={register}
                  fieldName="firstName"
                  type="text"
                  label="First name"
                  errors={errors.firstName}
                />
                <Input
                  register={register}
                  fieldName="password"
                  type="text"
                  label="LastName"
                  errors={errors.lastName}
                />
                <Input
                  register={register}
                  fieldName="firstName"
                  type="text"
                  label="Phone"
                  errors={errors.phone}
                />
              </div>
              <div className="grid grid-cols-3 items-center my-2 gap-4">
                <Input
                  register={register}
                  fieldName="address"
                  type="text"
                  label="Address"
                  errors={errors.address}
                />
                <Input
                  register={register}
                  fieldName="bloodType"
                  type="text"
                  label="Blood type"
                  errors={errors.bloodType}
                />
                <Input
                  register={register}
                  fieldName="dateOfBirth"
                  type="date"
                  label="Date of birth"
                  errors={errors.birthday}
                />
              </div>
              <div className="grid grid-cols-3 items-center">
                <Input
                  register={register}
                  fieldName="sex"
                  type="text"
                  label="Sex"
                  errors={errors.sex}
                />
                <div></div>
                <div className="">
                  <label
                    htmlFor="img"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faUpload}
                      className="text-2xl cursor-pointer"
                    />
                    <p>Upload photo</p>
                  </label>
                  <input
                    {...register("img")}
                    type="file"
                    id="img"
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            <button className="bg-[#f5ec91] p-1 text-xl rounded-lg font-bold w-full my-4 hover:bg-opacity-60 duration-100">
              Add
            </button>
          </form>
          {/* end input section */}
        </ModalContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormModal;
