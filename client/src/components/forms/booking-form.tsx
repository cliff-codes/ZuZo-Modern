export function BookingForm() {
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

        {/* Calendar Embed */}
        <div 
          className="relative overflow-y-auto"
          style={{
            height: "500px",
          }}
        >
          <iframe
            src="https://cal.com/zuzo-ltd/30min"
            data-testid="cal-booking-embed"
            style={{
              width: "100%",
              height: "600px",
              border: "none",
              position: "relative",
              top: "-80px",
            }}
            title="Book a Demo with ZuZo"
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        ✓ No credit card required ✓ 30-minute consultation ✓ Custom proposal included
      </p>
    </div>
  );
}
