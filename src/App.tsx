import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Switch } from "./components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogTitle,
} from "./components/ui/dialog";
import React from "react";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <Card className="w-[30rem]">
        <CardHeader>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-2 pb-4">
          <Input placeholder="아이디" variant="myInput" />
          <Input placeholder="비밀번호" type="password" variant="myInput" />
        </CardContent>
        <CardFooter className="block">
          <div className="w-full flex justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="keep" />
              <Label htmlFor="keep">로그인 유지</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="id-security">IP 보안</Label>
              <Switch id="ip-security" />
            </div>
          </div>
          <Button className="w-full">로그인</Button>
        </CardFooter>
      </Card>

      <Button variant="link" onClick={() => setOpen(true)}>
        비밀번호를 잊어버리셨나요?
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>비밀번호 재설정</DialogTitle>
            <DialogDescription>
              회원가입시 기입한 이메일로 비밀번호 재설정 링크를 보내 드립니다.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-2">
            <Input variant="myInput" placeholder="아이디를 입력하세요." />
            <Input
              variant="myInput"
              placeholder="가입시 사용한 이메일 주소를 입력하세요."
            />
          </div>
          <DialogFooter>
            <Button className="w-full" onClick={() => setOpen(false)}>
              비밀번호 재설정
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
