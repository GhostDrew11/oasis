import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useCabins() {
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
    onError: () => {
      toast.error(error.message);
    },
  });

  return { isLoading, error, cabins };
}
