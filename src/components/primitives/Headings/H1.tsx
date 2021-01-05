type H1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

const H1: React.FC<H1Props> = ({ children, className, ...props }) => (
  <h1 className={`text-8xl${className ? ' ' + className : ''}`} {...props}>
    {children}
  </h1>
)

export default H1
