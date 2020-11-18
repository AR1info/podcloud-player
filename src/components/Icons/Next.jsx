import React from "react";

const NextIcon = ({ fill = "#FFF", className }) => (
  <svg fill={fill} className={className} viewBox="0 0 24 24">
    <path d="M17.278 5.425l.21.203 3.845 3.594V7.833c0-.425.318-.775.73-.827L22.166 7c.425 0 .775.318.827.729l.006.104v3.334a.833.833 0 01-.729.827l-.104.006h-3.334a.833.833 0 01-.104-1.66l.104-.007H20.3l-3.892-3.639a7.57 7.57 0 00-8.71-1.396l-.253.132a7.485 7.485 0 00-3.718 8.23c.743 3.259 3.564 5.633 6.913 5.827a7.54 7.54 0 007.548-4.984.774.774 0 01.979-.463.745.745 0 01.474.954c-1.345 3.78-5.051 6.225-9.092 5.99-4.04-.234-7.432-3.09-8.324-6.998-.89-3.905.928-7.927 4.466-9.863 3.458-1.893 7.741-1.348 10.588 1.302zM10.5 9.001h3a.5.5 0 01.09.992L13.5 10H11v1h.957a2.043 2.043 0 01.153 4.08l-.153.006H10.5a.5.5 0 01-.09-.992l.09-.008h1.457a1.043 1.043 0 00.114-2.08L11.957 12H10.5a.5.5 0 01-.492-.41L10 11.5v-2a.5.5 0 01.41-.492L10.5 9h3zm-1.507.414L9 9.501v5.086a.5.5 0 01-.992.09L8 14.587v-3.879l-.146.147a.5.5 0 01-.765-.638l.057-.07 1-1a.5.5 0 01.847.268z"></path>
  </svg>
);

export default React.memo(NextIcon);