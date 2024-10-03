import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

export default function AgentRun() {
  return (
    <div className="p-2 bg-white shadow-md flex flex-row justify-between items-center">
      <h1 className="text-sm">
        에이전트를 제어할 수 없습니다. 에이전트 컨트롤러의 상태를 확인하여
        주십시오.
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
  );
}
