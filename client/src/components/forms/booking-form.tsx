import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function BookingForm() {
  const { toast } = useToast();

  const createBookingMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/bookings", data);
    },
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      
      cal("ui", {
        styles: {
          branding: {
            brandColor: "#0066CC",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: (e: any) => {
          const { data } = e.detail;
          
          createBookingMutation.mutate({
            name: data.responses?.name || "",
            email: data.responses?.email || "",
            company: data.responses?.company || "",
            phone: data.responses?.phone || "",
            preferredDate: new Date(data.startTime).toISOString().split('T')[0],
            preferredTime: new Date(data.startTime).toTimeString().slice(0, 5),
            timezone: data.timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone,
            interestedServices: data.responses?.interestedServices ? 
              (Array.isArray(data.responses.interestedServices) ? data.responses.interestedServices : [data.responses.interestedServices]) : [],
            message: data.responses?.notes || data.responses?.message || "",
          });

          toast({
            title: "Demo Booked Successfully!",
            description: "You'll receive a confirmation email with meeting details shortly.",
          });
        },
      });

      cal("on", {
        action: "bookingCancelled",
        callback: () => {
          toast({
            title: "Booking Cancelled",
            description: "Your booking request was cancelled.",
            variant: "destructive",
          });
        },
      });
    })();
  }, []);

  return (
    <div className="w-full" data-testid="cal-booking-embed">
      <Cal
        calLink="zuzo-ltd/30min"
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
        }}
        config={{
          layout: "month_view",
          theme: "light",
        }}
      />
      <p className="text-sm text-muted-foreground text-center mt-6">
        ✓ No credit card required  ✓ 30-minute consultation  ✓ Custom proposal included
      </p>
    </div>
  );
}
