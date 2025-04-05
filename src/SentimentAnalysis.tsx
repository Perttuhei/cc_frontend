import React, { useState } from "react";
import { Card, CardContent, Button, CircularProgress } from "@mui/material";
import { Textarea } from "@mui/joy"
import { analyze } from "./api/Sentiment";

const SentimentAnalysis: React.FC = () => {
    const [text, setText] = useState("");
    const [sentiment, setSentiment] = useState<{ label: string; emoji: string } | null>(null);
    const [loading, setLoading] = useState(false);
  
    return (
      <div className="main-container">
        <h1 className="title">Sentimenttianalyysi</h1>
        
        {sentiment && (
          <div className="result-container">
            <span className="emoji">{sentiment.emoji}</span>
            <div className="sentiment-label">{sentiment.label}</div>
          </div>
        )}
  
        <Card className="input-container">
          <CardContent className="content">
            <Textarea
              placeholder="Kirjoita teksti analysoitavaksi..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="text-input"
            />
            <Button
              onClick={() => analyze(text, setSentiment, setLoading)}
              className="analyze-button"
              disabled={loading}
            >
              {loading ? <CircularProgress className="loader" size={20} /> : "Analysoi"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default SentimentAnalysis;