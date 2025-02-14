// AboutMePage.jsx
import React, { useState, useRef } from "react"
import pageTitle from "../../components/pageTitleFunct"
import GradImg from "../../assets/aargeephoto/aargeephoto_grad.jpg"
import TahoeImg from "../../assets/aargeephoto/aargeephoto_tahoe.jpg"
import HippoImg from "../../assets/aargeephoto/aargeephoto_goldenhippo.jpg"
import DinoImg from "../../assets/aargeephoto/aargeephoto_retreatdilopho.jpg"
import ModalImage from "../../components/modalImage"
import clickOutside from "../../components/clickOutsideFunct"

const AboutMePage = () => {
  const modalRef = useRef(null)
  pageTitle("About Me")

  const openModal = (src, title) => {
    var modalimg = document.getElementById("modal-image");
    modalimg.src = src;
    var modalcap = document.getElementById("modal-caption");
    modalcap.innerHTML = title;
    document.getElementById("modal").style.display = "block";
  }

  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  }

  clickOutside(modalRef, closeModal)
      /*<ModalImage
        class="profile-img"
        src={GradImg}
        alt="Imagine a really cool photo of Aaron Gee, the site creator, here!"
        title="Aaron Gee dressed in college graduation attire. He looks happy."
      />*/
  
  return (
    <>
    <div className="page">
      <h1>Who are you?</h1>
      <p>Hi there! My name is <b>Aaron Gee</b>!</p>
      <img
        className="profile-img"
        src={GradImg}
        alt="Imagine a really cool photo of Aaron Gee, the site creator, here!"
        title="Aaron Gee dressed in college graduation attire. He looks happy."
        onClick={() => openModal(GradImg,"Aaron Gee dressed in college graduation attire. He looks happy.")}
      />
      <p>
        I am a Computer Science & Engineering graduate from University of California, Irvine.
        I enjoy learning, practicing, and teaching others the wonders of computers, 
        from coding to building them. I hope to use the skills God has given me 
        to glorify His name and improve the lives of others around me!
      </p>
      <ul className="gallery">
        <img
          src={TahoeImg}
          alt="Imagine a really cool photo of Aaron Gee overlooking Lake Tahoe here!"
          title="Aaron Gee overlooking Lake Tahoe from Mount Tallac. He looks happy."
          onClick={() => openModal(TahoeImg,"Aaron Gee overlooking Lake Tahoe from Mount Tallac. He looks happy.")}
        />
        <img
          src={HippoImg}
          alt="Imagine a really cool photo of Aaron Gee dressed like a mustached yellow hippopotomas here!"
          title="Aaron Gee dressed like a mustached yellow hippopotomas. He looks happy."
          onClick={() => openModal(HippoImg,"Aaron Gee dressed like a mustached yellow hippopotomas. He looks happy.")}
        />
        <img
          src={DinoImg}
          alt="Imagine a really cool photo of Aaron Gee next to a Dilophosaurus statue here!"
          title="Aaron Gee standing next to a Dilophosaurus statue. He looks happy."
          onClick={() => openModal(DinoImg,"Aaron Gee standing next to a Dilophosaurus statue. He looks happy.")}
        />
      </ul>
      <p><br /></p>
    </div>
    <div id="modal">
      <span id="modal-close" onClick={closeModal}>&times;</span>
      <img id="modal-image" ref={modalRef} />
      <div id="modal-caption"></div>
    </div>
    </>
  )
}

export default AboutMePage