export function BookingForm() {
  return (
    <div className="w-full space-y-6">
      <iframe
        src="https://cal.com/zuzo-ltd/30min"
        data-testid="cal-booking-embed"
        style={{
          width: "100%",
          height: "700px",
          border: "none",
        }}
        title="Book a Demo with ZuZo"
      />
      <p className="text-sm text-muted-foreground text-center">
        ✓ No credit card required ✓ 30-minute consultation ✓ Custom proposal
        included
      </p>
    </div>
  );
}
