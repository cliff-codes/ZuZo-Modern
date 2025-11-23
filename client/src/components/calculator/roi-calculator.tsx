import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TrendingDown, DollarSign, Users, Clock } from "lucide-react";

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [avgSalary, setAvgSalary] = useState(50000);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  // Calculations
  const annualCostCurrent = teamSize * avgSalary;
  const zuzoHourlyRate = 6.19;
  const zuzoDailyRate = 45;
  const zuzoMonthlyRate = 990;
  
  // Assuming 22 working days per month, 8 hours per day
  const annualCostZuzo = teamSize * zuzoMonthlyRate * 12;
  const savings = annualCostCurrent - annualCostZuzo;
  const savingsPercentage = ((savings / annualCostCurrent) * 100).toFixed(0);
  const monthlySavings = (savings / 12).toFixed(0);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Calculate Your Savings</CardTitle>
          <CardDescription>
            Adjust the parameters to see how much you could save with ZuZo's BPO solutions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <Label className="text-base">Team Size: {teamSize} people</Label>
            <Slider
              value={[teamSize]}
              onValueChange={(value) => setTeamSize(value[0])}
              min={1}
              max={50}
              step={1}
              data-testid="slider-team-size"
            />
            <p className="text-sm text-muted-foreground">
              Number of team members you'd like to outsource
            </p>
          </div>

          <div className="space-y-4">
            <Label htmlFor="avg-salary" className="text-base">
              Average Annual Salary: ${avgSalary.toLocaleString()}
            </Label>
            <Input
              id="avg-salary"
              type="number"
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
              min={20000}
              max={200000}
              step={5000}
              data-testid="input-avg-salary"
            />
            <p className="text-sm text-muted-foreground">
              Average annual salary per team member (including benefits)
            </p>
          </div>

          <div className="space-y-4">
            <Label className="text-base">Hours per Week: {hoursPerWeek}hrs</Label>
            <Slider
              value={[hoursPerWeek]}
              onValueChange={(value) => setHoursPerWeek(value[0])}
              min={10}
              max={60}
              step={5}
              data-testid="slider-hours-per-week"
            />
            <p className="text-sm text-muted-foreground">
              Average hours worked per week per team member
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
          <CardHeader>
            <CardTitle className="font-heading text-2xl flex items-center gap-2">
              <TrendingDown className="h-6 w-6 text-success" />
              Your Potential Savings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Annual Savings
                </div>
                <div className="font-heading font-bold text-3xl text-success" data-testid="text-annual-savings">
                  ${savings.toLocaleString()}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <TrendingDown className="h-4 w-4" />
                  Cost Reduction
                </div>
                <div className="font-heading font-bold text-3xl text-success" data-testid="text-savings-percentage">
                  {savingsPercentage}%
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Annual Cost:</span>
                  <span className="font-semibold" data-testid="text-current-cost">
                    ${annualCostCurrent.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">ZuZo Annual Cost:</span>
                  <span className="font-semibold" data-testid="text-zuzo-cost">
                    ${annualCostZuzo.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="font-medium">Monthly Savings:</span>
                  <span className="font-heading font-bold text-xl text-success" data-testid="text-monthly-savings">
                    ${monthlySavings}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-xl">Additional Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1">48-Hour Deployment</div>
                <p className="text-sm text-muted-foreground">
                  No lengthy recruitment process or training overhead
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1">Flexible Scaling</div>
                <p className="text-sm text-muted-foreground">
                  Scale up or down instantly based on business needs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1">No Hidden Costs</div>
                <p className="text-sm text-muted-foreground">
                  Transparent pricing with no setup fees or long-term contracts
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Link href="/book-demo">
          <Button size="lg" className="w-full" data-testid="button-calculator-book-demo">
            Get Your Custom Proposal
          </Button>
        </Link>
      </div>
    </div>
  );
}
