import React from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  type: string;
  register?: any;
  fieldName?: string;
  errors?: FieldError;
};

const Input: React.FC<Props> = ({
  label,
  type,
  register,
  fieldName,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div>
        <label>{label}</label>
      </div>
      <input
        {...register(fieldName)}
        type={type}
        className={`focus:border-2 focus:outline-green-500 mt-2 p-1 w-full ${
          type !== "file"
            ? errors?.message
              ? "border-2 border-red-300"
              : "border-2 border-gray-300"
            : ""
        }  rounded-lg`}
      />
      <p
        className="text-red-500 text-xs min-h-[1rem]" // Reserve space for the error message
      >
        {errors?.message?.toString()}
      </p>
    </div>
  );
};

export default Input;
