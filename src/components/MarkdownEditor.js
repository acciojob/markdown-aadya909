import React, { useState, useEffect } from 'react';
import { marked } from 'marked'; // You need to install 'marked'

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [htmlPreview, setHtmlPreview] = useState('<p class="loading">Loading...</p>');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHtmlPreview(marked(markdown));
    }, 300); // Debounce preview updates

    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter Markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: htmlPreview }}
      />
    </>
  );
}

export default MarkdownEditor;
