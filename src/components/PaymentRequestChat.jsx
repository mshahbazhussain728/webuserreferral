import React, { useState, useRef, useEffect } from "react";
import { Search, Send, Paperclip, Menu, MoreVertical, Download, X } from "lucide-react";
import { SideBar } from "../base-component/Sidebar.jsx";

const messages = [
  {
    id: 1,
    text: "Ok I was sure about that because Mr. Smith is terrible on teaching",
    time: "9:45 AM",
    sender: "other",
  },
  {
    id: 2,
    text: "Sure, what did you want to do?",
    time: "11:35 PM",
    sender: "me",
  },
  {
    id: 3,
    text: "How are you doing? I just wanted to see if you wanted to hang out tomorrow.",
    time: "11:33 PM",
    sender: "other",
  },
  {
    id: 4,
    text: "Sure, what did you want to do?",
    time: "11:35 PM",
    sender: "me",
  },
  {
    id: 5,
    text: "Ok I was sure about that because Mr. Smith is terrible on teaching",
    time: "9:45 AM",
    sender: "other",
  },
];

const PaymentRequestChat = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);
  const [showOptions, setShowOptions] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [chatStatus, setChatStatus] = useState("in progress");
  const [isChatClosed, setIsChatClosed] = useState(false);
  const [tempStatusMessage, setTempStatusMessage] = useState("");
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const tempStatusTimeoutRef = useRef(null);
  const chatClosedTimeoutRef = useRef(null);
  
  const chatUser = {
    name: "Muhammad Junaid khan",
    avatar: "https://i.pravatar.cc/200",
  };

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleStatusChange = (status) => {
    setChatStatus(status);
    setShowOptions(false);
    
    // Show temporary status message at end of chat
    const statusMessage = `Chat has been marked as ${status}`;
    setTempStatusMessage(statusMessage);
    
    // Clear any existing timeout
    if (tempStatusTimeoutRef.current) {
      clearTimeout(tempStatusTimeoutRef.current);
    }
    
    if (chatClosedTimeoutRef.current) {
      clearTimeout(chatClosedTimeoutRef.current);
    }
    
    // Hide temporary status after 3 seconds
    tempStatusTimeoutRef.current = setTimeout(() => {
      setTempStatusMessage("");
    }, 3000);
    
    // Show "Chat Closed" text after temp message disappears
    chatClosedTimeoutRef.current = setTimeout(() => {
      setIsChatClosed(true);
    }, 3000);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === "" && !uploadedFile) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: "me",
      file: uploadedFile
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setMessageInput("");
    setUploadedFile(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(2) + ' KB',
        type: file.type
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeUploadedFile = () => {
    setUploadedFile(null);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, tempStatusMessage]);

  // Get status color and text
  const getStatusStyles = () => {
    switch (chatStatus) {
      case "resolved":
        return {
          bgColor: "bg-green-100",
          textColor: "text-green-600",
          displayText: "RESOLVED"
        };
      case "unresolved":
        return {
          bgColor: "bg-red-100",
          textColor: "text-red-600",
          displayText: "UNRESOLVED"
        };
      default:
        return {
          bgColor: "bg-[#E0E0E0]",
          textColor: "text-[#3887FD]",
          displayText: "IN PROGRESS"
        };
    }
  };

  const statusStyles = getStatusStyles();

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">

      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className={`${isDrawerOpen ? 'block' : 'hidden'} xl:block fixed xl:relative z-50`}>
        <SideBar isDrawer={isDrawerOpen} handleDrawer={handleDrawer} />
      </div>

      {/* Overlay for mobile when drawer is open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={handleDrawer}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col xl:ml-[312px] w-full">

        {/* Mobile Header with Purple Bar and Menu Icon */}
        <div className="xl:hidden bg-[#691188] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDrawer}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <Menu size={18} className="text-[#691188]" />
            </button>
            <h1 className="text-base sm:text-lg font-semibold text-white truncate">Payment Request Chat</h1>
          </div>
          <img
            src={chatUser.avatar}
            className="w-10 h-10 rounded-full border-2 border-white flex-shrink-0"
            alt={chatUser.name}
          />
        </div>
     {/* Chat Container with proper spacing */}
        <div className="flex-1 flex items-stretch p-3 sm:p-4 md:p-6 overflow-hidden">
          <div className="w-full max-w-full lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col bg-white rounded-xl shadow overflow-hidden mx-auto">
            
            {/* Chat Header */}
            <div className="border-b">
              {/* Name and Last Seen Section */}
              <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-3 md:py-4 flex-shrink-0">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <img
                    src={chatUser.avatar}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
                    alt={chatUser.name}
                  />
                  <div>
                    <p className="font-semibold text-xs md:text-sm">{chatUser.name}</p>
                    <p className="text-[10px] md:text-xs text-gray-500">
                      Last Seen 11:45 PM
                    </p>
                  </div>
                  {isChatClosed && (
                    <span className="ml-[160px] text-xs md:text-sm text-gray-700 font-medium">Chat Closed</span>
                  )}
                </div>
                <div className="flex items-center gap-2 relative flex-shrink-0">
                  {/* Search Box */}
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 hover:border-gray-400 focus-within:border-[#055860]">
                    <Search
                      size={16}
                      className="text-gray-500 md:w-[18px] md:h-[18px] flex-shrink-0 cursor-pointer hover:text-gray-700"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-[90px] min-w-[100px] md:min-w-[160px] outline-none text-sm bg-transparent placeholder-gray-400"
                    />
                  </div>

                  {/* 3 Dots Outside Border */}
                  <div className="relative">
                    <MoreVertical
                      size={16}
                      className="text-gray-500 md:w-[18px] md:h-[18px] flex-shrink-0 cursor-pointer hover:text-gray-700"
                      onClick={() => setShowOptions(!showOptions)}
                    />
                    {/* 3 dots dropdown menu */}
                    {showOptions && (
                      <div className="absolute right-0 top-6 mt-2 w-25 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <ul className="py-1">
                          <li 
                            onClick={() => handleStatusChange("resolved")}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs text-green-600 font-medium"
                          >
                            Resolved
                          </li>
                          <li 
                            onClick={() => handleStatusChange("unresolved")}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs text-red-600 font-medium"
                          >
                            Unresolved
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Status Section with separate border */}
              <div className="px-3 sm:px-4 md:px-5 py-2 md:py-2.5 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] md:text-xs text-[#055860] font-bold">
                      Status
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-500">
                      Your status {chatStatus}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`inline-block text-[10px] md:text-xs font-medium ${statusStyles.textColor} border ${statusStyles.bgColor} px-2 py-[5px] rounded`}>
                      {statusStyles.displayText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-5 py-3 md:py-4 space-y-3 md:space-y-4 bg-[#F7F8FA]">

              <div className="text-center text-[10px] md:text-xs text-gray-400">
                December 11, 2023
              </div>

              {chatMessages.map((msg) => (
                <div key={msg.id}>
                  {msg.sender === "system" ? (
                    // System message for status changes
                    <div className="text-center my-4">
                      <div className="inline-block bg-gray-200 rounded-full px-4 py-2">
                        <p className="text-xs text-gray-700 font-medium">{msg.text}</p>
                      </div>
                    </div>
                  ) : (
                    // Regular chat messages
                    <div
                      className={`flex ${
                        msg.sender === "me" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[65%] rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm ${
                          msg.sender === "me"
                            ? "bg-[#0F5D63] text-white rounded-br-none"
                            : "bg-white text-gray-700 rounded-bl-none shadow"
                        }`}
                      >
                        {msg.file && (
                          <div className="mb-2 p-2 bg-gray-800 bg-opacity-20 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Download size={12} />
                                <span className="text-xs truncate">{msg.file.name}</span>
                              </div>
                              <span className="text-xs text-gray-400">{msg.file.size}</span>
                            </div>
                          </div>
                        )}
                        {msg.text && <p className="break-words">{msg.text}</p>}
                        <p
                          className={`text-[9px] md:text-[10px] mt-1 text-right ${
                            msg.sender === "me"
                              ? "text-gray-200"
                              : "text-gray-400"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Temporary Status Message at the end of chat */}
              {tempStatusMessage && (
                <div className="text-center my-4 animate-fadeInOut">
                  <div className="inline-block bg-blue-100 rounded-full px-4 py-2">
                    <p className="text-xs text-blue-700 font-medium">{tempStatusMessage}</p>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* File Upload Preview */}
            {uploadedFile && (
              <div className="border-t border-gray-200 px-3 sm:px-4 md:px-5 py-2 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-blue-100 rounded">
                    <Download size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium truncate max-w-[150px] sm:max-w-[200px]">
                      {uploadedFile.name}
                    </p>
                    <p className="text-[10px] text-gray-500">{uploadedFile.size}</p>
                  </div>
                </div>
                <button
                  onClick={removeUploadedFile}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={14} className="text-gray-500" />
                </button>
              </div>
            )}

            {/* Input */}
            <div className="border-t px-3 sm:px-4 md:px-5 py-2.5 md:py-3 flex items-center gap-2 bg-white flex-shrink-0">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={triggerFileInput}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              >
                <Paperclip size={16} className="text-gray-500 md:w-[18px] md:h-[18px]" />
              </button>

              <input
                placeholder="Type here"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 outline-none text-xs sm:text-sm px-3 py-2 bg-gray-100 rounded-full min-w-0"
              />

              <button 
                onClick={handleSendMessage}
                disabled={(!messageInput.trim() && !uploadedFile) || isChatClosed}
                className={`p-2 md:p-2.5 rounded-full transition-colors flex-shrink-0 ${
                  (messageInput.trim() || uploadedFile) && !isChatClosed
                    ? "bg-[#6C2BD9] hover:bg-[#5a24b5] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <Send size={14} className="text-white md:w-[16px] md:h-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Close dropdown when clicking outside */}
      {showOptions && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setShowOptions(false)}
        />
      )}

      {/* Add CSS for fade animation */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .animate-fadeInOut {
          animation: fadeInOut 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PaymentRequestChat;