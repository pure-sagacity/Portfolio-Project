import { useState, type JSX, useEffect } from "react";
import { ArrowLeft, Star, X, Sun, Moon } from "lucide-react";
import { addReview, fetchReviews, type Review } from "./reviewsApi";
import { useTheme } from "./contexts/ThemeContext";
import HeroSection from "./components/HeroSection";
import UniqueSection from "./components/UniqueSection";
import AcademicSTEMHighlights from "./components/AcademicStemHighlights";
import TechSection from "./components/TechSection";
import LeadershipSection from "./components/LeadershipSection";
import AthleticSection from "./components/AthleticsSection";
import EntrepreneurshipSection from "./components/EntrepreneurshipSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import PrivacyPolicySection from "./components/PrivacyPolicySection";
import type { PrivacyPolicy } from "./constants/privacyPolicy";

const normalizePath = (path: string) =>
  path === "" ? "/" : path.replace(/\/+$/, "") || "/";

const navigationLinks = [
  { label: "About", href: "#hero" },
  { label: "Unique", href: "#unique" },
  { label: "Projects", href: "#tech" },
  { label: "Leadership", href: "#leadership" },
  { label: "Reviews", href: "#reviews" },
  { label: "Privacy", href: "/privacy" },
];

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [pathname, setPathname] = useState(() =>
    normalizePath(window.location.pathname),
  );
  const [selectedPrivacyPolicy, setSelectedPrivacyPolicy] =
    useState<PrivacyPolicy | null>(null);
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    rating: -1,
    position: "",
    text: "",
  });

  const isPrivacyPage = pathname === "/privacy";

  const formatApiError = (error: unknown): string => {
    if (error && typeof error === "object") {
      const maybeCode = (error as { code?: unknown }).code;
      const maybeMessage = (error as { message?: unknown }).message;
      const code = typeof maybeCode === "string" ? maybeCode : undefined;
      const message =
        typeof maybeMessage === "string" ? maybeMessage : undefined;
      if (code && message) return `${code}: ${message}`;
      if (message) return message;
    }
    return String(error);
  };

  useEffect(() => {
    fetchReviews()
      .then(setReviews)
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    document.title = isPrivacyPage
      ? "Privacy Policy | Maaz's Portfolio"
      : "Maaz's Portfolio";
  }, [isPrivacyPage]);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (typeof IntersectionObserver === "undefined") {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const handleAddReview = () => {
    if (
      !newReview.name ||
      newReview.rating < 1 ||
      newReview.rating > 5 ||
      !newReview.position ||
      !newReview.text
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // Add the new review to the state
    addReview(newReview)
      .then(() => {
        fetchReviews()
          .then(setReviews)
          .catch((error) => {
            console.error("Error fetching reviews after add:", error);
          });
        alert("Review added successfully!");
        setNewReview({ name: "", rating: -1, position: "", text: "" });
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error adding review:", error);
        alert(`Failed to add review: ${formatApiError(error)}`);
        setShowModal(false);
      });
  };

  const renderStars = (rating: number): JSX.Element[] => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  const navigateTo = (nextPath: string) => {
    const normalizedPath = normalizePath(nextPath);
    if (normalizedPath !== pathname) {
      window.history.pushState({}, "", normalizedPath);
      setPathname(normalizedPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openPrivacyPolicy = (policy: PrivacyPolicy) => {
    setSelectedPrivacyPolicy(policy);
  };

  const closePrivacyPolicy = () => {
    setSelectedPrivacyPolicy(null);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-slate-300"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {pathname === "/" && (
        <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur-xl">
          <div
            className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 ${theme === "dark" ? "bg-slate-950/85" : "bg-slate-50/90"}`}
          >
            <a
              href="#hero"
              className={`text-sm font-semibold uppercase tracking-[0.28em] transition-colors ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
            >
              Maaz Khokhar
            </a>
            <nav className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    theme === "dark"
                      ? "text-slate-300 hover:bg-slate-900 hover:text-white"
                      : "text-slate-600 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
      )}

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed right-4 top-4 z-50 rounded-full border p-2.5 shadow-lg transition-all duration-300 hover:shadow-xl ${
          theme === "dark"
            ? "border-slate-700 bg-slate-900/90 text-white hover:bg-slate-800"
            : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
        }`}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </button>

      {isPrivacyPage ? (
        <div className="max-w-5xl px-6 py-12 mx-auto">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <p
                className={`text-sm font-medium uppercase tracking-[0.2em] ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Policy
              </p>
              <h1
                className={`mt-2 text-4xl font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-800"
                }`}
              >
                Privacy Policy
              </h1>
            </div>
            <button
              type="button"
              onClick={() => navigateTo("/")}
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "border-slate-600 bg-slate-800 text-slate-200 hover:border-indigo-400 hover:text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-slate-900"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to portfolio
            </button>
          </div>

          <PrivacyPolicySection onShowPolicy={openPrivacyPolicy} />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <HeroSection />

          <main className="max-w-6xl px-6 py-12 mx-auto">
            <div className="relative">
              <div className="space-y-24 lg:pl-20">
                <section data-reveal className="story-reveal">
                  <UniqueSection />
                </section>
                <section data-reveal className="story-reveal">
                  <AcademicSTEMHighlights />
                </section>
                <section data-reveal className="story-reveal">
                  <TechSection />
                </section>
                <section data-reveal className="story-reveal">
                  <LeadershipSection />
                </section>
                <section data-reveal className="story-reveal">
                  <AthleticSection />
                </section>
                <section data-reveal className="story-reveal">
                  <EntrepreneurshipSection />
                </section>
                <section data-reveal className="story-reveal">
                  <ReviewSection
                    setShowModal={setShowModal}
                    reviews={reviews}
                    renderStars={renderStars}
                  />
                </section>
                <section data-reveal className="story-reveal">
                  <Footer />
                </section>
              </div>
            </div>
          </main>
        </>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            className={`rounded-2xl shadow-2xl w-full max-w-md ${
              theme === "dark" ? "bg-slate-800" : "bg-white"
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
                >
                  Add a Review
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className={`transition-colors ${
                    theme === "dark"
                      ? "text-slate-500 hover:text-slate-300"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, name: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      theme === "dark"
                        ? "border-slate-600 bg-slate-700 text-white"
                        : "border-slate-300 bg-white text-slate-900"
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    value={newReview.position}
                    onChange={(e) =>
                      setNewReview({ ...newReview, position: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      theme === "dark"
                        ? "border-slate-600 bg-slate-700 text-white"
                        : "border-slate-300 bg-white text-slate-900"
                    }`}
                    placeholder="Your job title and company"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() =>
                          setNewReview({ ...newReview, rating: star })
                        }
                        className="text-2xl transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : theme === "dark"
                                ? "text-gray-600"
                                : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Review
                  </label>
                  <textarea
                    value={newReview.text}
                    onChange={(e) =>
                      setNewReview({ ...newReview, text: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      theme === "dark"
                        ? "border-slate-600 bg-slate-700 text-white"
                        : "border-slate-300 bg-white text-slate-900"
                    }`}
                    rows={4}
                    placeholder="Share your experience working with Maaz..."
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className={`flex-1 px-4 py-2 border rounded-lg transition-colors ${
                    theme === "dark"
                      ? "border-slate-600 text-slate-300 bg-slate-700 hover:bg-slate-600"
                      : "border-slate-300 text-slate-700 bg-white hover:bg-slate-50"
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddReview}
                  className="flex-1 px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
                >
                  Add Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <PrivacyPolicyModal
        policy={selectedPrivacyPolicy}
        onClose={closePrivacyPolicy}
      />
    </div>
  );
};

export default App;
