"use client";

import { useEffect, useState } from "react";
import { Modal, ActionIcon } from "rizzui";
import { useForm, Controller } from "react-hook-form";
import ReactPhoneInput from "react-phone-input-2";
import { getData, postData } from "@/services/index";
import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";
import PageStarter from "../section/PageStarter";
import MainText from "../typography/MainText";
import { MainButton } from "../button/MainButton";
import SlideUp from "@/animation/SlideUp";
import SlideRight from "@/animation/SlideRight";
import SlideDown from "@/animation/SlideDown";
import toast from "react-hot-toast";

export const ContactUsModal = ({ btnText }) => {
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    postData("contact-us", { ...data }).then((res) => {
      //alert feature
      if (res.success === true) {
        toast.success(`${res.msg}`);
        router.push("/");
        rout;
      } else {
        toast.error(`${res.msg}`);
      }
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getData("wake").then((res) => {});
  }, []);

  return (
    <>
      <div className="m-auto px-10 pt-2 pb-4 bg-mainGrey font-Gilroy rounded-[20px]">
        <div>
          {" "}
          <div className="flex flex-col items-start justify-center gap-2 ">
            <SlideUp>
              {" "}
              <h1 className="text-[30px] md:text-[36px] leading-[1.5em] font-bold font-lato">
                Have Questions? <br /> We're Just a Message{" "}
                <span className="text-primary"> Away</span>
              </h1>
            </SlideUp>

            <MainText
              text={
                "Fill out the form below, and one of our team members will get back to you shortly. "
              }
              color={"opacity-50"}
            />
          </div>
          {/* form */}
          <div className="flex flex-col justify-between">
            <SlideDown delay={0.2}>
              {" "}
              <form
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
                action="#"
                className="bg-transparent rounded-[5px] md:py-[10px]"
              >
                <div className="text-left md:py-[25px] py-[10px] px-0 ">
                  <div className="flex flex-col gap-2 md:gap-6 ">
                    {/*Name  */}
                    <div className="flex flex-col items-start gap-2 ">
                      <label className="text-[18px] leading-[28px] text-mainBlack font-normal font-lato ">
                        Name
                      </label>{" "}
                      <input
                        type="text"
                        placeholder="Enter name"
                        className={`${
                          errors.name && "border-primary focus:border-primary"
                        } w-full outline-none rounded-[5px]  bg-[#ffffff] px-[16px] py-[19px] text-subTextGray placeholder:text-graySecond focus:border-primary shadow-custom-primary`}
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-400">
                          {"Please enter a valid name"}
                        </span>
                      )}
                    </div>{" "}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 ">
                      {/* Email */}
                      <div className="flex flex-col items-start gap-2 ">
                        <label className="text-[18px] leading-[28px] text-mainBlack font-normal font-lato ">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="You@gmail.com"
                          className={`${
                            errors.email &&
                            "border-primary focus:border-primary"
                          } w-full outline-none rounded-[5px] shadow-custom-primary bg-[#ffffff] px-[16px] py-[19px] text-subTextGray placeholder:text-graySecond focus:border-primary `}
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <span className="text-xs text-red-400">
                            {"Please enter a valid email"}
                          </span>
                        )}
                      </div>
                      {/* phone number */}
                      <div className="flex flex-col items-start gap-2 ">
                        <label className="text-[18px] leading-[28px] text-mainBlack font-normal font-lato ">
                          Phone Number{" "}
                        </label>{" "}
                        <Controller
                          control={control}
                          name="phoneNumber"
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
                                "bg-[#ffffff] w-full outline-none shadow-custom-primary rounded-[5px]  px-[16px] py-[19px] placeholder:text-graySecond focus:bg-lightGray"
                              }
                              specialLabel={""}
                              className={`focus:border-primary w-full`}
                            />
                          )}
                        />
                      </div>{" "}
                      {/* industry */}
                      <div className="flex flex-col items-start gap-2 ">
                        <label className="text-[18px] leading-[28px] text-mainBlack font-normal font-lato ">
                          Industry
                        </label>{" "}
                        <input
                          type="text"
                          placeholder="Enter your Industry"
                          className={`${
                            errors.industry &&
                            "border-primary focus:border-primary"
                          } w-full outline-none rounded-[5px] shadow-custom-primary bg-[#ffffff] px-[16px] py-[19px] text-subTextGray placeholder:text-graySecond focus:border-primary `}
                          {...register("industry", { required: true })}
                        />
                        {errors.industry && (
                          <span className="text-xs text-red-400">
                            {"Please enter your industry"}
                          </span>
                        )}
                      </div>
                      {/*budget  */}
                      <div className="flex flex-col items-start gap-2 ">
                        <label className="text-[18px] leading-[28px] text-mainBlack font-normal font-lato ">
                          Budget
                        </label>{" "}
                        <input
                          type="text"
                          placeholder="Enter your budget"
                          className={`${
                            errors.budget &&
                            "border-primary focus:border-primary"
                          } w-full outline-none rounded-[5px] shadow-custom-primary bg-[#ffffff] px-[16px] py-[19px]  placeholder:text-graySecond focus:border-primary `}
                          {...register("budget", { required: true })}
                        />
                        {errors.budget && (
                          <span className="text-xs text-red-400">
                            {"Please enter your project budget"}
                          </span>
                        )}
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col items-start gap-2 ">
                      <label className="text-[18px] leading-[28px] text-mainBlack font-normal font-lato ">
                        Message{" "}
                      </label>{" "}
                      <textarea
                        placeholder="Leave us a message"
                        className={`${
                          errors.message &&
                          "border-secondary focus:border-secondary"
                        } h-[200px] w-full rounded-[5px] shadow-custom-primary bg-[#ffffff] px-[16px] py-[19px] text-subTextGray placeholder:text-graySecond focus:border-primary `}
                        {...register("message", { required: true })}
                      />
                      {errors.message && (
                        <span className="text-xs text-red-400">
                          {"Please enter a message"}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center items-center md:justify-end my-[40px] ">
                    {" "}
                    <button
                      type="submit"
                      className={`cursor-pointer font-normal rounded-full shadow-custom-primary  bg-primary px-[20px] py-[10px] md:px-[40px] md:py-[14px] text-[10px] text-white md:text-[14px] tracking-wider`}
                    >
                      Send Message{" "}
                    </button>
                  </div>{" "}
                </div>
              </form>{" "}
            </SlideDown>
            {/* button */}
          </div>
        </div>
      </div>
    </>
  );
};
