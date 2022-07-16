import React from "react";
import { Button, Card, Container } from "reactstrap";
import { Link } from "react-router-dom";
import pic from "../something.png"
import { useHistory } from "react-router-dom";
// core components



export default function ComingSoon() {
    const history = useHistory()

    // const gotoWelcome = () => {
    //     if (localStorage.getItem("role") === "User") {
    //         history.push("/user-welcome-dashboard")
    //     }
    //     if (localStorage.getItem("role") === "Lawyer") {
    //         history.push("/lawyer-welcome-dashboard")
    //     }
    // }

    return (



        <section className="section "

        >
            <Container>
                <Card className="card-profile py-lg-7  py-6 px-lg-9  pxx-sm-3  mt-0 shadow ">
                    <div className="px-4">

                        <div className="text-center mt-4">
                            <img className="img-responsive image-fluid" width="300" src={pic} />


                            <p className="mb-0">
                                <span className="font-weight-600 acounthead color-black mb-0">Please Wait</span>
                            </p>
                            <div className="h6 formsublabel mt-1 ">

                                <h2> Something is Happening</h2>
                            </div>

                            <Button
                                className="btn-inner--text text-uppercase"
                                style={{ fontSize: "10px", fontWeight: "750" }}
                                onClick={history.goBack}
                                id="signup"
                            >
                                <span className="btn-inner--text ">Go Back</span>
                            </Button>

                        </div>

                    </div>

                </Card>
            </Container>

        </section>


    )
}
