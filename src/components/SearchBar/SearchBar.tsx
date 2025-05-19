import s from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
import toast from "react-hot-toast";
import React from "react";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const initialValues = {
  query: "",
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const input = form.elements.namedItem("query") as HTMLInputElement;
    const query = input.value.trim();

    if (!query) {
      toast.error("The field cannot be empty");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={s.searchBarStyle}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.containerInput}>
          <FcSearch className={s.iconInput} />
          <input
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>

        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
