'use client';

import React from 'react';
import Head from 'next/head';
import {
  Zap,
  Users,
  Brain,
  Target,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

export default function WorkshopPage() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      <Head>
        <title>The Swarm Effect® Workshop | Designing Strategic Narratives for Buy-In</title>
        <meta name="description" content="Build the buy-in narrative your organization needs. A strategic storytelling system for everyday business communication." />
      </Head>

      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 text-center text-sm font-bold tracking-wide">
        Now booking Q3 2025 Executive Workshops. Limited slots remaining.
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            <span>SWARM EFFECT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#why" className="hover:text-amber-500 transition-colors">Why It Matters</a>
            <a href="#learn" className="hover:text-amber-500 transition-colors">What You'll Learn</a>
            <a href="#who" className="hover:text-amber-500 transition-colors">Who It Helps</a>
            <button onClick={scrollToBooking} className="px-5 py-2 bg-amber-500 text-slate-950 font-bold rounded-sm hover:bg-amber-400 transition-colors">
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-bold tracking-wider text-xs uppercase mb-8">
            <span className="animate-pulse">●</span> Executive Workshop
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-white">
            The Swarm Effect®: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
              Designing Strategic Narratives for Buy-In
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 font-medium max-w-2xl mx-auto leading-tight mb-12">
            Where strategy meets story
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToBooking} className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-slate-900 text-lg font-bold rounded-sm hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group">
              Schedule a Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Build the Buy-In Narrative */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
            Build the Buy-In Narrative Your Organization Needs
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Every company talks about innovation and change.
            </p>
            <p className="text-xl font-medium text-white">
              Very few get people to believe in it.
            </p>
            <p className="text-slate-400">
              Most leaders communicate through information, not narrative. Facts inform. Stories move people. The Swarm Effect® gives executives a practical way to turn complex, technical content into messages that earn trust and spark action.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters Now */}
      <section id="why" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-amber-500 font-bold tracking-widest uppercase mb-4">The Context</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why it matters now
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Not only has traditional communication shifted, AI is accelerating change across teams, tools, and expectations. None of it works without buy-in.
                </p>
                <p className="font-medium text-white">
                  The Swarm Effect® teaches leaders to craft buy-in narratives that help people understand, care, and commit.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
              <div className="text-center space-y-4">
                <TrendingUp className="w-32 h-32 mx-auto text-amber-500/30" />
                <p className="text-sm uppercase tracking-widest text-slate-500">Accelerating Change</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="learn" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 font-bold tracking-widest uppercase mb-4">The Outcomes</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              You will learn how to:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Turn complex updates into messages people remember",
                desc: "Transform technical information into narratives that stick in your audience's mind long after the presentation ends."
              },
              {
                icon: Users,
                title: "Communicate change in a way that feels human and believable",
                desc: "Bridge the gap between data-driven insights and human connection to make change initiatives resonate."
              },
              {
                icon: Target,
                title: "Build trust through clarity, contrast, and authenticity",
                desc: "Use proven narrative structures to establish credibility and earn stakeholder confidence."
              },
              {
                icon: Brain,
                title: "Guide audiences from data to decision",
                desc: "Create clear pathways that move people from understanding information to taking action."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all">
                <item.icon className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Shift You're Seeing */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-amber-500 font-bold tracking-widest uppercase mb-4">The Evolution</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The shift you are seeing
            </h2>
          </div>
          
          <div className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Traditional business communication has changed. The TED style of clear ideas, human stories, and concise delivery has set a new expectation for how leaders earn attention and trust.
              </p>
              <p className="text-slate-400">
                Many organizations are still operating and training in the old model. That is not a personal failing. It is a systems issue.
              </p>
              <p className="font-medium text-white">
                The Swarm Effect® helps teams modernize communication without turning anyone into a performer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
              <div className="text-center space-y-4">
                <Lightbulb className="w-32 h-32 mx-auto text-amber-500/30" />
                <p className="text-sm uppercase tracking-widest text-slate-500">Strategic System</p>
              </div>
            </div>
            <div>
              <div className="text-amber-500 font-bold tracking-widest uppercase mb-4">The Framework</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What it is
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  The Swarm Effect® is a strategic storytelling system for everyday business communication.
                </p>
                <p className="text-slate-400">
                  It was developed from years of TED and enterprise work and fits naturally into team meetings, town halls, strategy rollouts, client pitches, and AI transformation initiatives.
                </p>
                <p className="font-medium text-white">
                  This is not about performance. It is about using narrative structure to make ideas stick and decisions happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section id="who" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-500 font-bold tracking-widest uppercase mb-4">The Audience</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Who it helps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Executives who want communication that creates momentum",
                desc: "Leaders who need their messages to drive immediate action, not just polite acknowledgment."
              },
              {
                title: "Technical and data leaders who need influence, not more slides",
                desc: "Engineers and analysts who must translate complex insights into compelling business cases."
              },
              {
                title: "Change makers who must align cross-functional teams",
                desc: "Innovators who need to build consensus and commitment across diverse stakeholder groups."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The result
          </h2>
          <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed mb-4">
            When leaders use story, people do not just understand.
          </p>
          <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
            They believe.
          </p>
          <p className="text-xl text-slate-400 mt-8">
            Belief is what turns change into progress.
          </p>
        </div>
      </section>

      {/* Final CTA / Booking */}
      <section id="booking" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's build your buy-in narrative
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Schedule a short conversation to explore how the Swarm Effect® can raise the level of communication across your team.
          </p>
          
          <button className="px-10 py-5 bg-amber-500 text-slate-900 text-xl font-bold rounded-sm hover:bg-amber-400 transition-all flex items-center justify-center gap-3 mx-auto group">
            Schedule a 20-Minute Discovery Call
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-amber-500 w-6 h-6" fill="currentColor" />
            <span className="font-bold text-lg tracking-tighter text-white">SWARM EFFECT</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 The Swarm Effect®. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

