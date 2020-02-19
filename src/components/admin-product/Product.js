import React from "react";

const Product = props => {
  const data = props.product.filter(n => n.code === props.match.params.code);

  const productStatus =
    data[0].status === "0" ? "Chưa kích hoạt" : "Đã kích hoạt";

  return (
    <div className="row productInfoPage">
      <div className="col-md-2" style={{ padding: 0 }}>
        <img className="productImage" src="/img/product.png" />
        <p className="productName"> {data[0].name} </p>
      </div>
      <div className="col-md-10" style={{ padding: 0 }}>
        <div className="row productDetail">
          <div className="form-group col-md-3 productLittleArea">
            <label htmlFor="productCode"> Mã sản phẩm </label>
            <input
              type="text"
              className="form-control"
              id="productCode"
              placeholder="Mã sản phẩm"
              disabled
              value={data[0].code}
            ></input>
          </div>
          <div className="form-group col-md-2 productLittleArea">
            <label htmlFor="productCost"> Giá sản phẩm </label>
            <input
              type="text"
              className="form-control"
              id="productCost"
              placeholder="Giá sản phẩm"
              disabled
              value={data[0].cost}
            ></input>
          </div>
          <div className="form-group col-md-2 productLittleArea">
            <label htmlFor="productTime"> Thời hạn </label>
            <input
              type="text"
              className="form-control"
              id="productTime"
              placeholder="Thời hạn"
              disabled
              value={data[0].time}
            ></input>
          </div>
          <div className="form-group col-md-2 productLittleArea">
            <label htmlFor="productStore1"> Tên đại lý </label>
            <input
              type="text"
              className="form-control"
              id="productStore1"
              placeholder="Tên đại lý"
              disabled
              value={data[0].store}
            ></input>
          </div>
          <div className="form-group col-md-2 productLittleArea">
            <label htmlFor="productStore2"> Tên cửa hàng </label>
            <input
              type="text"
              className="form-control"
              id="productStore2"
              placeholder="Tên cửa hàng"
              disabled
              value={data[0].store}
            ></input>
          </div>
          <div className="form-group col-md-2 productLittleArea">
            <label htmlFor="productImport"> Ngày nhập hàng </label>
            <input
              type="text"
              className="form-control"
              id="productImport"
              placeholder="Ngày nhập hàng"
              disabled
              value={data[0].import}
            ></input>
          </div>
          <div className="form-group col-md-2 productLittleArea">
            <label htmlFor="productGuest"> Tên khách hàng </label>
            <input
              type="text"
              className="form-control"
              id="productGuest"
              placeholder="Nhập họ tên"
            ></input>
          </div>
          <div className="form-group col-md-2 productLittleArea">
            <label htmlFor="productBuy"> Ngày mua hàng </label>
            <input
              type="text"
              className="form-control"
              id="productBuy"
              placeholder="Nhập ngày mua"
            ></input>
          </div>
          <div className="form-group col-md-2 productLittleArea">
            <label htmlFor="productStatus"> Tình trạng </label>
            <input
              type="text"
              className="form-control"
              id="productStatus"
              placeholder="Giá sản phẩm"
              disabled
              value={productStatus}
            ></input>
          </div>
          <div className="form-group col-md-3 productLittleArea activebuttonBar">
            <button className="btn activateButton"> KÍCH HOẠT </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
