import { Button } from "./components/ui/button";
import { FaSearch, FaCog, FaUsers } from "react-icons/fa";
import { Separator } from "./components/ui/separator";

import MainContents from "./mainContents";
import AgentRun from "./agentRun";

export default function App() {
  return (
    <main className="flex flex-col w-screen h-screen">
      {/* 상단 네비게이션 바 */}
      <header className="h-[64px] w-screen flex flex-row items-center justify-end gap-4 pr-4">
        <Button variant="ghost">
          <FaSearch size={20} color="gray" />
        </Button>
        <Button variant="ghost">
          <FaCog size={20} color="gray" />
        </Button>
        <Button variant="ghost">
          <FaUsers size={20} color="gray" />
        </Button>
      </header>

      <Separator className="border-gray-400" />

      {/* 메인 콘텐츠 영역 */}
      <section className="flex flex-row   w-screen h-[calc(100%-64px)]">
        {/* 사이드바 */}
        <aside className="w-[220px] h-full bg-white shadow-md">
          <div className="h-[76px] flex items-center pl-[30px]">
            <h5 className="text-xl font-sans">설정</h5>
          </div>
          <nav className="flex flex-col items-start  pl-[25px]  ">
            <Button variant="ghost" className="w-full flex justify-start">
              서버 관리
            </Button>
            <Button variant="ghost" className="w-full flex justify-start">
              툴체인 설정
            </Button>
            <Button variant="ghost" className="w-full flex justify-start">
              커버리지 복사
            </Button>
            <Button variant="ghost" className="w-full flex justify-start">
              커버리지 제외 정책
            </Button>
            <Button variant="ghost" className="w-full flex justify-start">
              환경 설정
            </Button>
            <Button variant="ghost" className="w-full flex justify-start">
              라이선스 관리
            </Button>
            <Button variant="ghost" className="w-full flex justify-start">
              사용자 관리
            </Button>
            <Button variant="ghost" className="w-full flex justify-start">
              이슈 관리
            </Button>
          </nav>
        </aside>

        <Separator orientation="vertical" className="border-gray-400 " />

        {/* 메인 콘텐츠 */}
        <div className="flex-grow h-full w-full flex flex-col">
          {/* 콘텐츠 상단 */}
          <div className="h-[76px] flex items-center justify-between pl-[30px] pr-[30px]">
            <h1 className="text-2xl font-bold">서버 관리</h1>
            <Button variant="outline" className="rounded-none h-[32px]">
              서버추가
            </Button>
          </div>

          <Separator className="border-gray-400" />

          {/* 콘텐츠 바디 */}
          <div className="flex-grow flex flex-row h-[calc(100%-76px)]">
            {/* 왼쪽 섹션 */}
            <div className="w-[300px]">
              <Button
                variant="ghost"
                className="w-full flex justify-start gap-2 "
              >
                <span className="w-2 h-2 bg-red-600  "></span>
                ys
              </Button>
            </div>

            <Separator orientation="vertical" className="border-gray-400" />

            {/* 메인 섹션 */}
            <div
              className="flex-grow flex flex-col justify-start items-center"
              style={{ backgroundColor: "#EEF0F2" }}
            >
              <div className="w-[836px] gap-7 flex flex-col py-[24px] mx-[36px]">
                <div className="flex flex-row justify-between">
                  <Button
                    variant="outline"
                    className="h-[32px] w-[136px] rounded-none bg-transparent border-[1px] border-[#0880EA] text-[#0880EA]"
                  >
                    라이선스 활성화
                  </Button>

                  <Button variant="default" className="h-[32px] rounded-none ">
                    저장
                  </Button>
                </div>
                <AgentRun />

                {/* 서버 정보 컨텐츠 */}
                <MainContents />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
