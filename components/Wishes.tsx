"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);

// =====================================================
// TYPES
// =====================================================

type Attendance = "hadir" | "tidak_hadir" | null;

type Wish = {
  id: number;
  nama: string;
  pesan: string;
  created_at: string;
};

type RSVP = {
  id: number;
  nama: string;
  absen: boolean;
  created_at: string;
};

// =====================================================
// COMPONENT
// =====================================================

export default function Wishes() {
  // =====================================================
  // WISHES STATE
  // =====================================================

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);

  // =====================================================
  // RSVP STATE
  // =====================================================

  const [rsvpName, setRsvpName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  // =====================================================
  // STATUS
  // =====================================================

  const [loading, setLoading] = useState(true);
  const [submittingWish, setSubmittingWish] = useState(false);
  const [submittingRsvp, setSubmittingRsvp] = useState(false);
  const [successType, setSuccessType] = useState<"rsvp" | "wish" | null>(null);

  // =====================================================
  // GET DATA FROM SUPABASE
  // =====================================================

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const [wishesResult, rsvpResult] = await Promise.all([
        supabase
          .from("wishes")
          .select("*")
          .order("created_at", { ascending: false }),

        supabase
          .from("rsvp")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

      if (wishesResult.error) {
        console.error("Error mengambil wishes:", wishesResult.error);
      } else {
        setWishes(wishesResult.data || []);
      }

      if (rsvpResult.error) {
        console.error("Error mengambil RSVP:", rsvpResult.error);
      } else {
        setRsvps(rsvpResult.data || []);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  // =====================================================
  // WISH SUBMIT
  // =====================================================

const handleWishSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name.trim() || !message.trim()) return;

  setSubmittingWish(true);

  const { data, error } = await supabase
    .from("wishes")
    .insert([
      {
        nama: name.trim(),
        pesan: message.trim(),
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error mengirim wish:", error);
    alert("Ucapan gagal dikirim. Coba lagi.");
    setSubmittingWish(false);
    return;
  }

  // Tambahkan langsung ke tampilan
  setWishes((prev) => [data, ...prev]);

  // Reset form
  setName("");
  setMessage("");

  // Tampilkan custom success modal
  setSuccessType("wish");

  setSubmittingWish(false);
};

  // =====================================================
  // RSVP SUBMIT
  // =====================================================

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!rsvpName.trim() || !attendance) return;

    setSubmittingRsvp(true);

    const { data, error } = await supabase.from("rsvp").insert([
      {
        nama: rsvpName.trim(),
        absen: attendance === "hadir",
      },
    ]);

    if (error) {
      console.error("Error mengirim RSVP:", error);
      alert("RSVP gagal dikirim. Coba lagi.");
      setSubmittingRsvp(false);
      return;
    }

    setSuccessType("rsvp");

    setRsvpName("");
    setAttendance(null);

    setSubmittingRsvp(false);
  };

  return (
    <section
      id="wishes"
      className="relative min-h-[100svh] w-full overflow-hidden px-4 py-20 sm:px-6"
    >
      {/* =====================================================
          FLOATING GOLD SPARKLES
      ====================================================== */}

      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#c99a4b]/50"
          style={{
            left: `${10 + i * 18}%`,
            top: `${8 + (i % 3) * 30}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -14, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto max-w-md">
        <div className="pointer-events-none absolute -inset-4 rounded-[48px] bg-[#c99a4b]/10 blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[48px] border-2 border-[#c99a4b]/70 bg-[#241a10]/78 px-6 py-14 shadow-[0_0_50px_rgba(201,154,75,0.15)] backdrop-blur-[3px] sm:px-9"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#241a10]/40 via-[#241a10]/70 to-[#241a10]/85" />

          <div className="relative z-10 flex flex-col items-center">
            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-center"
            >
              <h2 className="font-script text-5xl italic text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] sm:text-6xl">
                Wishes
              </h2>

              <p className="mt-3 text-sm text-white/70">
                Berikan doa dan ucapan terbaik untuk kami.
              </p>
            </motion.div>

            {/* =================================================
                RSVP BOX
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-8 w-full rounded-3xl border border-[#c99a4b]/30 bg-white/[0.04] p-5"
            >
              <div className="text-center">
                <h3 className="font-script text-3xl italic text-white">RSVP</h3>

                <p className="mt-1 text-xs text-white/50">
                  Konfirmasi kehadiran Anda.
                </p>
              </div>

              <form onSubmit={handleRsvpSubmit} className="mt-5">
                <input
                  type="text"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="Nama"
                  className="w-full rounded-xl border border-[#c99a4b]/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#c99a4b]/70"
                />

                <p className="mt-5 text-center text-xs uppercase tracking-[0.2em] text-white/50">
                  Konfirmasi Kehadiran
                </p>

                <div className="mt-3 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance("hadir")}
                    className={`flex-1 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                      attendance === "hadir"
                        ? "border-[#c99a4b] bg-[#c99a4b] text-[#241a10]"
                        : "border-[#c99a4b]/50 bg-transparent text-white/85 hover:border-[#c99a4b]"
                    }`}
                  >
                    ✓ Hadir
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance("tidak_hadir")}
                    className={`flex-1 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                      attendance === "tidak_hadir"
                        ? "border-[#c99a4b] bg-[#c99a4b] text-[#241a10]"
                        : "border-[#c99a4b]/50 bg-transparent text-white/85 hover:border-[#c99a4b]"
                    }`}
                  >
                    ✕ Tidak Hadir
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={submittingRsvp}
                  className="mt-5 w-full rounded-full bg-gradient-to-r from-[#c99a4b] to-[#dcb872] py-3 text-sm font-semibold tracking-wide text-[#241a10] shadow-lg transition-transform active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submittingRsvp ? "Mengirim..." : "Kirim RSVP"}
                </button>
              </form>
            </motion.div>

            {/* =================================================
                WISHES BOX
            ================================================== */}

            <motion.form
              onSubmit={handleWishSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-6 w-full rounded-3xl border border-[#c99a4b]/30 bg-white/[0.04] p-5"
            >
              <div className="text-center">
                <h3 className="font-script text-3xl italic text-white">
                  Kartu Ucapan
                </h3>

                <p className="mt-1 text-xs text-white/50">
                  Berikan doa dan ucapan terbaik untuk kami.
                </p>
              </div>

              <div className="mt-5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama"
                  className="w-full rounded-xl border border-[#c99a4b]/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#c99a4b]/70"
                />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis ucapan & doa..."
                  rows={4}
                  className="mt-3 w-full resize-none rounded-xl border border-[#c99a4b]/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#c99a4b]/70"
                />

                <button
                  type="submit"
                  disabled={submittingWish}
                  className="mt-4 w-full rounded-full bg-gradient-to-r from-[#c99a4b] to-[#dcb872] py-3 text-sm font-semibold tracking-wide text-[#241a10] shadow-lg transition-transform active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submittingWish ? "Mengirim..." : "Kirim Ucapan"}
                </button>
              </div>
            </motion.form>

            {/* =================================================
                WISHES LIST
            ================================================== */}

            <div className="mt-8 flex w-full flex-col gap-3">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40">
                Ucapan & Doa
              </p>

              {loading ? (
                <p className="py-5 text-center text-sm text-white/40">
                  Memuat ucapan...
                </p>
              ) : wishes.length === 0 ? (
                <p className="py-5 text-center text-sm text-white/40">
                  Belum ada ucapan.
                </p>
              ) : (
                <AnimatePresence initial={false}>
                  {wishes.map((wish) => (
                    <motion.div
                      key={wish.id}
                      layout
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl border border-[#c99a4b]/25 bg-white/[0.06] px-5 py-4 text-left"
                    >
                      <p className="text-sm font-semibold text-white">
                        {wish.nama}
                      </p>

                      <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                        {wish.pesan}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {successType && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm"
              onClick={() => setSuccessType(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-sm rounded-[32px] border border-[#c99a4b]/50 bg-[#241a10] p-7 text-center shadow-[0_0_60px_rgba(201,154,75,0.2)]"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c99a4b]/40 bg-[#c99a4b]/10 text-2xl"
                >
                  {successType === "rsvp" ? "💌" : "❤️"}
                </motion.div>

                {/* Title */}
                <h3 className="mt-5 font-script text-4xl italic text-white">
                  {successType === "rsvp"
                    ? "Terima Kasih!"
                    : "Ucapan Terkirim!"}
                </h3>

                {/* Message */}
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {successType === "rsvp"
                    ? "Konfirmasi kehadiran kamu sudah berhasil dikirim."
                    : "Ucapan dan doa kamu sudah berhasil dikirim. Terima kasih atas doanya ❤️"}
                </p>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setSuccessType(null)}
                  className="mt-6 w-full rounded-full bg-gradient-to-r from-[#c99a4b] to-[#dcb872] py-3 text-sm font-semibold text-[#241a10] shadow-lg transition-transform active:scale-[0.98]"
                >
                  Tutup
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {successType && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm"
              onClick={() => setSuccessType(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-sm rounded-[32px] border border-[#c99a4b]/50 bg-[#241a10] p-7 text-center shadow-[0_0_60px_rgba(201,154,75,0.2)]"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c99a4b]/40 bg-[#c99a4b]/10 text-2xl"
                >
                  {successType === "rsvp" ? "💌" : "❤️"}
                </motion.div>

                {/* Title */}
                <h3 className="mt-5 font-script text-4xl italic text-white">
                  {successType === "rsvp"
                    ? "Terima Kasih!"
                    : "Ucapan Terkirim!"}
                </h3>

                {/* Message */}
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {successType === "rsvp"
                    ? "Konfirmasi kehadiran kamu sudah berhasil dikirim."
                    : "Ucapan dan doa kamu sudah berhasil dikirim. Terima kasih atas doanya ❤️"}
                </p>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setSuccessType(null)}
                  className="mt-6 w-full rounded-full bg-gradient-to-r from-[#c99a4b] to-[#dcb872] py-3 text-sm font-semibold text-[#241a10] shadow-lg transition-transform active:scale-[0.98]"
                >
                  Tutup
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
