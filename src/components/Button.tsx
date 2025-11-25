import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface LinkProps extends BaseProps {
  href: string;
}

type Props = ButtonProps | LinkProps;

const variantClass = {
  primary: "btn-primary",
  secondary: "btn-secondary"
};

export function Button({ children, variant = "primary", className = "", ...props }: Props) {
  const classes = `${variantClass[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line react/button-has-type
  return (
    <button className={classes} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}
