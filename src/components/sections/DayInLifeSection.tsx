"use client";

import { useState } from "react";
import { Clock, Sun, Feather, Moon, BookOpen, Utensils, Sparkles, Heart } from "lucide-react";
import { MediaImage } from "@/components/media/MediaImage";

export function DayInLifeSection() {
  const [activeTab, setActiveTab] = useState<"daycare" | "preschool">("daycare");

  const daycareSchedule = [
    {
      time: "12:00 PM – 1:00 PM",
      title: "Outdoor Nature & Discovery Play",
      description: "Daily contact with nature — sand, soil, plants, and natural outdoor exploration.",
      slot: "day-in-life-outdoor" as const,
      icon: Sun,
    },
    {
      time: "1:00 PM – 2:00 PM",
      title: "Clean Up & Healthy Lunch Routine",
      description: "Handwashing, table manners, and nutritious lunch routine before nap time.",
      slot: undefined,
      icon: Utensils,
    },
    {
      time: "2:00 PM – 4:00 PM",
      title: "Quiet Rest & Sleep Time",
      description: "Peaceful rest environment for toddlers and younger children to recharge.",
      slot: "day-in-life-rest" as const,
      icon: Moon,
    },
    {
      time: "4:00 PM – 4:15 PM",
      title: "Daily Bird Feeding & Animal Care",
      description: "Our signature afternoon moment — children feed birds and learn kindness towards animals.",
      slot: undefined,
      icon: Feather,
      isHighlight: true,
    },
    {
      time: "4:15 PM – 5:00 PM",
      title: "Slides, Swings & Pick-Up Routine",
      description: "Outdoor playground fun followed by homework help and evening parent pick-up.",
      slot: undefined,
      icon: Heart,
    },
  ];

  const preschoolSchedule = [
    { time: "9:00 AM", title: "Morning Storytelling Circle", description: "Interactive storytelling to spark imagination." },
    { time: "9:15 AM", title: "Self-Reading & Picture Books", description: "Building early reading habits and focus." },
    { time: "9:30 AM", title: "Montessori-Influenced Concept Learning", description: "Hands-on activity stations and discovery guidance." },
    { time: "10:15 AM", title: "Foundational Academics", description: "Phonics, English, Urdu, and counting milestone practice." },
    { time: "10:45 AM", title: "Circle Time & Theme Exploration", description: "Geography, world themes, and moral values." },
    { time: "11:15 AM", title: "Snack & Recess", description: "Healthy eating and social interaction." },
    { time: "11:40 AM", title: "STEM & Discovery Activities", description: "Simple science, building blocks, and motor skills." },
    { time: "12:00 PM", title: "Outdoor Play & Half-Day Pickup", description: "Physical movement before morning dismissal." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface/40 border-y border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-honey-accent/20 text-ink font-bold text-xs uppercase tracking-wider">
            Daily Routine
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            A Day of Play, Discovery &amp; Care
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            Our published timetable balances structured learning with daily nature contact, rest, and outdoor play.
          </p>

          {/* Timetable Toggle Tabs */}
          <div className="pt-2 flex justify-center gap-2">
            <button
              onClick={() => setActiveTab("daycare")}
              className={`px-5 py-2.5 rounded-pill font-heading font-bold text-xs transition-all ${
                activeTab === "daycare"
                  ? "bg-brand text-white shadow-sm"
                  : "bg-white text-ink-muted border border-surface hover:bg-surface"
              }`}
            >
              Full-Day Daycare Schedule
            </button>
            <button
              onClick={() => setActiveTab("preschool")}
              className={`px-5 py-2.5 rounded-pill font-heading font-bold text-xs transition-all ${
                activeTab === "preschool"
                  ? "bg-brand text-white shadow-sm"
                  : "bg-white text-ink-muted border border-surface hover:bg-surface"
              }`}
            >
              Preschool Morning Schedule
            </button>
          </div>
        </div>

        {/* Daycare Schedule (Default / Commercial Priority) */}
        {activeTab === "daycare" && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* 4:00 PM Bird Feeding Feature Highlight Banner */}
            <div className="bg-gradient-to-r from-brand/10 via-surface to-teal-trust/10 p-6 rounded-card border border-brand/20 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shrink-0 shadow-sm">
                <Feather className="w-6 h-6" />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-brand text-white text-[11px] font-bold uppercase tracking-wider">
                  Signature Feature • 4:00 PM Daily
                </span>
                <h3 className="font-heading font-extrabold text-lg text-ink">
                  Daily Bird Feeding &amp; Animal Interaction
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Every afternoon at 4:00 PM, children gather outdoors to feed local birds and interact gently with nature, learning compassion and responsibility.
                </p>
              </div>
            </div>

            {/* Timeline Items */}
            {daycareSchedule.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-card p-6 border shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all ${
                    item.isHighlight ? "border-brand bg-brand/5" : "border-surface"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-surface text-brand flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-heading font-extrabold text-base text-ink">
                        {item.title}
                      </h4>
                      <span className="text-xs font-bold text-teal-trust bg-surface px-2.5 py-1 rounded-full w-fit">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.slot && (
                    <div className="w-full sm:w-24 h-20 shrink-0 rounded-lg overflow-hidden">
                      <MediaImage slot={item.slot} aspectRatio="aspect-video" className="h-full" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Preschool Morning Schedule */}
        {activeTab === "preschool" && (
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {preschoolSchedule.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-card border border-surface shadow-card space-y-1">
                <span className="text-xs font-bold text-brand bg-surface px-2 py-0.5 rounded-md">
                  {item.time}
                </span>
                <h4 className="font-heading font-bold text-sm text-ink pt-1">{item.title}</h4>
                <p className="text-xs text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
