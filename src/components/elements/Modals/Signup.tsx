import { Formik, Form, Field, ErrorMessage } from 'formik'

import { Portal } from '../../../libs/hooks'
import { useSignup } from '../../../libs/stores'
import { SignupSchema } from '../../../libs/validation'
import { useCreateUser } from '../../../libs/hooks/user'
import { Input } from '../../primitives/Form'

const Signup: React.FC = () => {
  const createUser = useCreateUser()
  const isOpen = useSignup((state) => state.isOpen)
  const toggleSignup = useSignup((state) => state.toggleSignup)
  return (
    isOpen && (
      <Portal selector="#modal-root">
        <div
          onClick={() => toggleSignup()}
          className="fixed w-full min-h-screen bg-black bg-opacity-30 flex justify-center items-center top-0 right-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-20 w-1/2"
          >
            {createUser.isLoading ? (
              <p>Signing up...</p>
            ) : (
              <>
                {createUser.isError ? (
                  <p>an error occured: {createUser.error.message}</p>
                ) : null}

                {createUser.isSuccess ? <p>User created !</p> : null}

                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    const { name, email, password } = values
                    const data = { name, email, password }
                    createUser.mutate(data)
                    setSubmitting(false)
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <label htmlFor="name">
                        Name
                        <Field id="name" type="text" name="name" as={Input} />
                      </label>
                      <ErrorMessage name="name" component="div" />
                      <label htmlFor="email">
                        Email
                        <Field id="email" type="email" name="email" as={Input} />
                      </label>
                      <ErrorMessage name="email" component="div" />
                      <label htmlFor="password">
                        Password
                        <Field
                          id="password"
                          type="password"
                          name="password"
                          as={Input}
                        />
                      </label>
                      <ErrorMessage name="password" component="div" />
                      <label htmlFor="confirmPassword">
                        Confirm Password
                        <Field
                          id="confirmPassword"
                          type="password"
                          name="confirmPassword"
                          as={Input}
                        />
                      </label>
                      <ErrorMessage name="confirmPassword" component="div" />
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </>
            )}
          </div>
        </div>
      </Portal>
    )
  )
}

export default Signup
