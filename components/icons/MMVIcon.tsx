import { svgProps } from "@/types/GeneralTypes";

const MMVIcon = (props: svgProps) => {
  return (
    <svg viewBox="0 0 251 251" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="21" y="111" width="208" height="26" fill="#25AEF3" />
      <rect x="21" y="143" width="209" height="26" fill="#25AEF3" />
      <path d="M197.5 57L229.976 111H165.024L197.5 57Z" fill="#25AEF3" />
      <path d="M51.5 57L83.1099 111H19.8901L51.5 57Z" fill="#25AEF3" />
      <path d="M124 24L174.229 111H73.7705L124 24Z" fill="#25AEF3" />
    </svg>
  );
};

export default MMVIcon;
