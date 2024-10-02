import { Button } from "./components/ui/button";
import { FaSearch, FaCog, FaUsers } from "react-icons/fa";
import { Separator } from "./components/ui/separator";
import React from "react";
import { Input } from "./components/ui/input";

export default function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  const commonTdClass = "text-gray-500 font-bold text-xs pl-[20px] w-[120px]";

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
                <div className="p-2 bg-white shadow-md flex flex-row justify-between items-center">
                  <h1 className="text-sm">
                    에이전트를 제어할 수 없습니다. 에이전트 컨트롤러의 상태를
                    확인하여 주십시오.
                  </h1>
                  <div className="flex flex-row ">
                    <Button variant="ghost" size="sm">
                      시작
                    </Button>
                    <Separator
                      orientation="vertical"
                      className="border-gray-400 border-r-1 h-19"
                    />
                    <Button variant="ghost" size="sm">
                      중지
                    </Button>
                  </div>
                </div>

                {/* 서버 정보 컨텐츠 */}
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
                    {activeTab === 0 && (
                      <div className="py-4">
                        <table className="table-auto w-full">
                          <tbody>
                            <tr className="h-[40px]">
                              <td className={commonTdClass}>에이전트 종류</td>
                              <td className="pl-[20px] flex items-center pt-[5px] pb-[5px]">
                                <Input
                                  variant="myInput"
                                  placeholder="에이전트 종류"
                                  className="w-[190px] h-[28px] rounded-none"
                                />
                                <h1 className="text-gray-400 text-xs pl-[10px]">
                                  ⓘ에이전트 유형은 콤보박스에 텍스트를 입력 후에
                                  [Enter]를 입력하면 새로운 유형이 추가됩니다.
                                </h1>
                              </td>
                            </tr>
                            <tr className="h-[40px]">
                              <td className={commonTdClass}>이름</td>
                              <td className="pl-[20px] pt-[5px] pb-[5px]">
                                <Input
                                  variant="myInput"
                                  placeholder="이름"
                                  className="w-[680px] h-[28px] rounded-none"
                                />
                              </td>
                            </tr>
                            <tr className="h-[40px]">
                              <td className={commonTdClass}>서버 ID</td>
                              <td className="pl-[20px] flex items-center pt-[5px] pb-[5px]">
                                {Array(6)
                                  .fill(0)
                                  .map((_, index) => (
                                    <React.Fragment key={index}>
                                      <Input
                                        className="w-[40px] h-[28px] rounded-none"
                                        variant="myInput"
                                      />
                                      {index < 5 && (
                                        <span className="mx-1">-</span>
                                      )}
                                    </React.Fragment>
                                  ))}
                              </td>
                            </tr>
                            <tr className="h-[40px]">
                              <td className={commonTdClass}>모니터링 경로</td>
                              <td className="pl-[20px] pt-[5px] pb-[5px]">
                                <Input
                                  variant="myInput"
                                  placeholder="모니터링 경로"
                                  className="w-[680px] h-[28px] rounded-none"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                    {activeTab === 1 && <div>탭 2의 콘텐츠</div>}
                    {activeTab === 2 && <div>탭 3의 콘텐츠</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
