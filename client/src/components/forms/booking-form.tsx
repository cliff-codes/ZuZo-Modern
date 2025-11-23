import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function BookingForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light",
      });
    })();
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="rounded-lg overflow-hidden border shadow-lg">
        {/* Header Banner */}
        <div className="bg-primary text-white px-8 py-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Pick a Time That Works for You</h2>
          <p className="text-base mb-4">
            Book your free 30-minute strategy session directly below. Our BPO experts are ready to help you transform your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
              <span>No commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
              <span>Microsoft Teams</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
              <span>Instant confirmation</span>
            </div>
          </div>
        </div>

        {/* Calendar Embed - Using Cal.com React Component */}
        <div className="bg-white min-h-[600px]" data-testid="cal-booking-embed">
          <div
            data-cal-namespace="30min"
            data-cal-link="zuzo-ltd/30min"
            data-cal-config='{"layout":"month_view","theme":"light"}'
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        ✓ No credit card required ✓ 30-minute consultation ✓ Custom proposal included
      </p>
    </div>
  );
}
