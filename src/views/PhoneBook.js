/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Formik } from "formik";
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  CardFooter,
  FormGroup,
  Input,
  Form,
} from "reactstrap";

function PhoneBook() {
  const notificationAlertRef = React.useRef(null);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [loginData, setLoginData] = React.useState();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  return (
    <>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
        style={{ width: "35%", height: "50%" }}
      >
        <ModalHeader>
          {/* <Input placeholder="SEARCH" type="text" /> */}
          <div style={{ color: "white" }}>
            {/* <Card>
              <CardHeader>
                <h5 className="title">Login Page</h5>
              </CardHeader>
              <CardBody> */}
            <Formik
              // validationSchema={schema}
              onSubmit={(data) => setLoginData(data)}
              initialValues={{
                Email: "",
                Password: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-md-1" md="12">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          name="Email"
                          defaultValue="Mike"
                          placeholder="Name"
                          type="text"
                          onChange={handleChange}
                          style={{
                            // color: "white",
                            borderColor: "gray",
                            backgroundColor: "white",
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col
                      className="pl-md-1  "
                      md="12"
                      style={{ margin: "2%", marginBottom: "5%" }}
                    >
                      <FormGroup>
                        <label>PhoneNumber</label>
                        <Input
                          name="Password"
                          defaultValue="Andrew"
                          placeholder="PhoneNumber"
                          type="text"
                          onChange={handleChange}
                          style={{ backgroundColor: "white" }}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <div>
                        <Button
                          style={{
                            marginTop: "-10%",
                            height: "6%",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: "5%",
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
            {/* </CardBody>
              <div class="d-flex w-100  justify-content-center"></div>

              <CardFooter></CardFooter>
            </Card> */}
          </div>
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal>

      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CardTitle tag="h4">USA</CardTitle>
                  <button type="button" onClick={toggleModalSearch}>
                    Open Modal
                  </button>
                </div>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <span>+918983483445</span>
                    <span>BUY</span>
                  </div>
                </Alert>
                <Alert color="info">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <span>+918983483445</span>
                    <span>BUY</span>
                  </div>
                </Alert>
                <Alert color="info">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <span>+918983483445</span>
                    <span>BUY</span>
                  </div>
                </Alert>
                <Alert color="info">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <span>+918983483445</span>
                    <span>BUY</span>
                  </div>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          {/* <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">CANADA</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <span>+918983483445</span>
                    <span>BUY</span>
                  </div>
                </Alert>
                <Alert color="info">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <span>+918983483445</span>
                    <span>BUY</span>
                  </div>
                </Alert>
                <Alert color="info">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <span>+918983483445</span>
                    <span>BUY</span>
                  </div>
                </Alert>
                <Alert color="info">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <span>+918983483445</span>
                    <span>BUY</span>
                  </div>
                </Alert>
              </CardBody>
            </Card>
          </Col> */}
          {/* <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">
                        Notifications Places
                        <p className="category">Click to view notifications</p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tl")}
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default PhoneBook;
