import { useState } from "react";
import { useConversation } from "../../context/owner/ConversationContext.tsx";
import { MoreDotIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown.tsx";
import { DropdownItem } from "../ui/dropdown/DropdownItem.tsx";

interface ChatListProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ChatList({ isOpen, onToggle }: ChatListProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { conversations, selectConversation, selectedConversation } = useConversation();

  const toggleDropdown = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeDropdown = () => {
    setIsSidebarOpen(false);
  };

  const getDisplayNames = (conversation) => {
    return conversation.user_type === "client" ? conversation.locum_name : conversation.institution_name;
  };

  const getLastMessageTime = (messages) => {
    if (!messages || messages.length === 0) return "";
    const lastMessage = messages[messages.length - 1];
    const sentAt = new Date(lastMessage.sent_at);
    const now = new Date();
    const diffMinutes = Math.round((now.getTime() - sentAt.getTime()) / (1000 * 60));
    if (diffMinutes < 60) return `${diffMinutes} mins`;
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)} hours`;
    return `${Math.floor(diffMinutes / 1440)} days`;
  };

  return (
      <div
          className={`flex-col overflow-auto no-scrollbar transition-all duration-300 ${
              isOpen
                  ? "fixed top-0 left-0 z-[999999] h-screen bg-white dark:bg-gray-900"
                  : "hidden lg:flex"
          }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800 lg:hidden">
          <div>
            <h3 className="font-semibold text-gray-800 text-sm dark:text-white/90 sm:text-base">
              Chat
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <div className="relative inline-block">
              <button onClick={toggleDropdown}>
                <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
              </button>
              <Dropdown isOpen={isSidebarOpen} onClose={closeDropdown} className="w-40 p-2">
                <DropdownItem
                    onItemClick={closeDropdown}
                    className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  View More
                </DropdownItem>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  Delete
                </DropdownItem>
              </Dropdown>
            </div>
            <button
                onClick={onToggle}
                className="flex items-center justify-center w-10 h-10 text-gray-700 transition-colors border border-gray-300 rounded-full dark:border-gray-700 dark:text-gray-400 dark:hover:text-white/90"
            >
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92788 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7178 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                    fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col max-h-full px-4 sm:px-5">
          <div className="max-h-full space-y-1 overflow-y-auto custom-scrollbar">
            {conversations.length > 0 ? (
                conversations.map((conversation) => (
                    <div
                        key={conversation.conversation_id}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-white/[0.03] ${
                            selectedConversation?.conversation_id === conversation.conversation_id
                                ? " dark:bg-white/[0.05]"
                                : ""
                        }`}
                        onClick={() => selectConversation(conversation)}
                    >
                      <div className="relative h-12 w-12 rounded-full">
                        <img
                            src={
                              conversation.user_type === "locum"
                                  ? `http://127.0.0.1:8000/${conversation.client_image}`
                                  : conversation.user_type === "client" && conversation.locum_image
                                      ? `http://127.0.0.1:8000${conversation.locum_image}`
                                      : "/default.png"
                            }
                            alt="profile"
                            className="object-cover w-full h-full rounded-full"
                        />

                        <span
                            className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full border-[1.5px] border-white ${
                                conversation.messages && conversation.messages.length > 0 &&
                                conversation.messages.some(
                                    (msg) => !msg.is_read && msg.sender_type !== conversation.user_type
                                )
                                    ? "bg-warning-500"
                                    : "bg-success-500"
                            } dark:border-gray-900`}
                        ></span>
                      </div>
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="text-sm font-medium text-gray-800 dark:text-white/90">
                              {getDisplayNames(conversation)}
                            </h5>
                            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                              {conversation.user_type === "client" ? "Locum" : "Client"}
                            </p>
                          </div>
                         {/* <span className="text-xs text-gray-400">
                      {getLastMessageTime(conversation.messages || [])}
                    </span>*/}
                        </div>
                      </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center p-4">
                  No conversations found.
                </p>
            )}
          </div>
        </div>
      </div>
  );
}