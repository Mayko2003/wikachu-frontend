import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getItem } from "../../../api/pokemonAPI/Pokemon";

export const useGetItem = (id) => {
  const [item, setItem] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()
  
  const getData = async () => {
    const item = await getItem(id);
    if (item instanceof Error) navigate('/404');
    setItem(item);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])
  
  return{
    ...item,
    isLoading
  }
}
