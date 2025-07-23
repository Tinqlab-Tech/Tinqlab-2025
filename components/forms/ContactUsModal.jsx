"use client";

import { useState } from "react";
import { Modal, ActionIcon } from "rizzui";
import { useForm, Controller } from "react-hook-form";
import ReactPhoneInput from "react-phone-input-2";
import { postData } from "@/services/index";

import { MdClose } from "react-icons/md";
import PageStarter from "../section/PageStarter";
import MainText from "../typography/MainText";
import { MainButton } from "../button/MainButton";

export const ContactUsModal = ({ btnText }) => {
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
    <>
      <div onClick={() => setModalState(true)}> </div>
      <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        <div className="m-auto px-7 pt-6 pb-8 bg-white font-Gilroy rounded-[10px]">
          <div className="mb-7 flex items-center justify-end">
            <ActionIcon
              size="xl"
              variant="text"
              onClick={() => setModalState(false)}
              className="h-8 w-8 bg-[#F5F5F5] rounded-full"
            >
              <MdClose className="text-xl" />
            </ActionIcon>
          </div>

          <div className="flex flex-col items-center justify-center mb-7 text-justify">
            <PageStarter
              Title={"Get in touch with us"}
              SubtitleText={""}
              color={"text-[#131313]"}
            />
            <MainText text="We are always available to respond, just reachout to us today. " />
          </div>
          <div>
            {" "}
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              action="#"
              className="md:bg-white rounded-[5px] md:py-[10px]"
            >
              <div className="text-left md:py-[25px] md:px-[25px] py-[10px] px-0 ">
                {response !== null && (
                  <div className="text-[12px] font-extralight bg-opacity-50 p-2 bg-green-400 my-2 rounded-[5px]">
                    {
                      "Your message has been sent successfully. Our Team will get back to you via @ehdgroupllc.com email soon."
                    }
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 text-[14px] leading-[14px] text-mainBlack  font-extralight">
                  <div className="">
                    <input
                      type="text"
                      placeholder="Enter name"
                      className={`${
                        errors.firstname &&
                        "border-primary focus:border-primary"
                      } w-full rounded-[5px] border-[1px] border-lightGrayBorder bg-[#ffffff] px-[16px] py-[19px] text-subTextGray placeholder:text-graySecond focus:border-primary `}
                      {...register("name", { required: true })}
                    />
                    {errors.firstname && (
                      <span className="text-xs text-red-400">
                        {"Please enter a valid name"}
                      </span>
                    )}
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Enter company"
                      className={`${
                        errors.lastname && "border-primary focus:border-primary"
                      } w-full rounded-[5px] border-[1px] border-lightGrayBorder bg-[#ffffff] px-[16px] py-[19px] text-subTextGray placeholder:text-graySecond focus:border-primary `}
                      {...register("company", { required: true })}
                    />
                    {errors.lastname && (
                      <span className="text-xs text-red-400">
                        {"Please enter a valid company"}
                      </span>
                    )}
                  </div>
                  <div className="">
                    <Controller
                      control={control}
                      name="phone"
                      rules={{ required: true }}
                      render={({ field: { ref, ...field } }) => (
                        <ReactPhoneInput
                          {...field}
                          inputExtraProps={{
                            ref,
                            required: true,
                            autoFocus: true,
                          }}
                          country={"us"}
                          containerClass={"rounded-[5px] "}
                          inputClass={
                            "bg-[#ffffff] border-[1px] border-[#EBEBEB] rounded-[5px] w-full px-[16px] py-[19px] placeholder:text-graySecond focus:bg-lightGray"
                          }
                          specialLabel={""}
                          className={`focus:border-primary `}
                        />
                      )}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-400">
                        {"Please enter a valid phone number"}
                      </span>
                    )}
                  </div>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className={`${
                        errors.email && "border-primary focus:border-primary"
                      } w-full rounded-[5px] border-[1px] border-lightGrayBorder bg-[#ffffff] px-[16px] py-[19px]  placeholder:text-graySecond focus:border-primary `}
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400">
                        {"Please enter an email address"}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-2 ">
                    <textarea
                      placeholder="Tell us why you wish to reach out"
                      className={`${
                        errors.message &&
                        "border-secondary focus:border-secondary"
                      } h-[200px] w-full rounded-[5px] border-[1px] border-lightGrayBorder bg-[#ffffff] px-[16px] py-[19px] text-subTextGray placeholder:text-graySecond focus:border-primary `}
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400">
                        {"Please enter a message"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className={`cursor-pointer font-normal rounded-[5px] shadow-lg shadow-primary/30  bg-primary px-[20px] py-[10px] md:px-[40px] md:py-[14px] text-[10px] text-white md:text-[14px] tracking-wider`}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
