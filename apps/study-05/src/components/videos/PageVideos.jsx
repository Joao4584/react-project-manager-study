/* eslint-disable no-unused-vars */
import React from "react";
import GridVideos from "./GridVideos";
import './PageVideos.css'
function PageVideos() {
  return (
    <main className="main-content">
      <section>
        <h1>Receita em Video</h1>
        <GridVideos />
      </section>
    </main>
  );
}
 
export default PageVideos;