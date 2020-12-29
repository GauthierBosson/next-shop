import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password not long enough')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password must match'
  ),
})

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})
