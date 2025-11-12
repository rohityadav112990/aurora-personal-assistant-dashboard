import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import responses from '../data/responses.json';

const AiChatPanel = ({ accentColor }) => {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatHistory')) || []);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');
      setIsTyping(true);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = responses[input.toLowerCase()] || "Aurora: I'm here to help! Ask me anything.";
        setMessages(prev => [...prev, { text: aiResponse, sender: 'aurora' }]);
        setIsTyping(false);
      }, 2000);
    }
  };

  return (
    <div className="glassmorphism p-6 h-96 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Chat with Aurora</h2>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-2 p-2 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-white/10'}`}
          >
            {msg.text}
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/10 p-2 rounded"
          >
            Aurora is typing...
          </motion.div>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask Aurora..."
          className="flex-1 p-2 rounded-l bg-white/10"
        />
        <button onClick={sendMessage} className={`p-2 rounded-r bg-[${accentColor}] text-white`}>Send</button>
      </div>
    </div>
  );
};

export default AiChatPanel;
