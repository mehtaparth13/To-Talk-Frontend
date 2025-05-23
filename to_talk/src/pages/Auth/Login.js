// import React, { useCallback, useEffect } from 'react';
// import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup } from 'reactstrap';
// import { connect, useDispatch } from 'react-redux';
// import { Link, Navigate } from 'react-router-dom';
// import withRouter from "../../components/withRouter";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// //i18n
// import { useTranslation } from 'react-i18next';

// //redux store
// import { loginUser, apiError } from '../../redux/actions';

// //Import Images
// import logodark from "../../assets/images/logo-dark.png";
// import logolight from "../../assets/images/logo-light.png";

// /**
//  * Login component
//  * @param {*} props 
//  */
// const Login = (props) => {
//     const dispatch = useDispatch();
//     /* intilize t variable for multi language implementation */
//     const { t } = useTranslation();

//     const clearError = useCallback(() => {
//        dispatch(apiError(""));
//     },[dispatch])

//     useEffect(() => {
//         clearError();
//     }, [clearError])

//     // validation
//     const formik = useFormik({
//         initialValues: {
//             email: 'admin@themesbrand.com',
//             password: '123456'
//         },
//         validationSchema: Yup.object({
//             email: Yup.string().required('Please Enter Your Username'),
//             password: Yup.string().required('Please Enter Your Password')
//         }),
//         onSubmit: values => {
//             props.loginUser(values.email, values.password, props.router.navigate);
//         },
//     });
    
//     if (localStorage.getItem("authUser")) {
//         return <Navigate to="/" />;
//     }

//     document.title = "Login | Chatvia React - Responsive Bootstrap 5 Chat App"

//     return (
//         <React.Fragment>

//             <div className="account-pages my-5 pt-sm-5">
//                 <Container>
//                     <Row className="justify-content-center">
//                         <Col md={8} lg={6} xl={5} >
//                             <div className="text-center mb-4">
//                                 <Link to="/" className="auth-logo mb-5 d-block">
//                                     <img src={logodark} alt="" height="30" className="logo logo-dark" />
//                                     <img src={logolight} alt="" height="30" className="logo logo-light" />
//                                 </Link>

//                                 <h4>{t('Sign in')}</h4>
//                                 <p className="text-muted mb-4">{t('Sign in to continue to Chatvia')}.</p>

//                             </div>

//                             <Card>
//                                 <CardBody className="p-4">
//                                     {
//                                         props.error && <Alert color="danger">{props.error}</Alert>
//                                     }
//                                     <div className="p-3">

//                                         <Form onSubmit={formik.handleSubmit}>

//                                             <div className="mb-3">
//                                                 <Label className="form-label">{t('Username')}</Label>
//                                                 <InputGroup className="mb-3 bg-soft-light rounded-3">
//                                                     <span className="input-group-text text-muted" id="basic-addon3">
//                                                         <i className="ri-user-2-line"></i>
//                                                     </span>
//                                                     <Input
//                                                         type="text"
//                                                         id="email"
//                                                         name="email"
//                                                         className="form-control form-control-lg border-light bg-soft-light"
//                                                         placeholder="Enter email"
//                                                         onChange={formik.handleChange}
//                                                         onBlur={formik.handleBlur}
//                                                         value={formik.values.email}
//                                                         invalid={formik.touched.email && formik.errors.email ? true : false}
//                                                     />
//                                                     {formik.touched.email && formik.errors.email ? (
//                                                         <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
//                                                     ) : null}
//                                                 </InputGroup>
//                                             </div>

//                                             <FormGroup className="mb-4">
//                                                 <div className="float-end">
//                                                     <Link to="/forget-password" className="text-muted font-size-13">{t('Forgot password')}?</Link>
//                                                 </div>
//                                                 <Label className="form-label">{t('Password')}</Label>
//                                                 <InputGroup className="mb-3 bg-soft-light rounded-3">
//                                                     <span className="input-group-text text-muted">
//                                                         <i className="ri-lock-2-line"></i>
//                                                     </span>
//                                                     <Input
//                                                         type="password"
//                                                         id="password"
//                                                         name="password"
//                                                         className="form-control form-control-lg border-light bg-soft-light"
//                                                         placeholder="Enter Password"
//                                                         onChange={formik.handleChange}
//                                                         onBlur={formik.handleBlur}
//                                                         value={formik.values.password}
//                                                         invalid={formik.touched.password && formik.errors.password ? true : false}
//                                                     />
//                                                     {formik.touched.password && formik.errors.password ? (
//                                                         <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
//                                                     ) : null}

//                                                 </InputGroup>
//                                             </FormGroup>

//                                             <div className="form-check mb-4">
//                                                 <Input type="checkbox" className="form-check-input" id="remember-check" />
//                                                 <Label className="form-check-label" htmlFor="remember-check">{t('Remember me')}</Label>
//                                             </div>

//                                             <div className="d-grid">
//                                                 <Button color="primary" block className=" waves-effect waves-light" type="submit">{t('Sign in')}</Button>
//                                             </div>

//                                         </Form>
//                                     </div>
//                                 </CardBody>
//                             </Card>

//                             <div className="mt-5 text-center">
//                                 <p>{t("Don't have an account")} ? <Link to="/register" className="font-weight-medium text-primary"> {t('Signup now')} </Link> </p>
//                                 <p>© {new Date().getFullYear()} {t('Chatvia')}. {t('Crafted with')} <i className="mdi mdi-heart text-danger"></i> {t('by Themesbrand')}</p>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </React.Fragment>
//     )
// }


// const mapStateToProps = (state) => {
//     const { user, loading, error } = state.Auth;
//     return { user, loading, error };
// };

// export default withRouter(connect(mapStateToProps, { loginUser, apiError })(Login));



//Login



import React, { useCallback, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { loginUser, apiError } from '../../redux/actions';

// Import Images
// import logodark from "../../assets/images/logo-dark.png";
// import logolight from "../../assets/images/logo-light.png";
import logo from "../../assets/images/ToTalkLogo.png"
import { BASE_URL } from '../../url';

/**
 * Login component
 * @param {*} props 
 */
const Login = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const clearError = useCallback(() => {
        dispatch(apiError(""));
    }, [dispatch]);

    useEffect(() => {
        clearError();
    }, [clearError]);

    // validation
    const formik = useFormik({
        initialValues: {
            username: '', // Using username instead of email
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Please Enter Your Username'),
            password: Yup.string().required('Please Enter Your Password')
        }),
        onSubmit: async (values) => {
            try {
                // Making the POST request to login API
                const response = await fetch(`${BASE_URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: values.username,
                        password: values.password
                    })
                });
        
                const data = await response.json();
        
                if (response.ok && data.message === 'Login successful') {
                    // Save user information (could be token or user data)
                    localStorage.setItem('authUser', JSON.stringify(data.user));

                    // Navigate to the homepage
                    props.router.navigate('/');
                } else {
                    // Handle login error
                    alert(data.error)
                    const errorMessage = data.error || 'Login failed';
                    dispatch(apiError(errorMessage)); // Dispatch error message to Redux
                }
            } catch (error) {
                // Handle request error
                dispatch(apiError('Something went wrong! Please try again.'));
            }
        },
        // onSubmit: async (values) => {
        //     try {
        //         // Making the POST request to login API
        //         const response = await fetch('http://localhost:3000/api/login', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 username: values.username,
        //                 password: values.password
        //             })
        //         });

        //         const data = await response.json();

        //         if (response.ok && data.message === 'Login successful') {
        //             // Save user information (could be token or user data)
        //             localStorage.setItem('authUser', JSON.stringify(data.user));
        //             // Navigate to the homepage
        //             props.router.navigate('/');
        //         } else {
        //             // Handle login error
        //             dispatch(apiError(data.message || 'Login failed'));
        //         }
        //     } catch (error) {
        //         // Handle request error
        //         dispatch(apiError('Something went wrong! Please try again.'));
        //     }
        // },
    });

    if (localStorage.getItem("authUser")) {
        return <Navigate to="/" />;
    }

    document.title = "Login | Chatvia React - Responsive Bootstrap 5 Chat App";

    return (
        <React.Fragment>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <div className="text-center mb-4">
                                <Link className="auth-logo mb-3 d-block">
                                    <img src={logo} alt="" height="30" className="logo logo-dark" />
                                    {/* <img src={logolight} alt="" height="30" className="logo logo-light" /> */}
                                </Link>
                                <h4>{t('Log in')}</h4>
                                <p className="text-muted mb-4">{t('Sign in to continue to To-Talk')}.</p>
                            </div>

                            <Card>
                                <CardBody className="p-4">
                                    {props.error && <Alert color="danger">{props.error}</Alert>}
                                    <div className="p-3">
                                        <Form onSubmit={formik.handleSubmit}>
                                            <div className="mb-3">
                                                <Label className="form-label">{t('Username')}</Label>
                                                <InputGroup className="mb-3 bg-soft-light rounded-3">
                                                    <span className="input-group-text text-muted" id="basic-addon3">
                                                        <i className="ri-user-2-line"></i>
                                                    </span>
                                                    <Input
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        className="form-control form-control-lg border-light bg-soft-light"
                                                        placeholder="Enter username"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.username}
                                                        invalid={formik.touched.username && formik.errors.username ? true : false}
                                                    />
                                                    {formik.touched.username && formik.errors.username ? (
                                                        <FormFeedback type="invalid">{formik.errors.username}</FormFeedback>
                                                    ) : null}
                                                </InputGroup>
                                            </div>

                                            <FormGroup className="mb-4">
                                                {/* <div className="float-end">
                                                    <Link to="/forget-password" className="text-muted font-size-13">{t('Forgot password')}?</Link>
                                                </div> */}
                                                <Label className="form-label">{t('Password')}</Label>
                                                <InputGroup className="mb-3 bg-soft-light rounded-3">
                                                    <span className="input-group-text text-muted">
                                                        <i className="ri-lock-2-line"></i>
                                                    </span>
                                                    <Input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="form-control form-control-lg border-light bg-soft-light"
                                                        placeholder="Enter Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.password}
                                                        invalid={formik.touched.password && formik.errors.password ? true : false}
                                                    />
                                                    {formik.touched.password && formik.errors.password ? (
                                                        <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                                                    ) : null}
                                                </InputGroup>
                                            </FormGroup>

                                            <div className="form-check mb-4">
                                                <Input type="checkbox" className="form-check-input" id="remember-check" />
                                                <Label className="form-check-label" htmlFor="remember-check">{t('Remember me')}</Label>
                                            </div>

                                            <div className="d-grid">
                                                <Button color="primary" block className=" waves-effect waves-light" type="submit">{t('Log in')}</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>

                            <div className="mt-5 text-center">
                                <p>{t("Don't have an account")} ? <Link to="/register" className="font-weight-medium text-primary"> {t('Signup now')} </Link> </p>
                                <p>© {new Date().getFullYear()} {t('To Talk')} {t('Crafted with')} <i className="mdi mdi-heart text-success"></i> {t('by Dhruv Vyas & Team')}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Login;