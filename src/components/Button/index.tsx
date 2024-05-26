import { ComponentProps } from 'react'
import { cva } from 'class-variance-authority'

const ButtonStyles = cva([
  "w-full",
])

type ButtonProps = ComponentProps<"button">

export const Button = ({...props} : ButtonProps) => {
  return <button {...props} />
}
