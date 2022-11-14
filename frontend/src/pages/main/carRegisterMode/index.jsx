import React from "react";
import { FaCar } from "react-icons/fa";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import CarRegister from "./carRegister";
import MyCar from "./mycars";
import Tabs from "./tab/tabs";

function CarRegisterMode() {
  return (
    <Tabs>
      <div label="Đăng ký xe" Icon={HiOutlineViewGridAdd}>
        <CarRegister />
      </div>
      <div label="Danh sách xe" Icon={FaCar}>
        <MyCar />
      </div>
      {/* <div label="Xe đã đặt" Icon={FaCarSide}>
        <CarBook />
      </div>
      <div label="Xe yêu thích" Icon={FaRegHeart}>
        <CarLike />
      </div> */}
    </Tabs>
  );
}

export default CarRegisterMode;
