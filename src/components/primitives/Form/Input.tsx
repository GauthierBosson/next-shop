type InputProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    className={`border-black border-solid border${className ? ' ' + className : ''}`}
    {...props}
  />
)

export default Input
