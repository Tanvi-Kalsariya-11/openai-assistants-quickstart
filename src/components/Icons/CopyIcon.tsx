import classNames from "classnames";
import React from "react";

const CopyIcon = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames("size-4", className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  );
};

export default CopyIcon;
