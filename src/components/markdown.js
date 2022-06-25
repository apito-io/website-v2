import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const Markdown = ({ source, ...props }) => {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]} unwrapDisallowed={true} children={source} {...props} />;
};

export default Markdown;
