import { Formik, Form, Field, ErrorMessage } from 'formik'

import { Portal } from '../../../libs/hooks'
import { useSignup } from '../../../libs/stores'
import { SignupSchema } from '../../../libs/validation'
import { useCreateUser } from '../../../libs/hooks/user'

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
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" />
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                  <Field type="password" name="confirmPassword" />
                  <ErrorMessage name="confirmPassword" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Portal>
    )
  )
}

export default Signup
