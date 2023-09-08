import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useParams } from "react-router";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    error,
    data: booking,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    onError: (error) => {
      toast.error(error?.message);
    },
    retry: false,
  });

  return { isLoading, error, booking };
}
