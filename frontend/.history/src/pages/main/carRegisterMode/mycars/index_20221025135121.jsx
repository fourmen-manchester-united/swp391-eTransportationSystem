import React from "react";

function MyCar() {
  return (
    <div className="body has-filter">
      <div>
        <div style={{ paddingBottom: 0 }} />
        <div
          className="filter-trips"
          style={{ width: 325, transform: "translateZ(0px)" }}
        >
          <div className="content-filter">
            <div className="rent-car">
              <div className="line-form">
                <label className="label">Trạng Thái </label>
                <div className="wrap-select">
                  <select>
                    <option value={0}>Tất cả</option>
                    <option value={2}>Đang hoạt động</option>
                    <option value={1}>Đang chờ duyệt</option>
                    <option value={3}>Đã bị từ chối </option>
                    <option value={5}>Đang tạm ngừng</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="module-map module-car min-height-no-footer">
        <div
          className="min-height-no-footer"
          style={{ textAlign: "center", padding: "30vh 10vh" }}
        >
          <p className="no-result">Không tìm thấy xe nào.</p>
        </div>
      </div>
    </div>
  );
}
