export default function Button({
  buttonText,
  onClick,
}: {
  buttonText: string;
  onClick: () => void;
}) {
  return (
    <button className="button" onClick={onClick}>
      {buttonText}
    </button>
  );
}
