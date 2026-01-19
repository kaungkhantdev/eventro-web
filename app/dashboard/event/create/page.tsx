"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { EventCard } from "@/features/event/components/event-card";
import { TicketCard } from "@/features/ticket/components/ticket-card";
import {
  EventPreviewSheet,
  Step1BasicInfo,
  Step2EventDetails,
  Step3TicketsPricing,
} from "@/features/event/components";
import { EventTicket } from "@/features/event/types";

export default function CreateEventPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Form state
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    organizer: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [tickets, setTickets] = useState<EventTicket[]>([]);

  const steps = [
    { number: 1, title: "Basic Information" },
    { number: 2, title: "Event Details" },
    { number: 3, title: "Tickets & Pricing" },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Create New Event</h1>
        <p className="text-sm text-muted-foreground">
          Fill in the details to create your event
        </p>
      </div>

      {/* Steps Indicator - Minimal List Design */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-2 md:gap-3">
              <div
                className={`flex size-8 items-center justify-center rounded-full border-2 transition-all ${
                  currentStep > step.number
                    ? "border-primary bg-primary text-primary-foreground"
                    : currentStep === step.number
                      ? "border-primary bg-background text-primary"
                      : "border-muted-foreground/30 bg-background text-muted-foreground"
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="size-4" />
                ) : (
                  <span className="text-sm font-medium">{step.number}</span>
                )}
              </div>
              <span
                className={`text-xs md:text-sm font-medium whitespace-nowrap ${
                  currentStep >= step.number
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-[2px] w-8 md:w-16 transition-all ${
                  currentStep > step.number
                    ? "bg-primary"
                    : "bg-muted-foreground/20"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Two Column Layout: Form + Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 flex-1">
        {/* Form Card */}
        <Card className="shadow-none h-full rounded-3xl">
          <CardHeader>
            <CardTitle>Step {currentStep}: {steps[currentStep - 1].title}</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="space-y-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <Step1BasicInfo
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}

            {/* Step 2: Event Details */}
            {currentStep === 2 && (
              <Step2EventDetails
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}

            {/* Step 3: Tickets & Pricing */}
            {currentStep === 3 && (
              <Step3TicketsPricing
                tickets={tickets}
                onTicketsChange={setTickets}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                className="btn-lg-outline"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              {currentStep < totalSteps ? (
                <Button className="btn-lg-primary" onClick={handleNext}>Next</Button>
              ) : (
                <Button className="btn-lg-primary">Create Event</Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

        {/* Preview Section */}
        <div className="hidden lg:block">
          <Card className="shadow-none h-full rounded-3xl">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="">
              {/* Event Preview Card */}
              <div className="mb-6">
                <EventCard
                  id="preview"
                  title={formData.eventName || "Your Event Name"}
                  date={formData.startDate ? new Date(formData.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Date"}
                  time={formData.startDate ? new Date(formData.startDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : "Time"}
                  image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                  price={tickets[0]?.price ? `$${tickets[0].price}` : "Free"}
                  organizer={formData.organizer || "Organizer Name"}
                  category={formData.eventType || "General"}
                />
              </div>

              {/* Ticket Preview Card */}
              {tickets.length > 0 && (
                <TicketCard
                  ticket={{
                    id: "preview",
                    eventId: "preview",
                    eventTitle: formData.eventName || "Your Event Name",
                    eventImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
                    ticketNumber: "PREVIEW-0001",
                    status: "active",
                    purchaseDate: new Date().toLocaleDateString(),
                    eventDate: formData.startDate ? new Date(formData.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Date",
                    eventTime: formData.startDate ? new Date(formData.startDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : "Time",
                    eventLocation: formData.location || "Location TBA",
                    quantity: Number(tickets[0]?.quantity) || 1,
                    ticketType: tickets[0]?.ticketType || "General",
                    price: tickets[0]?.price ? `$${tickets[0].price}` : "Free",
                  }}
                />
              )}
              <div className="w-full pt-6">
                <EventPreviewSheet formData={formData} tickets={tickets} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
