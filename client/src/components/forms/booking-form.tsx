export function BookingForm() {
  return (
    <div className="w-full space-y-6">
      <div 
        className="relative overflow-hidden rounded-lg"
        style={{
          height: "550px",
        }}
      >
        <iframe
          src="https://cal.com/zuzo-ltd/30min"
          data-testid="cal-booking-embed"
          style={{
            width: "100%",
            height: "700px",
            border: "none",
            position: "relative",
            top: "-75px",
          }}
          title="Book a Demo with ZuZo"
        />
      </div>
      <p className="text-sm text-muted-foreground text-center">
        ✓ No credit card required ✓ 30-minute consultation ✓ Custom proposal
        included
      </p>
    </div>
  );
}
