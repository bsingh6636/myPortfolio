import React, { useContext } from 'react';
import '../../css/FloatingContact.css';
import { MyContext } from '../..';
import { FloatingContactLan } from '../../Language/ContactLan';

const FloatingContact = () => {
  const { language } = useContext(MyContext);
  const lan = FloatingContactLan[language];

  return (
    <div className="w-auto p-4">
      <div className="avatar mx-auto mb-4">
        <img src="https://res.cloudinary.com/bsingh6636/image/upload/v1723648948/myPhoto/pp_photo_Brijesh_vcop2n.jpg" alt="Brijesh" />
      </div>
      <div className="content text-center">
        <h1 className="text-xl font-bold">{lan.name}</h1>
        <p>{lan.followMe}</p>
        <p className="flex justify-center space-x-4">
          <span><a href="https://www.facebook.com/bsingh575/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></span>
          <span><a href="https://wa.me/+918050578803" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a></span>
          <span><a href="https://x.com/brijesh6636" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></span>
          <span><a href="https://github.com/bsingh6636" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></span>
          <span><a href="https://www.instagram.com/bsingh6636" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></span>
        </p>
      </div>
    </div>
  );
};

export default FloatingContact;
