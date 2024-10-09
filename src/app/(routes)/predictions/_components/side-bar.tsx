import React from "react";
import { Container } from "./container";
import {
  AlertCircleIcon,
  ChartBar,
  ChartBarIcon,
  ChartNoAxesColumnIncreasing,
  Users,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const SideBar = () => {
  return (
    <div className="w-[360px] h-screen border-r-[1px]">
      <Container>
        <div className="w-full grid grid-cols-3">
          <div className="flex items-center gap-2 border-r-[1px]">
            <AlertCircleIcon className="w-4 h-4 text-red-500" />
            <div className="w-fit text-[10px] text-[#808080] font-medium tracking-tighter leading-none">
              ON GOING <br /> ISSUES
            </div>
            <p className="text-lg font-medium">14</p>
          </div>

          <div className="flex items-center gap-2 border-r-[1px] px-2">
            <ChartNoAxesColumnIncreasing className="w-5 h-5 text-green-500" />
            <div className="w-fit text-[10px] text-[#808080] font-medium tracking-tighter leading-none">
              ROAD <br /> LOAD
            </div>
            <p className="text-lg font-medium">
              20<span className="text-xs font-medium">%</span>
            </p>
          </div>

          <div className="flex items-center px-2 gap-4 justify-center">
            <div className="w-fit text-[10px] text-[#808080] font-medium tracking-tighter leading-none">
              AUTO <br />
              RESOLVE
            </div>
            <Switch />
          </div>
        </div>

        <div className="w-full h-11 bg-[#3B3B3B] rounded p-2 flex items-center justify-between">
          <div className="leading-none space-y-1">
            <p className="text-[10px] text-[#808080]">SELECT LOCATION OR ZIP</p>
            <p className="text-xs font-medium">CA 94123</p>
          </div>

          <div className="leading-none space-y-1">
            <p className="text-[10px] text-[#808080]">RADIUS</p>
            <p className="text-xs font-medium">75m</p>
          </div>
          {/* <Slider defaultValue={[33]} max={100} step={1} /> */}
        </div>

        <div className="w-full rounded bg-[#3B3B3B]">
          <div className="w-full bg-cover bg-center rounded-t h-[180px] bg-[url('https://vnn-imgs-a1.vgcloud.vn/i.dtinews.vn/images/editor/images/lanhieu/82020/26/Big/tainangiaothong-1579864004-width-550-height-309-1579954592225.jpg')]"></div>
          <Container>
            <div className="flex justify-between mt-1">
              <div className="space-y-0.5">
                <p className="text-xs font-medium tracking-tighter">
                  Số 1 Đại Cồ Việt, Hai Bà Trưng
                </p>
                <p className="text-[10px] text-[#808080] font-medium">
                  CA 94123
                </p>
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-medium tracking-tighter">JUNE 5</p>
                <p className="text-[10px] text-[#808080] font-medium">
                  2:45 PM
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 mt-2.5 gap-2.5">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <p className="text-lg font-medium">14</p>
                <div className="w-fit text-[10px] text-[#808080] font-medium tracking-tighter leading-none">
                  ON GOING <br /> ISSUES
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <p className="text-lg font-medium">14</p>
                <div className="w-fit text-[10px] text-[#808080] font-medium tracking-tighter leading-none">
                  ON GOING <br /> ISSUES
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <p className="text-lg font-medium">14</p>
                <div className="w-fit text-[10px] text-[#808080] font-medium tracking-tighter leading-none">
                  ON GOING <br /> ISSUES
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default SideBar;
