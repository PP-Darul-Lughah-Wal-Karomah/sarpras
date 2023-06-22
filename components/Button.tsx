import React from "react";
type ButtonProps = {
  isLoading?: boolean;
  block?: boolean;
} & React.ComponentPropsWithRef<"button">;
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      block = false,
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className="px-4 py-2 rounded-md bg-slate-500 text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
        {...rest}
        disabled={buttonDisabled || isLoading}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
