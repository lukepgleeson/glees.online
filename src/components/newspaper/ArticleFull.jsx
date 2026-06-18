import React, { useRef, useState, useLayoutEffect, useEffect, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import articleImg from '../../assets/NewspaperArticle.png';

export default function ArticleFull({ article, onBack }) {
  const rawBlocks = useMemo(
    () => article.content.split(/\n\n+/).filter(b => b.trim()),
    [article.content]
  );

  const [pageGroups, setPageGroups] = useState(null);
  const [page, setPage] = useState(0);

  const measureRef = useRef(null);
  const colRef = useRef(null); // left column — source of truth for available height

  const buildPages = useCallback(() => {
    if (!measureRef.current || !colRef.current) return;
    const colH = colRef.current.offsetHeight;
    if (!colH) return;

    const children = Array.from(measureRef.current.children);
    const groups = [];
    let group = [[], []];
    let col = 0;
    let accumulated = 0;

    children.forEach((child, i) => {
      const style = window.getComputedStyle(child);
      const marginBottom = parseFloat(style.marginBottom) || 0;
      const h = child.offsetHeight + marginBottom;

      if (accumulated + h > colH) {
        col++;
        accumulated = 0;
        if (col >= 2) {
          groups.push(group);
          group = [[], []];
          col = 0;
        }
      }
      group[col].push(rawBlocks[i]);
      accumulated += h;
    });

    if (group[0].length || group[1].length) groups.push(group);

    setPageGroups(groups.length ? groups : [[rawBlocks, []]]);
    setPage(0);
  }, [rawBlocks]);

  useLayoutEffect(() => {
    buildPages();
  }, [buildPages]);

  // Rebuild if window is resized (column height changes)
  useEffect(() => {
    const ro = new ResizeObserver(buildPages);
    if (colRef.current) ro.observe(colRef.current);
    return () => ro.disconnect();
  }, [buildPages]);

  const total = pageGroups?.length ?? 1;

  return (
    <div className="article-full-spread" onClick={e => e.stopPropagation()}>
      <div className="article-img-container">
        <img src={articleImg} alt="" className="article-full-bg" />

        {/* Hidden measuring column — same width and font as one page */}
        <div className="article-measure" ref={measureRef}>
          {rawBlocks.map((block, i) => (
            <div key={i} className="article-block">
              <ReactMarkdown>{block}</ReactMarkdown>
            </div>
          ))}
        </div>

        {/* Left page */}
        <div className="article-col article-col-left" ref={colRef}>
          {pageGroups?.[page]?.[0]?.map((block, i) => (
            <div key={i} className="article-block">
              <ReactMarkdown>{block}</ReactMarkdown>
            </div>
          ))}
        </div>

        {/* Right page */}
        <div className="article-col article-col-right">
          {pageGroups?.[page]?.[1]?.map((block, i) => (
            <div key={i} className="article-block">
              <ReactMarkdown>{block}</ReactMarkdown>
            </div>
          ))}
        </div>
      </div>

      <div className="article-nav">
        <button className="article-nav-btn" onClick={onBack}>← Back to paper</button>
        <span className="article-nav-page">{page + 1} / {total}</span>
        <div className="article-nav-arrows">
          <button
            className="article-nav-btn"
            onClick={() => setPage(p => p - 1)}
            disabled={page === 0}
          >◀ Prev</button>
          <button
            className="article-nav-btn"
            onClick={() => setPage(p => p + 1)}
            disabled={page === total - 1}
          >Next ▶</button>
        </div>
      </div>
    </div>
  );
}
