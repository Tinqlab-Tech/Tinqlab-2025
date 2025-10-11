"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const UserMail = () => {
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    postData("message/add", { ...data, from: "Tinqlab" }).then((res) => {
      setResponse(res);
      setTimeout(() => {
        setResponse(null);
        setModalState(false);
      }, 3000);
    });
    setIsLoading(false);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      action="#"
      className="flex items-center bg-mainWhite w-full  p-[5px] rounded-[10px] justify-between"
    >
      <input
        type="email"
        placeholder="You@gmail.com"
        className={`${
          errors.firstname && "border-primary focus:border-primary"
        } w-full rounded-[5px] bg-transparent outline-none px-[16px]  text-subTextGray placeholder:text-graySecond focus:border-primary `}
        {...register("name", { required: true })}
      />
      {errors.firstname && (
        <span className="text-xs text-red-400">
          {"Please enter a valid name"}
        </span>
      )}
      <button
        type="submit"
        className="bg-primary text-white px-[18px] py-[10px] rounded-[10px] hover:bg-primary/90 transition"
      >
        Subscribe
      </button>
    </form>
  );
};

export default UserMail;
