import { Formik, Form, Field, ErrorMessage } from 'formik'

import { Portal } from '../../../libs/hooks'
import { useLogin } from '../../../libs/stores'
import { LoginSchema } from '../../../libs/validation'

const Login: React.FC = () => {
  const isOpen = useLogin((state) => state.isOpen)
  const toggleLogin = useLogin((state) => state.toggleLogin)
  return (
    isOpen && (
      <Portal selector="#modal-root">
        <div
          onClick={() => toggleLogin()}
          className="fixed w-full min-h-screen bg-black bg-opacity-30 flex justify-center items-center top-0 right-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-20 w-1/2"
          >
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
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

export default Login
