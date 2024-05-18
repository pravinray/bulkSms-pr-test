import React from "react";
// import { Image, Input } from "antd";
// import { Button, Checkbox, Form } from "antd";
import { useEffect } from "react";
import { MailOutlined, KeyOutlined } from "@ant-design/icons";
import PhoneInput from "antd-phone-input";
import OtpInput from "react-otp-input";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export const SignUp = () => {
  const [signInShow, setSignInShow] = React.useState(false);
  const [otp, setOtp] = React.useState("");

  const onFinish = async (values) => {
    const payload = {
      email: values.username,
      password: values?.password,
      mobileNumber: values?.mobileNumber
        ? `+` +
          values.mobileNumber.countryCode +
          `-` +
          values.mobileNumber.areaCode +
          values.mobileNumber.phoneNumber
        : null,
    };
    console.log("Success:", values, payload);

    const response = await fetch("http://localhost:3000/api/signUp", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log("********", result);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    fetch("http://localhost:3000/").then((response) => {
      console.log(
        "helooooo",
        response?.json().then((data) => console.log("dataa", data))
      );
      // console.log("resspnse", response.json().strin);
      // return response.json();
    });
    // .then((data) => {
    //   console.log("dataaaa", data);
    // });
  }, []);

  return (
    // <div className="flex w-[100rem] items-center justify-center h-screen bg-slate-300 w-auto">
    //   <div className="row">
    //     <div>
    //       <Image
    //         width={400}
    //         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    //       />
    //     </div>
    //     <div className="items-center border-4 bg-slate-200 justify-center flex px-10">
    //       <div className="grow">
    //         <Form
    //           name="basic"
    //           labelCol={{
    //             span: 4,
    //           }}
    //           wrapperCol={{
    //             span: 40,
    //           }}
    //           initialValues={{
    //             remember: true,
    //           }}
    //           onFinish={onFinish}
    //           onFinishFailed={onFinishFailed}
    //           autoComplete="off"
    //         >
    //           <Form.Item
    //             name="username"
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please input your username!",
    //               },
    //             ]}
    //           >
    //             <div className="flex">
    //               <MailOutlined className="text-2xl pr-2" />
    //               <Input
    //                 placeholder="UserName"
    //                 className="border-2  border-current"
    //               />
    //             </div>
    //           </Form.Item>

    //           <Form.Item
    //             name="password"
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please input your password!",
    //               },
    //             ]}
    //           >
    //             <div className="flex">
    //               <KeyOutlined className="text-2xl pr-2" />
    //               <Input.Password
    //                 placeholder="Password"
    //                 className="border-2  border-current"
    //               />
    //             </div>
    //           </Form.Item>

    //           <Form.Item
    //             name="confirmPassword"
    //             dependencies={["password"]}
    //             hasFeedback
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please confirm your password!",
    //               },
    //               ({ getFieldValue }) => ({
    //                 validator(_, value) {
    //                   if (!value || getFieldValue("password") === value) {
    //                     return Promise.resolve();
    //                   }
    //                   return Promise.reject(
    //                     new Error(
    //                       "The new password that you entered do not match!"
    //                     )
    //                   );
    //                 },
    //               }),
    //             ]}
    //           >
    //             <div className="flex">
    //               <KeyOutlined className="text-2xl pr-2" />
    //               <Input.Password
    //                 placeholder="Confirm Password"
    //                 className="border-2  border-current"
    //               />
    //             </div>
    //           </Form.Item>

    //           <Form.Item
    //             name="mobileNumber"
    //             className="mobileNumber"
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please input mobile number!",
    //               },

    //               {
    //                 validator(_, { valid }) {
    //                   if (valid()) return Promise.resolve();
    //                   return Promise.reject("Invalid phone number");
    //                 },
    //               },
    //             ]}
    //           >
    //             <PhoneInput enableSearch />
    //           </Form.Item>

    //           <Form.Item
    //             name="remember"
    //             valuePropName="checked"
    //             wrapperCol={{
    //               offset: 8,
    //               span: 16,
    //             }}
    //             className="flex"
    //           >
    //             <Checkbox>Remember me</Checkbox>
    //             <div className="text-yellow-600">SIGN IN</div>
    //           </Form.Item>

    //           <Form.Item
    //             wrapperCol={{
    //               offset: 12,
    //               span: 16,
    //             }}
    //           >
    //             <Button
    //               type="primary"
    //               htmlType="submit"
    //               className=" bg-slate-600"
    //             >
    //               Submit
    //             </Button>
    //           </Form.Item>
    //         </Form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Row className="d-flex  align-items-center justify-content-center  p-5">
      <Col md="8">
        {signInShow == !true ? (
          <Card>
            <CardHeader>
              <h5 className="title">Edit Profile</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="5">
                    <FormGroup>
                      <label>Company (disabled)</label>
                      <Input
                        defaultValue="Creative Code Inc."
                        disabled
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="3">
                    <FormGroup>
                      <label>Username</label>
                      <Input
                        defaultValue="michael23"
                        placeholder="Username"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Input placeholder="mike@email.com" type="email" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        defaultValue="Mike"
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <Input
                        defaultValue="Andrew"
                        placeholder="Last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        placeholder="Home Address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>City</label>
                      <Input
                        defaultValue="Mike"
                        placeholder="City"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="4">
                    <FormGroup>
                      <label>Country</label>
                      <Input
                        defaultValue="Andrew"
                        placeholder="Country"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label>Postal Code</label>
                      <Input placeholder="ZIP Code" type="number" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        cols="80"
                        defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                        placeholder="Here can be your description"
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <div class="d-flex w-100  justify-content-center">
              <div onClick={() => setSignInShow(true)}>Sign In</div>
              {/* <div class="col">2 of 2</div> */}
            </div>
            <label>About Me</label>
            <CardFooter>
              <Button className="btn-fill" color="primary" type="submit">
                Save
              </Button>
            </CardFooter>
          </Card>
        ) : (
          // <Card>
          //   <CardHeader>
          //     <h5 className="title">Sign Up</h5>
          //   </CardHeader>
          //   <CardBody>
          //     <Form>
          //       <Row>
          //         {/* <Col className="pr-md-1" md="5">
          //           <FormGroup>
          //             <label>Company (disabled)</label>
          //             <Input
          //               defaultValue="Creative Code Inc."
          //               disabled
          //               placeholder="Company"
          //               type="text"
          //             />
          //           </FormGroup>
          //         </Col> */}
          //         <Col className="px-md-1" md="6">
          //           <FormGroup>
          //             <label>Username</label>
          //             <Input
          //               defaultValue="michael23"
          //               placeholder="Username"
          //               type="text"
          //             />
          //           </FormGroup>
          //         </Col>
          //         <Col className="pl-md-1" md="6">
          //           <FormGroup>
          //             <label htmlFor="exampleInputEmail1">Email address</label>
          //             <Input placeholder="mike@email.com" type="email" />
          //           </FormGroup>
          //         </Col>
          //       </Row>
          //       <Row>
          //         <Col className="pr-md-1" md="6">
          //           <FormGroup>
          //             <label>First Name</label>
          //             <Input
          //               defaultValue="Mike"
          //               placeholder="Company"
          //               type="text"
          //             />
          //           </FormGroup>
          //         </Col>
          //         <Col className="pl-md-1" md="6">
          //           <FormGroup>
          //             <label>Last Name</label>
          //             <Input
          //               defaultValue="Andrew"
          //               placeholder="Last Name"
          //               type="text"
          //             />
          //           </FormGroup>
          //         </Col>
          //       </Row>
          //       <Row>
          //         <Col md="12">
          //           <FormGroup>
          //             <label>Password</label>
          //             <Input
          //               defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
          //               placeholder="Home Address"
          //               type="text"
          //             />
          //           </FormGroup>
          //         </Col>
          //       </Row>
          //       {/* <Row>
          //         <Col className="pr-md-1" md="4">
          //           <FormGroup>
          //             <label>City</label>
          //             <Input
          //               defaultValue="Mike"
          //               placeholder="City"
          //               type="text"
          //             />
          //           </FormGroup>
          //         </Col>
          //         <Col className="px-md-1" md="4">
          //           <FormGroup>
          //             <label>Country</label>
          //             <Input
          //               defaultValue="Andrew"
          //               placeholder="Country"
          //               type="text"
          //             />
          //           </FormGroup>
          //         </Col>
          //         <Col className="pl-md-1" md="4">
          //           <FormGroup>
          //             <label>Postal Code</label>
          //             <Input placeholder="ZIP Code" type="number" />
          //           </FormGroup>
          //         </Col>
          //       </Row>
          //       <Row>
          //         <Col md="8">
          //           <FormGroup>
          //             <label>About Me</label>
          //             <Input
          //               cols="80"
          //               defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
          //                   that two seat Lambo."
          //               placeholder="Here can be your description"
          //               rows="4"
          //               type="textarea"
          //             />
          //           </FormGroup>
          //         </Col>
          //       </Row> */}
          //     </Form>
          //   </CardBody>
          //   <div class="d-flex w-100  justify-content-center">
          //     <div>Sign In</div>
          //     {/* <div class="col">2 of 2</div> */}
          //   </div>

          //   <CardFooter>
          //     <Button className="btn-fill" color="primary" type="submit">
          //       Save
          //     </Button>
          //     <div>
          //       <OtpInput
          //         style={{ height: 50, width: 50 }}
          //         value={otp}
          //         onChange={setOtp}
          //         numInputs={4}
          //         renderSeparator={<span>-</span>}
          //         renderInput={(props) => <input {...props} />}
          //       />
          //     </div>
          //   </CardFooter>
          // </Card>
          <Card>
            <CardFooter>
              <div className="d-flex justify-content-center">
                <OtpInput
                  style={{ height: 50, width: 50 }}
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
            </CardFooter>
          </Card>
        )}
      </Col>
    </Row>
  );
};
