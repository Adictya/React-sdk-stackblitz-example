import { ChatBubble, useRender, $config } from "@appbuilder/react";
import React from "react";

const ChatBubbleComponent = (props) => {
  const { uid, isLocal } = props;

  // Get data from render app-state
  const { renderList } = useRender();

  // Fetch username using uid
  const displayName = renderList[uid].name;

  const {
    container,
    containerLocal,
    containerRemote,
    username,
    usernameLocal,
    usernameRemote,
  } = styles;

  return (
    <div style={c([container, isLocal ? containerLocal : containerRemote])}>
      <div style={c([username, isLocal ? usernameLocal : usernameRemote])}>
        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: isLocal ? "white" : "black",
          }}
        >
          {displayName.slice(0, 1)}
        </span>
      </div>
      <div style={{ maxWidth: "80%" }}>
        <ChatBubble {...props} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
  },
  containerLocal: {
    flexDirection: "row-reverse",
  },
  containerRemote: {
    flexDirection: "row",
  },
  username: {
    height: 32,
    width: 32,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5px",
  },
  usernameLocal: {
    marginLeft: -10,
    marginRight: 0,
    backgroundColor: $config.PRIMARY_COLOR,
  },
  usernameRemote: {
    marginLeft: 5,
    marginRight: -10,
    backgroundColor: $config.PRIMARY_FONT_COLOR + "20",
  },
};

export default ChatBubbleComponent;

const c = (arr) => {
  // Function to combine styles passed as arrays upto two elements
  return { ...arr[0], ...arr[1] };
};
