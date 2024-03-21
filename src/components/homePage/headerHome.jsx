import React from "react";

import "./_myResetsHome.css";
import "./headerHome.css";

function headerHome() {
  return (
    <div className="divHeaderHome myReset">
      <div className="divContainer">
        <div className="link">
          <div className="muadee">Muadee</div>
        </div>
        <div className="list">
          <div className="item">
            <div className="link2">
              <div className="divText3">
                <div className="symbol"></div>
              </div>
              <div className="maGiamGia">mã giảm giá</div>
            </div>
          </div>
          <div className="item2">
            <div className="link3">
              <div className="divText32">
                <div className="symbol2"></div>
              </div>
              <div className="cuaHang">cửa hàng</div>
            </div>
          </div>
          <div className="item3">
            <div className="link4">
              <div className="divText33">
                <div className="symbol3"></div>
              </div>
              <div className="danhMuc">danh mục</div>
            </div>
          </div>
        </div>
        <div className="divSearchboxMargin">
          <div className="divSearchbox">
            <div className="divDisplayFlex">
              <div className="input">
                <div className="divPlaceholder">
                  <div className="timKiemSanPhamBanMuon">
                    Tìm kiếm sản phẩm bạn muốn...
                  </div>
                </div>
              </div>
              <div className="link5">
                <div className="iFaRegular">
                  <div className="unnamed">🔍</div>
                </div>
              </div>
            </div>
            <div className="divPadding">
              <div className="linkOAnVat">Đồ Ăn Vặt</div>
              <div className="linkOpIPhone">Ốp iPhone</div>
              <div className="linkGauBong">Gấu Bông</div>
              <div className="linkKemChongNang">Kem Chống Nắng</div>
              <div className="linkAoThun">Áo Thun</div>
              <div className="linkKhauTrang5d">Khẩu Trang 5d</div>
              <div className="link6">
                <div className="mocKhoa">Móc Khoá…</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default headerHome;
