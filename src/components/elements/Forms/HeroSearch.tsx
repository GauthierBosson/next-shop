import { Form, Field, Formik } from 'formik'
import { NextRouter } from 'next/router'

const HeroSearch: React.FC<{ router: NextRouter }> = ({ router }) => {
  return (
    <Formik
      initialValues={{
        game: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        router.push(`?search=${values.game}`)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="game" />
          <button type="submit" disabled={isSubmitting}>
            submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default HeroSearch
