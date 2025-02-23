import { Genre } from "@/commom";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
