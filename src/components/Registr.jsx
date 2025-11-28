import React from "react";
import Logo from "../assets/img/logo.png";
import Img2 from "../assets/img/img2.png";
import { Button, Form, Input, Checkbox, InputNumber } from "antd";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const onFinish = (values) => {
  console.log(values);
};
const Registr = () => {
  return (
    <section className="bg-[#daf8f8]">
      <div className="container1">
        <div className="w-[414px] h-auto rounded-[20px] bg-white p-5">
          <a href="/" className="flex items-center justify-end gap-1">
            <p className="font-bold text-[13px] leading-[150%] tracking-[-0.01em] text-[#313131]">
              Your Logo
            </p>
            <img src={Logo} alt="logotip" />
          </a>
          <div className="flex items-center gap-4">
            <div>
              <img src={Img2} alt="img" />
            </div>
            <div>
              <h1 className="font-semibold text-[18px] text-[#313131]">
                Login
              </h1>
              <p className="font-normal text-[12px] text-[#313131] opacity-75 mb-3">
                Login to access your travelwise account
              </p>
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[{ type: "email" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "age"]}
                  label="Age"
                  rules={[{ type: "number", min: 0, max: 99 }]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item name={["user", "website"]} label="Website">
                  <Input />
                </Form.Item>
                <Form.Item name={["user", "introduction"]} label="Introduction">
                  <Input.TextArea />
                </Form.Item>
                <Checkbox>
                  I agree to all the{" "}
                  <span className="font-medium text-[#ff8682]">
                    {" "}
                    Terms
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-[#ff8682]">
                    Privacy Policies
                  </span>
                </Checkbox>
              </Form>
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit" className="w-full">
                  Create account
                </Button>
              </Form.Item>
              <p className="font-medium text-[10px] text-center text-[#313131]">
                Already have an account?
                <a href="/">
                  <span className="font-semibold text-[#ff8682]"> Login</span>
                </a>
              </p>
              <div className="flex items-center gap-2 my-2">
                <div className="w-[76px] h-0 opacity-25 border border-[#313131]"></div>
                <p className="font-normal text-[10px] text-[#313131]">
                  Or login with
                </p>
                <div className="w-[76px] h-0 opacity-25 border border-[#313131]"></div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-sm border-[0.39px] border-solid border-[#3869eb] px-6 py-2">
                  <a href="">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.31958 4.68827C9.31958 2.09903 7.23331 0 4.65979 0C2.08628 0 0 2.09899 0 4.68827C0 7.0283 1.70403 8.96789 3.9317 9.31958V6.04347H2.74855V4.68827H3.9317V3.65539C3.9317 2.48039 4.62739 1.83136 5.69175 1.83136C6.2016 1.83136 6.73486 1.92292 6.73486 1.92292V3.07668H6.14728C5.56838 3.07668 5.38788 3.43808 5.38788 3.80885V4.68827H6.68025L6.47365 6.04347H5.38788V9.31958C7.61556 8.96789 9.31958 7.02834 9.31958 4.68827Z"
                        fill="#1877F2"
                      />
                    </svg>
                  </a>
                </div>
                <div className="rounded-sm border-[0.39px] border-solid border-[#3869eb] px-6 py-2">
                  <a href="">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_4118)">
                        <path
                          d="M8.46765 3.8995H8.15486V3.88338H4.66002V5.43665H6.85458C6.53442 6.34084 5.6741 6.98991 4.66002 6.98991C3.37333 6.98991 2.33012 5.9467 2.33012 4.66002C2.33012 3.37333 3.37333 2.33012 4.66002 2.33012C5.25394 2.33012 5.79429 2.55418 6.20571 2.92017L7.30406 1.82181C6.61053 1.17546 5.68284 0.776855 4.66002 0.776855C2.51554 0.776855 0.776855 2.51554 0.776855 4.66002C0.776855 6.80449 2.51554 8.54317 4.66002 8.54317C6.80449 8.54317 8.54317 6.80449 8.54317 4.66002C8.54317 4.39965 8.51638 4.1455 8.46765 3.8995Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M1.22437 2.8526L2.50018 3.78825C2.84539 2.93356 3.68143 2.33012 4.6598 2.33012C5.25373 2.33012 5.79407 2.55418 6.20549 2.92017L7.30384 1.82181C6.61031 1.17546 5.68262 0.776855 4.6598 0.776855C3.16827 0.776855 1.87479 1.61892 1.22437 2.8526Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M4.66011 8.54319C5.66313 8.54319 6.57451 8.15934 7.26357 7.53512L6.06173 6.51812C5.65877 6.82458 5.16637 6.99032 4.66011 6.98992C3.6501 6.98992 2.7925 6.3459 2.46942 5.44714L1.20312 6.42279C1.84579 7.68035 3.15092 8.54319 4.66011 8.54319Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M8.46754 3.89942H8.15476V3.8833H4.65991V5.43656H6.85448C6.70133 5.8669 6.42546 6.24294 6.06096 6.51822L6.06154 6.51783L7.26338 7.53483C7.17834 7.61211 8.54307 6.60151 8.54307 4.65993C8.54307 4.39957 8.51628 4.14541 8.46754 3.89942Z"
                          fill="#1976D2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4118">
                          <rect width="9.31958" height="9.31958" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="rounded-sm border-[0.39px] border-solid border-[#3869eb] px-6 py-2">
                  <a href="">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_4124)">
                        <path
                          d="M6.80211 4.87568C6.79847 4.25498 7.0797 3.78718 7.64761 3.44225C7.32998 2.98719 6.84944 2.73691 6.216 2.68867C5.61623 2.64135 4.96004 3.03816 4.71977 3.03816C4.46585 3.03816 3.88519 2.70505 3.42832 2.70505C2.48544 2.71962 1.4834 3.45681 1.4834 4.95668C1.4834 5.39991 1.5644 5.85769 1.7264 6.32913C1.94301 6.94983 2.72389 8.47064 3.53844 8.44606C3.96437 8.43605 4.26562 8.1439 4.81988 8.1439C5.35776 8.1439 5.63626 8.44606 6.11134 8.44606C6.93317 8.43423 7.63942 7.05177 7.84511 6.42925C6.74296 5.90957 6.80211 4.90753 6.80211 4.87568ZM5.84558 2.09983C6.30701 1.55194 6.26515 1.05319 6.25149 0.873901C5.84376 0.897564 5.37232 1.15149 5.10384 1.46366C4.80805 1.79858 4.63422 2.21268 4.67153 2.67957C5.11203 2.71324 5.5143 2.48663 5.84558 2.09983Z"
                          fill="#313131"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4124">
                          <rect width="9.31958" height="9.31958" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registr;
