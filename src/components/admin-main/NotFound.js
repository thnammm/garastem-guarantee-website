import React from "react";

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
  return (
    <div className="notFoundComp">
      <img src="/img/admin/notfound.png" className="notFoundComp-Img" />
      <div className="notFoundComp-Text"> ỐI, KHÔNG CÓ GÌ Ở ĐÂY HẾT! </div>
    </div>
  );
};
