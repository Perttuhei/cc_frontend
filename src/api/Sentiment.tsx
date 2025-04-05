

export const analyze = async (
    text: string,
    setSentiment: (sentiment: { label: string; emoji: string } | null) => void,
    setLoading: (loading: boolean) => void
  ) => {
    setLoading(true);
    setSentiment(null);
    try {
      const response = await fetch("https://cc-module-4-backend-git-cloud-computing-module4-backend.2.rahtiapp.fi/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewText: text }),
      });

      const data = await response.json();
      console.log(data)
      const sentiment = data.sentiment_analysis.toLowerCase();

      const sentimentMap: { [key: string]: { label: string; emoji: string } } = {
      positive: { label: "Positiivinen", emoji: "😊" },
      negative: { label: "Negatiivinen", emoji: "😞" },
      neutral: { label: "Neutraali", emoji: "😐" },
    };

      setSentiment(sentimentMap[sentiment]);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
    setLoading(false);
  };