interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'large',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const btnSize = size === 'large' ? '16px' : '12px';
  return (
    <button
      type="button"
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
        font-size: ${btnSize};
      `}</style>
    </button>
  );
};
