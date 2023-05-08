const SyntaxHighlighter = (code: string[]) => {
  const parsedCode = parseCodeString(code);
  return (
    <>
      {parsedCode.map((line, index) => {
        return (
          <span key={`${index}-${line.text}`} className={line.tailwindColor}>
            {line.text}
          </span>
        );
      })}
    </>
  );
};

export default SyntaxHighlighter;

const parseCodeString = (
  code: string[]
): {
  tailwindColor: string;
  text: string;
}[] => {
  const SyntaxColors = {
    p: "oneDarkPurple",
    o: "oneDarkOrange",
    y: "oneDarkYellow",
    g: "oneDarkGreen",
    b: "oneDarkBlue",
    r: "oneDarkRed",
    c: "oneDarkCyan",
    gr: "oneDarkGray",
  };

  const parsedCode = code.map((line) => {
    const lineArr = line.split(" ");
    const color = lineArr[0].toLowerCase() as keyof typeof SyntaxColors;
    const word = lineArr.slice(1).join(" ") as string;
    const tailwindColor = SyntaxColors[color];
    if (!tailwindColor)
      throw new Error("Invalid color use only p, o, y, g, b, r, c, gr");
    return { tailwindColor, text: word };
  });
  return parsedCode;
};
