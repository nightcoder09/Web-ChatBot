import React, { useState } from 'react';
import './Chatbot.css'; // Import the CSS file with the provided styles
import aiBotLogo from './chatbotLogo.png'; // Import the AI BOT logo

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleButtonClick = () => {
        setShowChat(true);
    };

    const handleInputChange = (event) => {
        if (event.key === 'Enter') {
            const userInput = event.target.value;
            setMessages([
                ...messages,
                { text: userInput, sender: 'user' },
                { text: getBotReply(userInput), sender: 'bot' },
            ]);
            event.target.value = '';
        }
    };

    const getBotReply = (userInput) => {
        let botReply = '';
        // Custom bot responses based on user input
        switch (userInput.toLowerCase()) {
            case 'bye':
                botReply = "See you later, thanks for visting";
                break;
            case 'hi':
                botReply = "Hello, thank you for visiting with us";
                break;
            case 'what do you sell?':
                botReply = "We sell coffee and tea";
                break;
            case 'are you cash only?':
                botReply = "We accept most major credit cards, and Paypal";
                break;
            case 'how long does shipping take?':
                botReply = "Delivery takes 2-4 days";
                break;
            case 'thank you!':
                botReply = "Happy to help you regarding the query!";
                break;

            default:
                botReply = 'I apologize, but I did not understand your message. Please Contact to the Customer Support Team';
                break
        }
        return botReply;
    };

    return (
        <div>
            {!showChat && (
                <button className="open-button" onClick={handleButtonClick}>
                    <img src={aiBotLogo} alt="AI BOT Logo" className="ai-bot-logo" />
                </button>
            )}

            {showChat && (
                <div className="chat-container">
                    <div className="chat-window">
                        <div className="message-container">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
                                >
                                    <span className="message-sender">
                                        {message.sender === 'user' ? 'You : ' : 'Rahul : '}
                                    </span>
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="input-row">
                            <input
                                className="user-input"
                                type="text"
                                placeholder="Type your message..."
                                onKeyPress={handleInputChange}
                            />
                            <button className="send-button" onClick={handleInputChange}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default Chatbot;