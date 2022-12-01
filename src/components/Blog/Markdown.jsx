import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./markdown.module.css";

const Markdown = ({ markdown }) => {
  return (
    <span className='text-sm sm:text-lg '>
      <span className={styles.nice}>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  className='bg-slate-900 p-4 rounded-lg' 
                  children={String(children).replace(/\n$/, "")}
                  style={nightOwl}
                  language='javascript'
                  PreTag='div'
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </span>
    </span>
  );
};

export default Markdown;
