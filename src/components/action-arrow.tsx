const paths = {
  "up-right": "M7 17 17 7M7 7h10v10",
  "down-right": "m7 7 10 10M17 7v10H7",
  down: "M12 5v14m-6-6 6 6 6-6",
};

export default function ActionArrow({
  direction = "up-right",
}: {
  direction?: keyof typeof paths;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="action-arrow"
      data-direction={direction}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
