import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrangChu from "./trangchu";
import LienHe from "./lienhe";
import KinhDi from "./kinhdi";
import TienHiep from "./tienhiep";
import PhieuLuu from "./phieuluu";
import HarryPotterChap1 from "./truyen/harrypotterChap1";
import HarryPotterChap2 from "./truyen/harrypotterChap2";
import HarryPotterChap3 from "./truyen/harrypotterChap3";
import ItChap1 from "./truyen/itChap1";
import ItChap2 from "./truyen/itChap2";
import VoLuyenDinhPhong from "./truyen/voluyendinhphong";
import VoLuyenDinhPhong2 from "./truyen/voluyendinhphong2";
import NgonTayBian from "./truyen/ngontaybian";
import NavbarTrangChu from "./NavbarTrangChu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarTrangChu />
              <TrangChu />
            </>
          }
        />
        <Route path="/lienhe" element={<LienHe />} />
        <Route path="/kinhdi" element={<KinhDi />} />
        <Route path="/tienhiep" element={<TienHiep />} />
        <Route path="/phieuluu" element={<PhieuLuu />} />
        <Route path="/harrypotter/chapter1" element={<HarryPotterChap1 />} />
        <Route path="/harrypotter/chapter2" element={<HarryPotterChap2 />} />
        <Route path="/harrypotter/chapter3" element={<HarryPotterChap3 />} />
        <Route path="/it/chapter1" element={<ItChap1 />} />
        <Route path="/it/chapter2" element={<ItChap2 />} />
        <Route path="/ngontaybian" element={<NgonTayBian />} />
        <Route path="/voluyendinhphong" element={<VoLuyenDinhPhong />} />
        <Route path="/voluyendinhphong2" element={<VoLuyenDinhPhong2 />} />
      </Routes>
    </Router>
  );
};

export default App;
