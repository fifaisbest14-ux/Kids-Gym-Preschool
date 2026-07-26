import { Clock, Sun, Dumbbell, BookOpen, Utensils, Home } from "lucide-react";

export function DayInLifeSection() {
  const schedule = [
    {
      time: "8:00 AM – 9:00 AM",
      title: "Arrival & Morning Warm-Up",
      description: "Gentle drop-off, warm teacher greetings, free play, and morning socialization.",
      icon: Sun,
      color: "text-honey-accent bg-honey-accent/10",
    },
    {
      time: "9:00 AM – 10:30 AM",
      title: "Active Kids Gym Session",
      description: "Guided gymnastics apparatus exercises, obstacle courses, core posture, and balance play.",
      icon: Dumbbell,
      color: "text-brand bg-brand/10",
    },
    {
      time: "10:30 AM – 12:00 PM",
      title: "Montessori Learning & Phonics",
      description: "Hands-on alphabet phonics, counting games, sensory stations, and storytelling circle.",
      icon: BookOpen,
      color: "text-teal-trust bg-teal-trust/10",
    },
    {
      time: "12:00 PM – 1:00 PM",
      title: "Healthy Snack & Half-Day Pickup",
      description: "Snack time, handwashing routine, and dismissal for Playgroup & Nursery morning sessions.",
      icon: Utensils,
      color: "text-brand-dark bg-brand-dark/10",
    },
    {
      time: "1:00 PM – 5:00 PM",
      title: "Extended Daycare Rest & Care",
      description: "Quiet rest/nap time, lunch, supervised indoor play, art activities, and evening pickup by 5:00 PM.",
      icon: Home,
      color: "text-teal-trust bg-teal-trust/10",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface/40 border-y border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-honey-accent/20 text-ink font-bold text-xs uppercase tracking-wider">
            Daily Routine
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            A Day in the Life at Kids’ Gym Preschool
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            Our daily schedule balances energetic physical gymnastics with quiet learning focus and nurturing care.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {schedule.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-card p-6 border border-surface shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-floating transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-heading font-extrabold text-lg text-ink">
                      {item.title}
                    </h3>
                    <span className="text-xs font-bold text-brand bg-surface px-2.5 py-1 rounded-full w-fit">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
