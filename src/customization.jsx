import AppBuilderMethods from "@appbuilder/react";

import MyChatBubbleComponent from "./components/MyChatBubbleComponent";

const userCustomization = AppBuilderMethods.createCustomization({
  components: {
    videoCall: {
      chat: {
        chatBubble: MyChatBubbleComponent,
      },
    },
  },
});

export default userCustomization;
