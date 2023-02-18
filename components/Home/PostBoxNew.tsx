import React from "react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { HiPencil, HiPlus } from "react-icons/hi";
import axios from "axios";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

export default function PostBoxNew() {
  const router = useRouter();
  const toast = useToast();

  async function testCreatePost() {
    let content = document.getElementById("content") as HTMLInputElement;
    let title = document.getElementById("title") as HTMLInputElement;

    if (content.value == "" || title.value == "") {
      //create an error toast
      toast({
        title: "Error",
        description: "Please fill out all fields",
        status: "error",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    let testPost = {
      anonymous: true,
      communityId: "cle9ehvqj0000ugukfuy0oc26",
      content: content.value,
      tags: ["test"],
      title: title.value,
      toneIndicators: [],
      toneIndicatorsStartStop: [],
    };

    const request = await axios.post("/api/posts/create", testPost);
    console.log("done!");
    console.log(request.status);
    router.push("/");
  }

  return (
    <div className="flex bg-white py-8 px-6 w-[40vw] border-[1px] border-gray-200 shadow-md rounded-lg">
      <div className="w-full">
        <div className="flex w-full justify-between items-center">
          <div className="">
            <Input
              id="title"
              placeholder="Insert title here..."
              className="h-10 text-2xl w-1/2"
            ></Input>
          </div>
        </div>
        <div className="mt-8">
          <Textarea id="content" placeholder="Insert description here..." />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mt-8 px-4 py-2 rounded-md bg-gray-200 max-w-[200px]">
            <HiPencil />
            <p className="text-sm">Editing New Post...</p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div
                onClick={() => testCreatePost()}
                className="flex cursor-pointer items-center gap-2 mt-8 px-4 py-2 rounded-md border-2 border-1first max-w-[200px] text-1first"
              >
                <p className="text-base text-1first">Save as Draft</p>
              </div>
            </div>
            <div
              onClick={() => testCreatePost()}
              className="flex cursor-pointer items-center gap-2 mt-8 px-4 py-2 rounded-md bg-1first max-w-[200px]"
            >
              <HiPlus className="text-white" />
              <p className="text-base text-white">Create Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
