import s from "./LoadMoreBtn.module.css";
import React from "react";

interface LoadMoreBtnProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage, page }) => {
  const handleClick = (): void => {
    setPage(page + 1);
  };

  return (
    <div>
      <button onClick={handleClick} className={s.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
