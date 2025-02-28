import React from "react";

type EditIconProps = {
  w?: string | number;
  h?: string | number;
  color?: string;
};

const Remove: React.FC<EditIconProps> = ({
  w = 19,
  h = 20,
  color = "white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24635 20C7.89135 20 6.57035 19.985 5.26335 19.958C3.59135 19.925 2.43435 18.841 2.24535 17.129C1.93035 14.289 1.39135 7.59503 1.38635 7.52803C1.35235 7.11503 1.66035 6.75303 2.07335 6.72003C2.48035 6.70903 2.84835 6.99503 2.88135 7.40703C2.88635 7.47503 3.42435 14.146 3.73635 16.964C3.84335 17.937 4.36835 18.439 5.29435 18.458C7.79435 18.511 10.3454 18.514 13.0954 18.464C14.0794 18.445 14.6114 17.953 14.7214 16.957C15.0314 14.163 15.5714 7.47503 15.5774 7.40703C15.6104 6.99503 15.9754 6.70703 16.3844 6.72003C16.7974 6.75403 17.1054 7.11503 17.0724 7.52803C17.0664 7.59603 16.5244 14.307 16.2124 17.122C16.0184 18.869 14.8644 19.932 13.1224 19.964C11.7894 19.987 10.5034 20 9.24635 20Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.708 4.98932H0.75C0.336 4.98932 0 4.65332 0 4.23932C0 3.82532 0.336 3.48932 0.75 3.48932H17.708C18.122 3.48932 18.458 3.82532 18.458 4.23932C18.458 4.65332 18.122 4.98932 17.708 4.98932Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4406 4.98931C13.3026 4.98931 12.3146 4.17831 12.0906 3.06231L11.8476 1.84631C11.7966 1.66131 11.5856 1.50031 11.3456 1.50031H7.11258C6.87258 1.50031 6.66158 1.66131 6.60058 1.89231L6.36758 3.06231C6.14458 4.17831 5.15558 4.98931 4.01758 4.98931C3.60358 4.98931 3.26758 4.65331 3.26758 4.23931C3.26758 3.8253 3.60358 3.48931 4.01758 3.48931C4.44358 3.48931 4.81358 3.18531 4.89758 2.76731L5.14058 1.55131C5.38758 0.619305 6.19458 0.000305176 7.11258 0.000305176H11.3456C12.2636 0.000305176 13.0706 0.619305 13.3076 1.50631L13.5616 2.76731C13.6446 3.18531 14.0146 3.48931 14.4406 3.48931C14.8546 3.48931 15.1906 3.8253 15.1906 4.23931C15.1906 4.65331 14.8546 4.98931 14.4406 4.98931Z"
        fill={color}
      />
    </svg>
  );
};

export default Remove;
