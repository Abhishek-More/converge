import React from "react";
import ReactDOM from 'react-dom';

import Friend from "@/components/Friend/friend";

// https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf
// https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

export default function FriendPage() {
  return (
    <div>
        <Friend />
    </div>
  );
}
