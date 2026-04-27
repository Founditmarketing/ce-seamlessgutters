import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [fields, setFields] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Address: '',
  });

  const handleChange = (key: string, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setButtonPos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setButtonPos({ x: 0, y: 0 });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.Name || !fields.Email) return;

    setFormState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.Name,
          email: fields.Email,
          phone: fields.Phone,
          address: fields.Address,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send.');

      setFormState('success');
      setFields({ Name: '', Email: '', Phone: '', Address: '' });
    } catch (err: unknown) {
      setFormState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-brand-red relative overflow-hidden">
      {/* Faint Background Logo */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-[-5%] md:translate-x-0 opacity-[0.04] pointer-events-none flex justify-center w-full md:w-auto">
        <img src="/c&elogo-nowords.png" alt="Background Logo" className="w-[80vw] sm:w-[400px] md:w-[450px] lg:w-[600px] max-w-none md:max-w-full object-contain brightness-0 invert" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-black text-outline-white tracking-tighter mb-6">
            START A PROJECT.
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Ready to upgrade your home's defense? Drop your details below and we'll get back to you with a custom quote.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl"
        >
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 px-6 flex flex-col items-center gap-3"
            >
              <div className="text-5xl mb-2">✅</div>
              <p className="text-white font-black text-2xl tracking-tight">Message Sent!</p>
              <p className="text-white/80 text-lg">We'll be in touch shortly with your custom quote.</p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-4 text-white/60 underline text-sm hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form className="flex flex-col xl:flex-row items-end justify-center gap-6 md:gap-8" onSubmit={handleSubmit}>
              {(['Name', 'Email', 'Phone', 'Address'] as const).map((field) => (
                <div key={field} className="relative group w-full xl:flex-1">
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
                    id={`hero-${field}`}
                    value={fields[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white/50 py-3 text-white text-lg font-black tracking-tight focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                    placeholder={field}
                    required={field === 'Name' || field === 'Email'}
                    disabled={formState === 'submitting'}
                    onFocus={() => setFocusedInput(field)}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <label
                    htmlFor={`hero-${field}`}
                    className="absolute left-0 top-3 text-white/70 font-bold tracking-tighter uppercase transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-placeholder-shown:left-0 peer-focus:-top-8 peer-focus:left-0 peer-focus:text-sm peer-focus:text-brand-yellow text-sm -top-8 left-0"
                  >
                    {field}{(field === 'Name' || field === 'Email') && ' *'}
                  </label>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-brand-yellow"
                    initial={{ width: '0%' }}
                    animate={{ width: focusedInput === field ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}

              <div className="w-full xl:w-auto mt-6 xl:mt-0">
                <motion.button
                  ref={buttonRef}
                  type="submit"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  animate={{ x: buttonPos.x, y: buttonPos.y }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
                  disabled={formState === 'submitting'}
                  className="relative overflow-hidden group z-10 w-full xl:w-48 py-3.5 bg-transparent border-4 border-white text-white font-black tracking-widest uppercase text-lg transition-colors hover:text-brand-red flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="absolute top-0 left-0 w-full h-0 bg-white transition-all duration-300 ease-out group-hover:h-full -z-10" />
                  {formState === 'submitting' ? 'SENDING...' : 'SUBMIT'}
                </motion.button>
              </div>

              {formState === 'error' && (
                <p className="w-full text-center text-white/90 bg-white/10 rounded py-2 px-4 text-sm font-bold mt-2">
                  ⚠️ {errorMsg}
                </p>
              )}
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
