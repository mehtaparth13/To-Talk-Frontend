import React, { Component } from 'react';
//Import Components
import ChatLeftSidebar from "./ChatLeftSidebar";
import UserChat from "./UserChat/index";

import { connect } from "react-redux";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedChatId: null
        };
    }

    handleChatSelect = (chat) => {
        this.setState({ selectedChatId: chat.id }); // 👈 set the ID
    };
    
    render() {
        document.title = "To Talk - Responsive Bootstrap 5 Admin Dashboard"

        return (
            <React.Fragment>
                {/* chat left sidebar */}
                <ChatLeftSidebar
                    recentChatList={this.props.users}
                    onChatSelect={this.handleChatSelect}
                    />

                {/* user chat */}
                <UserChat recentChatList={this.props.users}/>

                    {/* <UserChat
                        selectedChatId={this.state.selectedChatId}
                        authUser={this.props.authUser} // 👈 Ensure this is also passed
                    /> */}
                {/* <UserChat
                    selectedChatId={this.state.selectedChatId}
                    authUser={this.props.authUser}
                /> */}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { users } = state.Chat;
    return { users };
};

export default connect(mapStateToProps, {})(Index);