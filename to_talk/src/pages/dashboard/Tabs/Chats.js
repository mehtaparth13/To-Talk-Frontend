// import React, { Component } from 'react';
// import { Input, InputGroup } from "reactstrap";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// //simplebar
// import SimpleBar from "simplebar-react";

// //actions
// import { setconversationNameInOpenChat, activeUser } from "../../../redux/actions";

// //components
// import OnlineUsers from "./OnlineUsers";

// class Chats extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchChat: "",
//             recentChatList: this.props.recentChatList
//         }
//         this.openUserChat = this.openUserChat.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     componentDidMount() {
//         var li = document.getElementById("conversation" + this.props.active_user);
//         if (li) {
//             li.classList.add("active");
//         }
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps !== this.props) {
//             this.setState({
//                 recentChatList: this.props.recentChatList
//             });
//         }
//     }

//     UNSAFE_componentWillReceiveProps(nextProps) {
//         if (this.props.recentChatList !== nextProps.recentChatList) {
//             this.setState({
//                 recentChatList: nextProps.recentChatList,
//             });
//         }
//     }

//     handleChange(e) {
//         this.setState({ searchChat: e.target.value });
//         var search = e.target.value;
//         let conversation = this.state.recentChatList;
//         let filteredArray = [];

//         //find conversation name from array
//         for (let i = 0; i < conversation.length; i++) {
//             if (conversation[i].name.toLowerCase().includes(search) || conversation[i].name.toUpperCase().includes(search))
//                 filteredArray.push(conversation[i]);
//         }

//         //set filtered items to state
//         this.setState({ recentChatList: filteredArray })

//         //if input value is blanck then assign whole recent chatlist to array
//         if (search === "") this.setState({ recentChatList: this.props.recentChatList })
//     }

//     openUserChat(e, chat) {

//         e.preventDefault();

//         //find index of current chat in array
//         var index = this.props.recentChatList.indexOf(chat);

//         // set activeUser 
//         this.props.activeUser(index);

//         var chatList = document.getElementById("chat-list");
//         var clickedItem = e.target;
//         var currentli = null;

//         if (chatList) {
//             var li = chatList.getElementsByTagName("li");
//             //remove coversation user
//             for (var i = 0; i < li.length; ++i) {
//                 if (li[i].classList.contains('active')) {
//                     li[i].classList.remove('active');
//                 }
//             }
//             //find clicked coversation user
//             for (var k = 0; k < li.length; ++k) {
//                 if (li[k].contains(clickedItem)) {
//                     currentli = li[k];
//                     break;
//                 }
//             }
//         }

//         //activation of clicked coversation user
//         if (currentli) {
//             currentli.classList.add('active');
//         }

//         var userChat = document.getElementsByClassName("user-chat");
//         if (userChat) {
//             userChat[0].classList.add("user-chat-show");
//         }

//         //removes unread badge if user clicks
//         var unread = document.getElementById("unRead" + chat.id);
//         if (unread) {
//             unread.style.display = "none";
//         }
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div>
//                     <div className="px-4 pt-4">
//                         <h4 className="mb-4">Chats</h4>
//                         <div className="search-box chat-search-box">
//                             <InputGroup className="mb-3 rounded-3">
//                                 <span className="input-group-text text-muted bg-light pe-1 ps-3" id="basic-addon1">
//                                     <i className="ri-search-line search-icon font-size-18"></i>
//                                 </span>
//                                 <Input type="text" value={this.state.searchChat} onChange={(e) => this.handleChange(e)} className="form-control bg-light" placeholder="Search messages or users" />
//                             </InputGroup>
//                         </div>
//                         {/* Search Box */}
//                     </div>

//                     {/* online users */}
//                     <OnlineUsers />

//                     {/* Start chat-message-list  */}
//                     <div>
//                         <h5 className="mb-3 px-3 font-size-16">Recent</h5>
//                         <SimpleBar className="chat-message-list">

//                             <ul className="list-unstyled chat-list chat-user-list px-2" id="chat-list">
//                                 {
//                                     this.state.recentChatList.map((chat, key) =>
//                                         <li key={key} id={"conversation" + key} className={chat.unRead ? "unread" : chat.isTyping ? "typing" : key === this.props.active_user ? "active" : ""}>
//                                             <Link to="#" onClick={(e) => this.openUserChat(e, chat)}>
//                                                 <div className="d-flex">
//                                                     {
//                                                         chat.profilePicture === "Null" ?
//                                                             <div className={"chat-user-img " + chat.status + " align-self-center ms-0"}>
//                                                                 <div className="avatar-xs">
//                                                                     <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
//                                                                         {chat.name.charAt(0)}
//                                                                     </span>
//                                                                 </div>
//                                                                 {
//                                                                     chat.status && <span className="user-status"></span>
//                                                                 }
//                                                             </div>
//                                                             :
//                                                             <div className={"chat-user-img " + chat.status + " align-self-center ms-0"}>
//                                                                 <img src={chat.profilePicture} className="rounded-circle avatar-xs" alt="chatvia" />
//                                                                 {
//                                                                     chat.status && <span className="user-status"></span>
                                                                                                                                   
//                                                                 }
//                                                             </div>
//                                                     }

//                                                     <div className="flex-grow-1 overflow-hidden">
//                                                         <h5 className="text-truncate font-size-15 mb-1 ms-3">{chat.name}</h5>
//                                                         <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3">
//                                                             {
//                                                                 chat.isTyping ?
//                                                                     <>
//                                                                         typing<span className="animate-typing">
//                                                                             <span className="dot ms-1"></span>
//                                                                             <span className="dot ms-1"></span>
//                                                                             <span className="dot ms-1"></span>
//                                                                         </span>
//                                                                     </>
//                                                                     :
//                                                                     <>
//                                                                         {
//                                                                             chat.messages && (chat.messages.length > 0 && chat.messages[(chat.messages).length - 1].isImageMessage === true) ? <i className="ri-image-fill align-middle me-1"></i> : null
//                                                                         }
//                                                                         {
//                                                                             chat.messages && (chat.messages.length > 0 && chat.messages[(chat.messages).length - 1].isFileMessage === true) ? <i className="ri-file-text-fill align-middle me-1"></i> : null
//                                                                         }
//                                                                         {
//                                                                         chat.messages && chat.messages.length > 0 ? chat.messages[(chat.messages).length - 1].message : null
//                                                                         }
//                                                                     </>
//                                                             }



//                                                         </p>
//                                                     </div>
//                                                     <div className="font-size-11">{chat.messages && chat.messages.length > 0 ? chat.messages[(chat.messages).length - 1].time : null}</div>
//                                                     {chat.unRead === 0 ? null :
//                                                         <div className="unread-message" id={"unRead" + chat.id}>
//                                                             <span className="badge badge-soft-danger rounded-pill">{chat.messages && chat.messages.length > 0 ? chat.unRead >= 20 ? chat.unRead + "+" : chat.unRead : ""}</span>
//                                                         </div>
//                                                     }
//                                                 </div>
//                                             </Link>
//                                         </li>
//                                     )
//                                 }
//                             </ul>
//                         </SimpleBar>

//                     </div>
//                     {/* End chat-message-list */}
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     const { active_user } = state.Chat;
//     return { active_user };
// };

// export default connect(mapStateToProps, { setconversationNameInOpenChat, activeUser })(Chats);













import React, { Component } from 'react';
import { Input, InputGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SimpleBar from "simplebar-react";

// Redux actions
import { setconversationNameInOpenChat, activeUser } from "../../../redux/actions";
import pic from "../../../assets/images/dp.png"
// Components
import OnlineUsers from "./OnlineUsers";
import { BASE_URL } from '../../../url';


class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchChat: "",
            recentChatList: [],
            isNewUser: false
        };
    }

    componentDidMount() {
        const authUser = JSON.parse(localStorage.getItem("authUser"));
        if (authUser?.id) {
            fetch(`${BASE_URL}/chat-users/${authUser.id}`)
                .then(res => res.json())
                .then(data => {
                    if (!Array.isArray(data) || data.length === 0) {
                        this.setState({ isNewUser: true, recentChatList: [] });
                    } else {
                        const recentChatList = data.map(user => ({
                            id: user.id,
                            name: user.username,
                            profilePicture: "Null",
                            status: "online", // You can replace with real status
                            messages: [],      // Load real messages if needed
                            isTyping: false,
                            unRead: 0
                        }));
                        this.setState({ recentChatList, isNewUser: false });
                    }
                })
                .catch(err => {
                    console.error("Failed to fetch chat users", err);
                    this.setState({ isNewUser: true });
                });
        }
    }

    handleChange = (e) => {
        const search = e.target.value.toLowerCase();
        this.setState({ searchChat: search });

        const filtered = this.state.recentChatList.filter(chat =>
            chat.name.toLowerCase().includes(search)
        );
        this.setState({
            recentChatList: search ? filtered : this.props.recentChatList
        });
    };

    // openUserChat = (e, chat) => {
       
    //     e.preventDefault();

    //     const index = this.state.recentChatList.indexOf(chat);
    //     this.props.activeUser(index);
    
    //     // 🟢 Set selectedChatId to the clicked chat's user ID
    //     this.setState({ selectedChatId: chat.id });
    
    //     const chatList = document.getElementById("chat-list");
    //     const clickedItem = e.target;
    //     let currentli = null;
    
    //     if (chatList) {
    //         const li = chatList.getElementsByTagName("li");
    //         for (let item of li) item.classList.remove("active");
    //         for (let item of li) {
    //             if (item.contains(clickedItem)) {
    //                 currentli = item;
    //                 break;
    //             }
    //         }
    //     }
    
    //     if (currentli) currentli.classList.add("active");
    
    //     const userChat = document.getElementsByClassName("user-chat");
    //     if (userChat[0]) userChat[0].classList.add("user-chat-show");
    //     console.log(chat,"theee chatttt");
        
    //     const unread = document.getElementById("unRead" + chat.id);
    //     if (unread) unread.style.display = "none";
    // };


    openUserChat = (e, chat) => {
        e.preventDefault();
    
        // ✅ Call the parent prop to update selected chat
        if (this.props.onChatSelect) {
            this.props.onChatSelect(chat);
        }
    
        // Rest of your logic (highlight, unread badge, etc.)
        const index = this.state.recentChatList.indexOf(chat);
        this.props.activeUser(index);
    
        const chatList = document.getElementById("chat-list");
        const clickedItem = e.target;
        let currentli = null;
    
        if (chatList) {
            const li = chatList.getElementsByTagName("li");
            for (let item of li) item.classList.remove("active");
            for (let item of li) {
                if (item.contains(clickedItem)) {
                    currentli = item;
                    break;
                }
            }
        }
    
        if (currentli) currentli.classList.add("active");
    
        const userChat = document.getElementsByClassName("user-chat");
        if (userChat[0]) userChat[0].classList.add("user-chat-show");
    
        const unread = document.getElementById("unRead" + chat.id);
        if (unread) unread.style.display = "none";
    };
    

    render() {
        const { searchChat, recentChatList, isNewUser } = this.state;

        return (
            <React.Fragment>
                <div>
                    <div className="px-4 pt-4">
                        <h4 className="mb-4">Chats</h4>
                        <div className="search-box chat-search-box">
                            <InputGroup className="mb-3 rounded-3">
                                <span className="input-group-text text-muted bg-light pe-1 ps-3">
                                    <i className="ri-search-line search-icon font-size-18"></i>
                                </span>
                                <Input
                                    type="text"
                                    value={searchChat}
                                    onChange={this.handleChange}
                                    className="form-control bg-light"
                                    placeholder="Search messages or users"
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <OnlineUsers />

                    <div>
                        <h5 className="mb-3 px-3 font-size-16">Recent</h5>
                        <SimpleBar className="chat-message-list">
                            <ul className="list-unstyled chat-list chat-user-list px-2" id="chat-list">
                                {isNewUser ? (
                                    <li className="text-center text-muted py-3">
                                        WELCOME NEW USER NO PREVIOUS RECORD DETECTED
                                    </li>
                                ) : (
                                    recentChatList.map((chat, key) => (
                                        <li
                                            key={key}
                                            id={`conversation${key}`}
                                            className={
                                                chat.unRead ? "unread" :
                                                chat.isTyping ? "typing" :
                                                key === this.props.active_user ? "active" : ""
                                            }
                                        >
                                            <Link to="#" onClick={(e) => this.openUserChat(e, chat)}>
                                                <div className="d-flex">
                                                    {chat.profilePicture === "Null" ? (
                                                        <div className={`chat-user-img ${chat.status} align-self-center ms-0`}>
                                                            <div className="avatar-xs">
                                                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                                    {chat.name.charAt(0).toUpperCase()}
                                                                </span>
                                                            </div>
                                                            {chat.status && <span className="user-status"></span>}
                                                        </div>
                                                    ) : (
                                                        <div className={`chat-user-img ${chat.status} align-self-center ms-0`}>
                                                            <img
                                                                src={pic}
                                                                className="rounded-circle avatar-xs"
                                                                alt="chat"
                                                            />
                                                            {chat.status && <span className="user-status"></span>}
                                                        </div>
                                                    )}

                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1 ms-3">{chat.name}</h5>
                                                        <p className="chat-user-message font-size-14 text-truncate mb-0 ms-3">
                                                            {chat.isTyping ? (
                                                                <>
                                                                    typing
                                                                    <span className="animate-typing">
                                                                        <span className="dot ms-1"></span>
                                                                        <span className="dot ms-1"></span>
                                                                        <span className="dot ms-1"></span>
                                                                    </span>
                                                                </>
                                                            ) : (
                                                                chat.messages?.length > 0 ? chat.messages[chat.messages.length - 1].message : ""
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="font-size-11">
                                                        {chat.messages?.length > 0 ? chat.messages[chat.messages.length - 1].time : ""}
                                                    </div>
                                                    {chat.unRead > 0 && (
                                                        <div className="unread-message" id={`unRead${chat.id}`}>
                                                            <span className="badge badge-soft-danger rounded-pill">
                                                                {chat.unRead >= 20 ? `${chat.unRead}+` : chat.unRead}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </SimpleBar>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { active_user } = state.Chat;
    return { active_user };
};

export default connect(mapStateToProps, { setconversationNameInOpenChat, activeUser })(Chats);
