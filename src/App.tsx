import { Button } from "./components/ui/button";
import { FaSearch, FaCog, FaUsers } from "react-icons/fa";
import { Separator } from "./components/ui/separator";

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

      <Separator className="border-gray-400 border-t" />

      {/* 메인 콘텐츠 영역 */}
      <section className="flex flex-row h-full w-screen">
        {/* 사이드바 */}
        <aside className="w-[220px] h-full">Sidebar</aside>

        <Separator
          orientation="vertical"
          className="border-gray-400 border-r"
        />

        {/* 메인 콘텐츠 */}
        <div className="flex-grow h-full">
          {/* 콘텐츠 상단 */}
          <div className="h-[76px]">Header</div>

          <Separator className="border-gray-400 border-b" />

          {/* 콘텐츠 바디 */}
          <div className="flex-grow flex flex-row h-[calc(100%-76px)]">
            {/* 왼쪽 섹션 */}
            <div className="w-[300px]">Left</div>

            <Separator
              orientation="vertical"
              className="border-gray-400 border-r"
            />

            {/* 메인 섹션 */}
            <div className="flex-grow">Main</div>
          </div>
        </div>
      </section>
    </main>
  );
}
