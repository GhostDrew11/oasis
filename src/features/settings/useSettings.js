import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
    onError: () => {
      toast.error(error.message);
    },
  });

  return { isLoading, error, settings };
}
