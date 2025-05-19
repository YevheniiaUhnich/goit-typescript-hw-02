import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchGalleryWithPhoto } from "./Gallery-api";
import { ImageData } from "./types/ImageData";

const App: React.FC = () => {
  const [gallery, setGallery] = useState<ImageData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  function openModal(): void {
    setIsOpen(true);
  }
  function closeModal(): void {
    setIsOpen(false);
  }

  const handleClick = (img: ImageData): void => {
    setSelectedImage(img);
    openModal();
  };

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setGallery([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const abortController = new AbortController();

    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        setErrorMessage(false);

        const data = await fetchGalleryWithPhoto(
          query,
          page,
          abortController.signal
        );
        console.log("Fetched data:", data);

        setGallery((prev) => [...prev, ...data.query]);
        setTotalPages(Math.min(data.totalPages, 15));
      } catch (error) {
        console.error("Fetch error", error);
        setErrorMessage(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      <ImageModal
        selectedImage={selectedImage}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <ImageGallery sendImages={gallery} handleClick={handleClick} />
      {loading && <Loader />}
      {errorMessage && <ErrorMessage />}

      {gallery.length > 0 && page < totalPages && (
        <LoadMoreBtn setPage={setPage} page={page} />
      )}
    </>
  );
};

export default App;
