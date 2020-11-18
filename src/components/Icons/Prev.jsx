import React from "react";

const PrevIcon = ({ fill = "#FFF", className }) => (
  <svg fill={fill} className={className} viewBox="0 0 24 24">
    <path d="M15.5 9.001a.5.5 0 110 1H13v1h.957a2.043 2.043 0 010 4.086H12.5a.5.5 0 010-1h1.457a1.043 1.043 0 000-2.086H12.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5zm-5.354.146a.5.5 0 01.854.354v5.086a.5.5 0 01-1 0v-3.879l-.146.147a.5.5 0 01-.708-.708zm7.164-5.024C13.852 2.23 9.569 2.775 6.722 5.425l-.21.203-3.845 3.594V7.833a.833.833 0 00-.73-.827L1.834 7a.833.833 0 00-.827.729L1 7.833v3.334c0 .425.318.775.729.827l.104.006h3.334a.833.833 0 00.104-1.66l-.104-.007H3.7l3.892-3.639a7.57 7.57 0 018.71-1.396l.253.132a7.485 7.485 0 013.718 8.23c-.743 3.259-3.564 5.633-6.913 5.827a7.54 7.54 0 01-7.548-4.984.774.774 0 00-.979-.463.745.745 0 00-.474.954c1.345 3.78 5.051 6.225 9.092 5.99 4.04-.234 7.432-3.09 8.324-6.998.89-3.905-.928-7.927-4.466-9.863z"></path>
  </svg>
);

export default React.memo(PrevIcon);