import React from "react";

function PapersSetting() {
  return (
    <>
      <h3 className="title">Giấy tờ xe</h3>
      <p>
        Giấy tờ dùng cho mục đích quản lý. Thông tin này tuyệt đối được bảo mật.
      </p>
      <div className="space m" />
      <div>
        <h3 className="title">Cà vẹt / Giấy đăng ký xe ô tô</h3>
        <div className="space m" />
        <div className="list-photos">
          <ul>
            <li>
              <div
                className="obj-photo has-tip"
                style={{
                  backgroundImage:
                    'url("https://n1-cstg.mioto.vn/m/tips/car_papers/cavet.jpg")',
                }}
              >
                <div className="ins">
                  <div className="fileUploader ">
                    <div className="fileContainer">
                      <div className="errorsContainer" />
                      <button
                        type="button"
                        className="chooseFileButton btn btn-primary btn--m"
                      >
                        Chọn hình
                      </button>
                      <input
                        type="file"
                        name
                        accept="accept=image/*"
                        style={{
                          opacity: 0,
                          left: 0,
                          position: "absolute",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="line" />
        </div>
        <div className="space m" />
      </div>
      <div>
        <h3 className="title">Đăng kiểm</h3>
        <div className="space m" />
        <div className="list-photos">
          <ul>
            <li>
              <div
                className="obj-photo has-tip"
                style={{
                  backgroundImage:
                    'url("https://n1-cstg.mioto.vn/m/tips/car_papers/dangkiem.jpg")',
                }}
              >
                <div className="ins">
                  <div className="fileUploader ">
                    <div className="fileContainer">
                      <div className="errorsContainer" />
                      <button
                        type="button"
                        className="chooseFileButton btn btn-primary btn--m"
                      >
                        Chọn hình
                      </button>
                      <input
                        type="file"
                        name
                        accept="accept=image/*"
                        style={{
                          opacity: 0,
                          left: 0,
                          position: "absolute",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="line" />
        </div>
        <div className="space m" />
      </div>
      <div>
        <h3 className="title">Bảo hiểm vật chất</h3>
        <div className="space m" />
        <div className="list-photos">
          <ul>
            <li>
              <div
                className="obj-photo has-tip"
                style={{
                  backgroundImage:
                    'url("https://n1-cstg.mioto.vn/m/tips/car_papers/bhvatchat.jpg")',
                }}
              >
                <div className="ins">
                  <div className="fileUploader ">
                    <div className="fileContainer">
                      <div className="errorsContainer" />
                      <button
                        type="button"
                        className="chooseFileButton btn btn-primary btn--m"
                      >
                        Chọn hình
                      </button>
                      <input
                        type="file"
                        name
                        accept="accept=image/*"
                        style={{
                          opacity: 0,
                          left: 0,
                          position: "absolute",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="line" />
        </div>
        <div className="space m" />
      </div>
    </>
  );
}

export default PapersSetting;
