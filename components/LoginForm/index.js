import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Container } from './styles'
import { useAuth } from 'lib/useUser';

const LoginForm = () => {
    const [message, setMessage] = useState('');
    const auth = useAuth();

    return (
        <Container>
            <Formik
                initialValues={{ email: '', password: '', name: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={
                    async (values, { setSubmitting }) => {
                        try {
                            var googleprovider =  auth.GoogleAuthProvider();
                            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
                            firebase.auth().languageCode = 'pt';
                            provider.setCustomParameters({
                            'login_hint': 'user@example.com'
                            });

                            firebase.auth().signInWithPopup(provider).then(function(result) {
                                // This gives you a Google Access Token. You can use it to access the Google API.
                                var token = result.credential.accessToken;
                                // The signed-in user info.
                                var user = result.user;
                                // ...
                              }).catch(function(error) {
                                // Handle Errors here.
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                // The email of the user's account used.
                                var email = error.email;
                                // The firebase.auth.AuthCredential type that was used.
                                var credential = error.credential;
                                // ...
                              });
                              

                            auth.login(values)
                            setSubmitting(false);
                            //setMessage(`${data.message} - ${data.name}`)
                        } catch (error) {
                            if (error.response) {
                                /*
                                 * The request was made and the server responded with a
                                 * status code that falls out of the range of 2xx
                                 */
                                //Si firebase devuelve un error
                                console.log(error);
                                setMessage(`Error: ${error.response.data.error} (${error.response.data.code})`)
                            } else if (error.request) {
                                /*
                                 * The request was made but no response was received, `error.request`
                                 * is an instance of XMLHttpRequest in the browser and an instance
                                 * of http.ClientRequest in Node.js
                                 */
                                console.log(error.request);
                            } else {
                                // Something happened in setting up the request and triggered an Error
                                console.log('Error', error.message);
                            }
                            console.log(error);
                        }
                    }
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="input_row">
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <p className="error_message">{message}</p>
        </Container>
    )
}

export default LoginForm;