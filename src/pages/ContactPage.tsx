import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [fields, setFields] = useState({
    'Full Name': '',
    'Email Address': '',
    'Phone Number': '',
    'Service Address': '',
    'Message': '',
  });

  const handleChange = (key: keyof typeof fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields['Full Name'] || !fields['Email Address']) return;

    setFormState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields['Full Name'],
          email: fields['Email Address'],
          phone: fields['Phone Number'],
          address: fields['Service Address'],
          message: fields['Message'],
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send.');

      setFormState('success');
      setFields({ 'Full Name': '', 'Email Address': '', 'Phone Number': '', 'Service Address': '', 'Message': '' });
    } catch (err: unknown) {
      setFormState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const textFields = ['Full Name', 'Email Address', 'Phone Number', 'Service Address'] as const;

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white pt-[160px] md:pt-[170px] pb-16 md:pb-20 px-6 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full flex justify-center z-0">
          <img src="/c&elogo-nowords.png" alt="Background Logo" className="w-[300px] md:w-[450px] object-contain grayscale" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark tracking-tighter uppercase mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 border-y-2 border-brand-red"
          >
            <p className="text-brand-red font-bold tracking-widest text-xs md:text-sm uppercase">
              Get a custom, no-obligation quote today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Content Section - Two Columns */}
      <section className="bg-gray-50 py-20 px-6 flex-1 h-full min-h-[calc(100vh-350px)]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex flex-col justify-start"
            >
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter uppercase mb-12">
                Let's Build It <span className="text-brand-red">Right.</span>
              </h2>
              
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-medium mb-12">
                
                <div className="flex items-start gap-8 group cursor-default">
                  <div className="relative w-16 h-16 group-hover:-translate-y-1 transition-transform duration-700 shrink-0">
                    <Phone className="absolute -top-2 -left-4 w-16 h-16 transition-all duration-700 ease-out text-brand-red/10 group-hover:text-brand-dark/10 group-hover:scale-110 group-hover:-translate-x-1" strokeWidth={1} />
                    <Phone className="absolute top-2 left-2 w-10 h-10 transition-colors duration-500 z-10 text-brand-red group-hover:text-brand-dark" strokeWidth={2} />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-black text-brand-dark uppercase tracking-tight text-xl mb-1">Call Us</h3>
                    <p className="opacity-80 font-medium">(337) 842-8378</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group cursor-default">
                  <div className="relative w-16 h-16 group-hover:-translate-y-1 transition-transform duration-700 shrink-0">
                    <MapPin className="absolute -top-2 -left-4 w-16 h-16 transition-all duration-700 ease-out text-brand-yellow/20 group-hover:text-brand-dark/10 group-hover:scale-110 group-hover:-translate-x-1" strokeWidth={1} />
                    <MapPin className="absolute top-2 left-2 w-10 h-10 transition-colors duration-500 z-10 text-brand-yellow group-hover:text-brand-dark" strokeWidth={2} />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-black text-brand-dark uppercase tracking-tight text-xl mb-1">Service Area</h3>
                    <p className="opacity-80 font-medium">Iowa, LA & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group cursor-default">
                  <div className="relative w-16 h-16 group-hover:-translate-y-1 transition-transform duration-700 shrink-0">
                    <Clock className="absolute -top-2 -left-4 w-16 h-16 transition-all duration-700 ease-out text-brand-dark/10 group-hover:text-brand-red/10 group-hover:scale-110 group-hover:-translate-x-1" strokeWidth={1} />
                    <Clock className="absolute top-2 left-2 w-10 h-10 transition-colors duration-500 z-10 text-brand-dark group-hover:text-brand-red" strokeWidth={2} />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-black text-brand-dark uppercase tracking-tight text-xl mb-1">Business Hours</h3>
                    <p className="opacity-80 font-medium">Open 24 Hours</p>
                  </div>
                </div>

              </div>

              {/* Map embedded */}
              <div className="w-full h-[350px] bg-gray-200 border-4 border-white shadow-2xl relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.39415664082!2d-93.10903808402517!3d30.24584984206583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863b9bc88d2d3c93%3A0xeab4fb4b8e88e2cb!2sIowa%2C%20LA%2070647!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>

            </motion.div>

            {/* Right Column: Elaborate Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="h-full lg:pl-10 pt-4">
                <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-10">Quote Request</h3>
                
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-start gap-4 py-12"
                  >
                    <div className="text-6xl">✅</div>
                    <h4 className="text-2xl font-black text-brand-dark tracking-tight">Request Received!</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Thanks for reaching out. We'll review your request and follow up with your custom quote shortly.
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-4 text-brand-red font-bold underline text-sm hover:text-brand-dark transition-colors"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    {textFields.map((field) => (
                      <div key={field} className="relative group w-full">
                        <input
                          type={field === 'Email Address' ? 'email' : 'text'}
                          id={`contact-page-${field}`}
                          value={fields[field]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-brand-dark text-[17px] font-bold tracking-tight focus:outline-none focus:border-brand-red transition-colors peer placeholder-transparent disabled:opacity-50"
                          placeholder={field}
                          required={field === 'Full Name' || field === 'Email Address'}
                          disabled={formState === 'submitting'}
                          onFocus={() => setFocusedInput(field)}
                          onBlur={() => setFocusedInput(null)}
                        />
                        <label
                          htmlFor={`contact-page-${field}`}
                          className="absolute left-0 top-3 text-gray-500 font-bold tracking-tighter uppercase transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-3 peer-placeholder-shown:left-0 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-xs peer-focus:text-brand-red text-xs -top-6"
                        >
                          {field}{(field === 'Full Name' || field === 'Email Address') && ' *'}
                        </label>
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-brand-red"
                          initial={{ width: '0%' }}
                          animate={{ width: focusedInput === field ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    ))}

                    <div className="relative group w-full mt-4">
                      <textarea
                        id="contact-page-Message"
                        rows={4}
                        value={fields['Message']}
                        onChange={(e) => handleChange('Message', e.target.value)}
                        className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-brand-dark text-[17px] font-bold tracking-tight focus:outline-none focus:border-brand-red transition-colors peer placeholder-transparent resize-none disabled:opacity-50"
                        placeholder="Project Details"
                        disabled={formState === 'submitting'}
                        onFocus={() => setFocusedInput('Message')}
                        onBlur={() => setFocusedInput(null)}
                      ></textarea>
                      <label
                        htmlFor="contact-page-Message"
                        className="absolute left-0 top-3 text-gray-500 font-bold tracking-tighter uppercase transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-3 peer-placeholder-shown:left-0 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-xs peer-focus:text-brand-red text-xs -top-6"
                      >
                        Project Details
                      </label>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-brand-red"
                        initial={{ width: '0%' }}
                        animate={{ width: focusedInput === 'Message' ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {formState === 'error' && (
                      <p className="text-red-600 text-sm font-bold bg-red-50 border border-red-200 rounded px-4 py-3">
                        ⚠️ {errorMsg}
                      </p>
                    )}

                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="w-full relative overflow-hidden group z-10 py-5 bg-brand-dark text-white font-black tracking-widest uppercase text-sm transition-colors hover:text-brand-dark shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span className="absolute top-0 left-0 w-full h-0 bg-brand-yellow transition-all duration-300 ease-out group-hover:h-full -z-10" />
                        {formState === 'submitting' ? 'Sending Request...' : 'Submit Request'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
