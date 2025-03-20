

export const analyze = async (
    setSentiment: (sentiment: { label: string; emoji: string } | null) => void,
    setLoading: (loading: boolean) => void
  ) => {
    setLoading(true);
    setSentiment(null);
    try {
      const sentiments = [
        { label: "Negatiivinen", emoji: "😞" },
        { label: "Neutraali", emoji: "😐" },
        { label: "Positiivinen", emoji: "😊" },
      ];
      const random = sentiments[Math.floor(Math.random() * sentiments.length)];
      setSentiment(random);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
    setLoading(false);
  };