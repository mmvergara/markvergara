type Props = { className?: string };
const Divider = ({ className }: Props) => {
  const classes = () => `${className} border-t-2 border-gray-600 `;
  return <div className={classes()} />;
};
export default Divider;

const xx = () => {
  return <>{true ? "ss" : "sd"}</>;
};
