import { ClipLoader } from "react-spinners";
import React from "react";

interface LoaderProps {
  size?: number;
  color?: string;
  loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  size = 60,
  color = "#6E58E9",
  loading = true,
}) => {
  return <ClipLoader color={color} size={size} loading={loading} />;
};

export default Loader;
