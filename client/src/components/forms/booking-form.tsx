import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function BookingForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#0066CC" },
          dark: { "cal-brand": "#0066CC" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="rounded-lg overflow-hidden border shadow-lg bg-white">
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
        <div data-testid="cal-booking-embed">
          <Cal
            namespace="30min"
            calLink="zuzo-ltd/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center mt-4">
        ✓ No credit card required ✓ 30-minute consultation ✓ Custom proposal included
      </p>
    </div>
  );
}
