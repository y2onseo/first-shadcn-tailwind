import React from "react";
import { Button } from "./components/ui/button";
import Tab1 from "./tab1";

export default function MainContents() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="shadow-md">
      {/* 탭 버튼 */}
      <div className="flex flex-row gap-2">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-start px-4 py-2 rounded-none rounded-tl-md rounded-tr-md ${
            activeTab === 0
              ? "bg-white text-blue-500"
              : "bg-white text-gray-500"
          }`}
          onClick={() => setActiveTab(0)}
        >
          <div className="text-red-600 font-bold h-5 w-2">*</div>
          기본 설정
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className={`px-4 py-2 rounded-none rounded-tl-md rounded-tr-md ${
            activeTab === 1
              ? "bg-white text-blue-500"
              : "bg-white text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          고급 설정
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`px-4 py-2  rounded-none rounded-tl-md rounded-tr-md ${
            activeTab === 2
              ? "bg-white text-blue-500"
              : "bg-white text-gray-500"
          }`}
          onClick={() => setActiveTab(2)}
        >
          툴체인 설정
        </Button>
      </div>
      <div className="bg-white">
        {activeTab === 0 && <Tab1 />}
        {activeTab === 1 && <div>탭 2의 콘텐츠</div>}
        {activeTab === 2 && <div>탭 3의 콘텐츠</div>}
      </div>
    </div>
  );
}
