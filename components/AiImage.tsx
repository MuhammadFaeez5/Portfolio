
import React, { useState, useEffect } from 'react';
import { generateAiImage } from '../services/geminiService';

interface AiImageProps {
  prompt: string;
  className?: string;
  fallback?: string;
}

const AiImage: React.FC<AiImageProps> = ({ prompt, className = "", fallback = "https://picsum.photos/800/600" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchImage = async () => {
      setLoading(true);
      const url = await generateAiImage(prompt);
      if (mounted) {
        setImageUrl(url || fallback);
        setLoading(false);
      }
    };

    fetchImage();
    return () => { mounted = false; };
  }, [prompt, fallback]);

  if (loading) {
    return (
      <div className={`animate-pulse bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center ${className}`}>
        <div className="text-gray-600 text-sm font-medium">Generating AI Vision...</div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg group ${className}`}>
      <img
        src={imageUrl || fallback}
        alt={prompt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default AiImage;
