// import React, { useState, useEffect, useRef } from 'react';
// import { DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, Modal, ModalHeader, ModalBody, CardBody, Button, ModalFooter } from "reactstrap";
// import { connect } from "react-redux";

// import SimpleBar from "simplebar-react";

// import withRouter from "../../../components/withRouter";

// //Import Components
// import UserProfileSidebar from "../../../components/UserProfileSidebar";
// import SelectContact from "../../../components/SelectContact";
// import UserHead from "./UserHead";
// import ImageList from "./ImageList";
// import ChatInput from "./ChatInput";
// import FileList from "./FileList";

// //actions
// import { openUserSidebar, setFullUser } from "../../../redux/actions";

// //Import Images
// import avatar4 from "../../../assets/images/users/avatar-4.jpg";
// import avatar1 from "../../../assets/images/users/avatar-1.jpg";

// //i18n
// import { useTranslation } from 'react-i18next';

// function UserChat(props) {

//     const ref = useRef();

//     const [modal, setModal] = useState(false);

//     /* intilize t variable for multi language implementation */
//     const { t } = useTranslation();

//     //demo conversation messages
//     //userType must be required
//     const [allUsers] = useState(props.recentChatList);
//     const [chatMessages, setchatMessages] = useState(props.recentChatList[props.active_user].messages);

//     useEffect(() => {
//         setchatMessages(props.recentChatList[props.active_user].messages);
//         ref.current.recalculate();
//         if (ref.current.el) {
//             ref.current.getScrollElement().scrollTop = ref.current.getScrollElement().scrollHeight;
//         }
//     }, [props.active_user, props.recentChatList]);

//     const toggle = () => setModal(!modal);

//     const addMessage = (message, type) => {
//         var messageObj = null;

//         let d = new Date();
//         var n = d.getSeconds();

//         //matches the message type is text, file or image, and create object according to it
//         switch (type) {
//             case "textMessage":
//                 messageObj = {
//                     id: chatMessages.length + 1,
//                     message: message,
//                     time: "00:" + n,
//                     userType: "sender",
//                     image: avatar4,
//                     isFileMessage: false,
//                     isImageMessage: false
//                 }
//                 break;

//             case "fileMessage":
//                 messageObj = {
//                     id: chatMessages.length + 1,
//                     message: 'file',
//                     fileMessage: message.name,
//                     size: message.size,
//                     time: "00:" + n,
//                     userType: "sender",
//                     image: avatar4,
//                     isFileMessage: true,
//                     isImageMessage: false
//                 }
//                 break;

//             case "imageMessage":
//                 var imageMessage = [
//                     { image: message },
//                 ]

//                 messageObj = {
//                     id: chatMessages.length + 1,
//                     message: 'image',
//                     imageMessage: imageMessage,
//                     size: message.size,
//                     time: "00:" + n,
//                     userType: "sender",
//                     image: avatar4,
//                     isImageMessage: true,
//                     isFileMessage: false
//                 }
//                 break;

//             default:
//                 break;
//         }

//         //add message object to chat        
//         setchatMessages([...chatMessages, messageObj]);

//         let copyallUsers = [...allUsers];
//         copyallUsers[props.active_user].messages = [...chatMessages, messageObj];
//         copyallUsers[props.active_user].isTyping = false;
//         props.setFullUser(copyallUsers);

//         scrolltoBottom();
//     }

//     function scrolltoBottom() {
//         if (ref.current.el) {
//             ref.current.getScrollElement().scrollTop = ref.current.getScrollElement().scrollHeight;
//         }
//     }


//     const deleteMessage = (id) => {
//         let conversation = chatMessages;

//         var filtered = conversation.filter(function (item) {
//             return item.id !== id;
//         });

//         setchatMessages(filtered);
//     }



//     return (
//         <React.Fragment>
//             <div className="user-chat w-100 overflow-hidden">

//                 <div className="d-lg-flex">

//                     <div className={props.userSidebar ? "w-70 overflow-hidden position-relative" : "w-100 overflow-hidden position-relative"}>

//                         {/* render user head */}
//                         <UserHead  />

//                         <SimpleBar
//                             style={{ maxHeight: "100%" }}
//                             ref={ref}
//                             className="chat-conversation p-5 p-lg-4"
//                             id="messages">
//                             <ul className="list-unstyled mb-0">


//                                 {
//                                     chatMessages.map((chat, key) =>
//                                         chat.isToday && chat.isToday === true ? <li key={"dayTitle" + key}>
//                                             <div className="chat-day-title">
//                                                 <span className="title">Today</span>
//                                             </div>
//                                         </li> :
//                                             (props.recentChatList[props.active_user].isGroup === true) ?
//                                                 <li key={key} className={chat.userType === "sender" ? "right" : ""}>
//                                                     <div className="conversation-list">

//                                                         <div className="chat-avatar">
//                                                             {chat.userType === "sender" ? <img src={avatar1} alt="chatvia" /> :
//                                                                 props.recentChatList[props.active_user].profilePicture === "Null" ?
//                                                                     <div className="chat-user-img align-self-center me-3">
//                                                                         <div className="avatar-xs">
//                                                                             <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
//                                                                                 {chat.userName && chat.userName.charAt(0)}
//                                                                             </span>
//                                                                         </div>
//                                                                     </div>
//                                                                     : <img src={props.recentChatList[props.active_user].profilePicture} alt="chatvia" />
//                                                             }
//                                                         </div>

//                                                         <div className="user-chat-content">
//                                                             <div className="ctext-wrap">
//                                                                 <div className="ctext-wrap-content">
//                                                                     {
//                                                                         chat.message &&
//                                                                         <p className="mb-0">
//                                                                             {chat.message}
//                                                                         </p>
//                                                                     }
//                                                                     {
//                                                                         chat.imageMessage &&
//                                                                         // image list component
//                                                                         <ImageList images={chat.imageMessage} />
//                                                                     }
//                                                                     {
//                                                                         chat.fileMessage &&
//                                                                         //file input component
//                                                                         <FileList fileName={chat.fileMessage} fileSize={chat.size} />
//                                                                     }
//                                                                     {
//                                                                         chat.isTyping &&
//                                                                         <p className="mb-0">
//                                                                             typing
//                                                                             <span className="animate-typing">
//                                                                                 <span className="dot ms-1"></span>
//                                                                                 <span className="dot ms-1"></span>
//                                                                                 <span className="dot ms-1"></span>
//                                                                             </span>
//                                                                         </p>
//                                                                     }
//                                                                     {
//                                                                         !chat.isTyping && <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">{chat.time}</span></p>
//                                                                     }
//                                                                 </div>
//                                                                 {
//                                                                     !chat.isTyping &&
//                                                                     <UncontrolledDropdown className="align-self-start">
//                                                                         <DropdownToggle tag="a" className="text-muted ms-1">
//                                                                             <i className="ri-more-2-fill"></i>
//                                                                         </DropdownToggle>
//                                                                         <DropdownMenu>
//                                                                             <DropdownItem>{t('Copy')} <i className="ri-file-copy-line float-end text-muted"></i></DropdownItem>
//                                                                             <DropdownItem>{t('Save')} <i className="ri-save-line float-end text-muted"></i></DropdownItem>
//                                                                             <DropdownItem onClick={toggle}>Forward <i className="ri-chat-forward-line float-end text-muted"></i></DropdownItem>
//                                                                             <DropdownItem onClick={() => deleteMessage(chat.id)}>Delete <i className="ri-delete-bin-line float-end text-muted"></i></DropdownItem>
//                                                                         </DropdownMenu>
//                                                                     </UncontrolledDropdown>
//                                                                 }

//                                                             </div>
//                                                             {
//                                                                 <div className="conversation-name">{chat.userType === "sender" ? "Dhruv Vyas" : chat.userName}</div>
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                                 :
//                                                 <li key={key} className={chat.userType === "sender" ? "right" : ""}>
//                                                     <div className="conversation-list">
//                                                         {
//                                                             //logic for display user name and profile only once, if current and last messaged sent by same receiver
//                                                             chatMessages[key + 1] ? chatMessages[key].userType === chatMessages[key + 1].userType ?

//                                                                 <div className="chat-avatar">
//                                                                     <div className="blank-div"></div>
//                                                                 </div>
//                                                                 :
//                                                                 <div className="chat-avatar">
//                                                                     {chat.userType === "sender" ? <img src={avatar1} alt="chatvia" /> :
//                                                                         props.recentChatList[props.active_user].profilePicture === "Null" ?
//                                                                             <div className="chat-user-img align-self-center me-3">
//                                                                                 <div className="avatar-xs">
//                                                                                     <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
//                                                                                         {props.recentChatList[props.active_user].name.charAt(0)}
//                                                                                     </span>
//                                                                                 </div>
//                                                                             </div>
//                                                                             : <img src={props.recentChatList[props.active_user].profilePicture} alt="chatvia" />
//                                                                     }
//                                                                 </div>
//                                                                 : <div className="chat-avatar">
//                                                                     {chat.userType === "sender" ? <img src={avatar1} alt="chatvia" /> :
//                                                                         props.recentChatList[props.active_user].profilePicture === "Null" ?
//                                                                             <div className="chat-user-img align-self-center me-3">
//                                                                                 <div className="avatar-xs">
//                                                                                     <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
//                                                                                         {props.recentChatList[props.active_user].name.charAt(0)}
//                                                                                     </span>
//                                                                                 </div>
//                                                                             </div>
//                                                                             : <img src={props.recentChatList[props.active_user].profilePicture} alt="chatvia" />
//                                                                     }
//                                                                 </div>
//                                                         }


//                                                         <div className="user-chat-content">
//                                                             <div className="ctext-wrap">
//                                                                 <div className="ctext-wrap-content">
//                                                                     {
//                                                                         chat.message &&
//                                                                         <p className="mb-0">
//                                                                             {chat.message}
//                                                                         </p>
//                                                                     }
//                                                                     {
//                                                                         chat.imageMessage &&
//                                                                         // image list component
//                                                                         <ImageList images={chat.imageMessage} />
//                                                                     }
//                                                                     {
//                                                                         chat.fileMessage &&
//                                                                         //file input component
//                                                                         <FileList fileName={chat.fileMessage} fileSize={chat.size} />
//                                                                     }
//                                                                     {
//                                                                         chat.isTyping &&
//                                                                         <p className="mb-0">
//                                                                             typing
//                                                                             <span className="animate-typing">
//                                                                                 <span className="dot ms-1"></span>
//                                                                                 <span className="dot ms-1"></span>
//                                                                                 <span className="dot ms-1"></span>
//                                                                             </span>
//                                                                         </p>
//                                                                     }
//                                                                     {
//                                                                         !chat.isTyping && <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">{chat.time}</span></p>
//                                                                     }
//                                                                 </div>
//                                                                 {
//                                                                     !chat.isTyping &&
//                                                                     <UncontrolledDropdown className="align-self-start ms-1">
//                                                                         <DropdownToggle tag="a" className="text-muted">
//                                                                             <i className="ri-more-2-fill"></i>
//                                                                         </DropdownToggle>
//                                                                         <DropdownMenu>
//                                                                             <DropdownItem>{t('Copy')} <i className="ri-file-copy-line float-end text-muted"></i></DropdownItem>
//                                                                             <DropdownItem>{t('Save')} <i className="ri-save-line float-end text-muted"></i></DropdownItem>
//                                                                             <DropdownItem onClick={toggle}>Forward <i className="ri-chat-forward-line float-end text-muted"></i></DropdownItem>
//                                                                             <DropdownItem onClick={() => deleteMessage(chat.id)}>Delete <i className="ri-delete-bin-line float-end text-muted"></i></DropdownItem>
//                                                                         </DropdownMenu>
//                                                                     </UncontrolledDropdown>
//                                                                 }

//                                                             </div>
//                                                             {
//                                                                 chatMessages[key + 1] ? 
//                                                                 chatMessages[key].userType === chatMessages[key + 1].userType ? null : 

//                                                                 <div className="conversation-name">{chat.userType === "sender" ? 

//                                                                 "Dhruv Vyas" : props.recentChatList[props.active_user].name}</div> : 

//                                                                 <div className="conversation-name">{chat.userType === "sender" ? 
                                                                
//                                                                 "Admin" : props.recentChatList[props.active_user].name}</div>
//                                                             }

//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                     )
//                                 }
//                             </ul>
//                         </SimpleBar>

//                         <Modal backdrop="static" isOpen={modal} centered toggle={toggle}>
//                             <ModalHeader toggle={toggle}>Forward to...</ModalHeader>
//                             <ModalBody>
//                                 <CardBody className="p-2">
//                                     <SimpleBar style={{ maxHeight: "200px" }}>
//                                         <SelectContact handleCheck={() => { }} />
//                                     </SimpleBar>
//                                     <ModalFooter className="border-0">
//                                         <Button color="primary">Forward</Button>
//                                     </ModalFooter>
//                                 </CardBody>
//                             </ModalBody>
//                         </Modal>

//                         <ChatInput onaddMessage={addMessage} />
//                     </div>

//                     <UserProfileSidebar activeUser={props.recentChatList[props.active_user]} />

//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }

// const mapStateToProps = (state) => {
//     const { active_user } = state.Chat;
//     const { userSidebar } = state.Layout;
//     return { active_user, userSidebar };
// };

// export default withRouter(connect(mapStateToProps, { openUserSidebar, setFullUser })(UserChat));












import React, { useState, useEffect, useRef } from 'react';
import { DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, Modal, ModalHeader, ModalBody, CardBody, Button, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import SimpleBar from "simplebar-react";
import withRouter from "../../../components/withRouter";

//Import Components
import UserProfileSidebar from "../../../components/UserProfileSidebar";
import SelectContact from "../../../components/SelectContact";
import UserHead from "./UserHead";
import ImageList from "./ImageList";
import ChatInput from "./ChatInput";
import FileList from "./FileList";
import pic from "../../../assets/images/dp.png"
//actions
import { openUserSidebar, setFullUser } from "../../../redux/actions";

//Import Images
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

//i18n
import { useTranslation } from 'react-i18next';
import { BASE_URL } from '../../../url';

function UserChat(props) {
    const ref = useRef();
    const [modal, setModal] = useState(false);
    const { t } = useTranslation();

    // State for messages, loading and error handling
    const [chatMessages, setChatMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const storedUser = JSON.parse(localStorage.getItem('authUser'));

    const fetchMessages = async () => {
        try {
           // setIsLoading(true);
            setError(null);
    
            const senderId = storedUser?.id;
            let receiverId = senderId === 1 ? 2 : 1;
    
            const response = await fetch(`${BASE_URL}/messages/${senderId}/${receiverId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
    
            const messages = await response.json();
            setChatMessages(transformApiMessages(messages, senderId));
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    

    // useEffect(() => {
    //     fetchMessages();
    // }, [storedUser.authUser?.id, props.router.params?.id]);

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);
    

    // Fetch messages from API
    // useEffect(() => {
    //     const fetchMessages = async () => {
    //         try {
    //             setIsLoading(true);
    //             setError(null);
                
    //             //const senderId = storedUser.id;
    //             const senderId = storedUser?.id;
    //             let receiverId;
    //             if (senderId === 1) {
    //                 receiverId = 2;
    //             } else if (senderId === 2) {
    //                 receiverId = 1;
    //             }else{
    //                 receiverId = 1;
    //             }
    //             console.log(senderId,"idddd",receiverId);
                
    //             // if (!senderId || !receiverId) {
    //             //     throw new Error("Missing sender or receiver ID");
    //             // }

    //             const response = await fetch(`${BASE_URL}/messages/${senderId}/${receiverId}`);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch messages');
    //             }

    //             const messages = await response.json();
    //             setChatMessages(transformApiMessages(messages, senderId));
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchMessages();
    // }, [props.authUser?.id, props.router.params?.id]);

    // Transform API messages to local format
    const transformApiMessages = (apiMessages, currentUserId) => {
        return apiMessages.map(message => ({
            id: message.id,
            message: message.content,
            time: new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            userType: message.senderId === currentUserId ? "sender" : "receiver",
            image: message.senderId === currentUserId ? avatar1 : avatar4,
            isFileMessage: false,
            isImageMessage: false,
            timestamp: message.timestamp
        }));
    };

    const toggle = () => setModal(!modal);

    const sendMessageToAPI = async (content) => {
        try {
            setIsSending(true);
            setError(null);
            
            //const senderId = storedUser.id;
            //const receiverId = props.router.params?.id;
            const senderId = storedUser?.id
            let receiverId;

            if (senderId === 1) {
                receiverId = 2;
            } else if (senderId === 2) {
                receiverId = 1;
            }else{
                receiverId = 1;
            }
            
            if (!senderId || !receiverId) {
                throw new Error("Missing sender or receiver ID");
            }

            const response = await fetch(`${BASE_URL}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    senderId,
                    receiverId,
                    content
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const newMessage = await response.json();
            // Add the new message to our state
            setChatMessages(prev => [
                ...prev,
                ...transformApiMessages([newMessage], senderId)
            ]);
            scrolltoBottom();
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsSending(false);
        }
    };

    const addMessage = async (message, type) => {
        if (type !== "textMessage") {
            // Handle file/image messages locally for now
            let d = new Date();
            var n = d.getSeconds();

            let messageObj;
            if (type === "fileMessage") {
                messageObj = {
                    id: Date.now(), // temporary ID
                    message: 'file',
                    fileMessage: message.name,
                    size: message.size,
                    time: "00:" + n,
                    userType: "sender",
                    image: avatar1,
                    isFileMessage: true,
                    isImageMessage: false
                };
            } else if (type === "imageMessage") {
                messageObj = {
                    id: Date.now(), // temporary ID
                    message: 'image',
                    imageMessage: [{ image: message }],
                    size: message.size,
                    time: "00:" + n,
                    userType: "sender",
                    image: avatar1,
                    isImageMessage: true,
                    isFileMessage: false
                };
            }

            setChatMessages(prev => [...prev, messageObj]);
            scrolltoBottom();
            return;
        }

        try {
            await sendMessageToAPI(message);
        } catch (err) {
            console.error("Failed to send message:", err);
        }
    };

    function scrolltoBottom() {
        if (ref.current?.el) {
            ref.current.getScrollElement().scrollTop = ref.current.getScrollElement().scrollHeight;
        }
    }

    const deleteMessage = (id) => {
        // Note: You might want to implement API call to delete message from server
        setChatMessages(prev => prev.filter(msg => msg.id !== id));
    }

    if (isLoading) {
        return <div className="user-chat w-100 overflow-hidden">Loading messages...</div>;
    }

    if (error) {
        return <div className="user-chat w-100 overflow-hidden">Error: {error}</div>;
    }

    return (
        <React.Fragment>
            <div className="user-chat w-100 overflow-hidden">
                <div className="d-lg-flex">
                    <div className={props.userSidebar ? "w-70 overflow-hidden position-relative" : "w-100 overflow-hidden position-relative"}>
                        <UserHead />

                        <SimpleBar
                            style={{ maxHeight: "100%" }}
                            ref={ref}
                            className="chat-conversation p-5 p-lg-4"
                            id="messages">
                            <ul className="list-unstyled mb-0">
                                {chatMessages.map((chat, key) => (
                                    <li key={key} className={chat.userType === "sender" ? "right" : ""}>
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                {chat.userType === "sender" ? (
                                                    <img src={pic} alt="sender" />
                                                ) : (
                                                    <img src={pic} alt="receiver" />
                                                )}
                                            </div>
                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        {chat.message && !chat.isFileMessage && !chat.isImageMessage && (
                                                            <p className="mb-0">{chat.message}</p>
                                                        )}
                                                        {/* {chat.imageMessage && <ImageList images={chat.imageMessage} />} */}
                                                        {chat.fileMessage && <FileList fileName={chat.fileMessage} fileSize={chat.size} />}
                                                        <p className="chat-time mb-0">
                                                            <i className="ri-time-line align-middle"></i> 
                                                            <span className="align-middle">{chat.time}</span>
                                                        </p>
                                                    </div>
                                                    <UncontrolledDropdown className="align-self-start ms-1">
                                                        <DropdownToggle tag="a" className="text-muted">
                                                            <i className="ri-more-2-fill"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem>{t('Copy')} <i className="ri-file-copy-line float-end text-muted"></i></DropdownItem>
                                                            <DropdownItem>{t('Save')} <i className="ri-save-line float-end text-muted"></i></DropdownItem>
                                                            <DropdownItem onClick={toggle}>Forward <i className="ri-chat-forward-line float-end text-muted"></i></DropdownItem>
                                                            <DropdownItem onClick={() => deleteMessage(chat.id)}>Delete <i className="ri-delete-bin-line float-end text-muted"></i></DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                                {/* <div className="conversation-name">
                                                    {chat.userType === "sender" ? "You" : "Other User"}
                                                </div> */}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </SimpleBar>

                        <Modal backdrop="static" isOpen={modal} centered toggle={toggle}>
                            <ModalHeader toggle={toggle}>Forward to...</ModalHeader>
                            <ModalBody>
                                <CardBody className="p-2">
                                    <SimpleBar style={{ maxHeight: "200px" }}>
                                        <SelectContact handleCheck={() => { }} />
                                    </SimpleBar>
                                    <ModalFooter className="border-0">
                                        <Button color="primary">Forward</Button>
                                    </ModalFooter>
                                </CardBody>
                            </ModalBody>
                        </Modal>

                        <ChatInput onaddMessage={addMessage} />
                    </div>

                    <UserProfileSidebar activeUser={props.recentChatList[props.active_user]} />
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    const { active_user } = state.Chat;
    const { userSidebar } = state.Layout;
    const { authUser } = state.Auth;
    return { active_user, userSidebar, authUser };
};

export default withRouter(connect(mapStateToProps, { openUserSidebar, setFullUser })(UserChat));