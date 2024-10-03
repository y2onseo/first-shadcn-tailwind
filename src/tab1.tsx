import React from "react";
import { Input } from "./components/ui/input";

export default function Tab1() {
  const commonTdClass = "text-gray-500 font-bold text-xs pl-[20px] w-[120px]";
  return (
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
                ⓘ에이전트 유형은 콤보박스에 텍스트를 입력 후에 [Enter]를
                입력하면 새로운 유형이 추가됩니다.
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
                    {index < 5 && <span className="mx-1">-</span>}
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
  );
}
