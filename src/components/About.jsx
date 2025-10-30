"use client";
import React from "react";
import {
  CheckCircle2,
  Shield,
  Award,
  Calendar,
  Heart,
  Users,
  CircleCheckBig,
  Star,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#222]">
              Meet    Thrive And Revive


              <span className="block text-primary">    
</span>
            </h2>
<p className="text-[#555] mb-6 leading-relaxed">
  Welcome to <strong>Thrive and Revive</strong> — a space devoted to helping you restore balance, release tension, and reconnect with your body.  
  Our focus is on supporting your overall wellbeing through professional, compassionate, and personalised massage treatments designed to help you thrive in daily life and revive your energy.
</p>

<p className="text-[#666] mb-8 leading-relaxed">
  Whether you’re recovering from physical strain, dealing with muscle tension, or simply seeking a calm moment of relaxation, each treatment is crafted with care and intention.  
  At <strong>Thrive and Revive</strong>, we believe true wellness begins with listening to your body — easing discomfort, promoting circulation, and restoring harmony between mind and movement.
</p>







            {/* Feature List */}
            <div className="space-y-3 mb-6">
              {[
                "Registered Nurse",
                "Aesthetic Medicine Certified",
                "5+ Years Experience",
                "Continuous Professional Development",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CircleCheckBig className="h-5 w-5 text-primary" />
                  <span className="text-[#333]">{item}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield />} text="NMC Registered" />
              <Badge icon={<Award />} text="Aesthetic Certified" />
              <Badge icon={<Calendar />} text="Est. 2019" />
            </div>
          </div>

          {/* Right Column - Image & Cards */}
          <div className="space-y-6">
            {/* Profile Card */}
           <div className="rounded-xl border border-[#EAEAEA] shadow-sm overflow-hidden">
  <div className="relative">
    <img
      src="/hero.jpeg"
      alt="Omobthe Hair Stylist"
      className="object-contain w-135 h-auto"
    />
  </div>
</div>


            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Qualified Professional"
                text="Registered nurse with specialized training"
              />
              <InfoCard
                icon={<Heart className="h-8 w-8 text-primary" />}
                title="Personalized Care"
                text="Tailored treatments for individual needs"
              />
              <InfoCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="500+ Clients"
                text="Trusted by hundreds of satisfied clients"
              />
              <InfoCard
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Natural Results"
                text="Subtle enhancements that look beautiful"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-[#222]">
            What Our Clients Say
          </h3>
          <p className="text-[#777]">Real reviews from real clients</p>
        </div>
{/* Testimonials */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      name: "Anonymous Client",
      service: "Sports Massage, Hot Stone & Manual Lymphatic Drainage",
      review:
        "I’ve been receiving treatments from Louise for over a year — Sports Massage, Hot Stone, and Manual Lymphatic Drainage — and I can’t recommend her enough! Louise is very professional and thorough, assessing me deeply through postural and movement analysis to identify issues and fix them. She’s friendly, reassuring, and truly exceptional at what she does. If you’re looking for an outstanding massage, book with her — you won’t regret it!",
      stylist: "Agility Massage Therapy",
    },
    {
      name: "Michelle Drain",
      service: "Hot Stone Massage",
      review:
        "Louise worked wonders on my back — the hot stone massage was so relaxing that any tension or stress I had just melted away. She checked in about pressure and heat, instantly knowing where I needed extra attention. Whether you want deep tissue or total relaxation, Louise is your woman — knowledgeable, skilled, and a lovely person too.",
      stylist: "Agility Massage Therapy",
    },
    {
      name: "Margaret Moon",
      service: "Manual Lymphatic Drainage & Therapeutic Massage",
      review:
        "Louise is a lovely person with amazing professional skills. She makes you feel safe and truly listened to. After just one session, there was a visible reduction in swelling, less pain, and improved movement — a huge improvement compared to weeks of physiotherapy with no results. I wish I’d found her sooner. Highly recommended!",
      stylist: "Agility Massage Therapy",
    },
  ].map((item, i) => (
    <TestimonialCard key={i} {...item} />
  ))}
</div>



      </div>
    </section>
  );
}

/* Reusable Badge */
function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-primary text-white text-xs px-2 py-1">
      {icon}
      {text}
    </span>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="text-center p-4 rounded-xl border border-[#EAEAEA] shadow-sm bg-white">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-sm mb-1 text-[#333]">{title}</h3>
      <p className="text-xs text-[#777]">{text}</p>
    </div>
  );
}

/* Reusable Testimonial Card */
function TestimonialCard({ name, service, review }) {
  return (
    <div className="rounded-xl border border-[#E5E2E1] shadow-sm bg-white/70 backdrop-blur-sm p-6 flex flex-col justify-between">
      {/* Star Rating */}
      <div className="flex mb-3 text-[#C5A67B]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C5A67B" stroke="#C5A67B" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-[#555] italic mb-4">“{review}”</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#333]">{name}</p>
          <p className="text-xs text-[#777]">{service}</p>
        </div>
        <span className="text-xs text-[#555] border px-2 py-0.5 rounded-md">
          Verified Client
        </span>
      </div>
    </div>
  );
}
