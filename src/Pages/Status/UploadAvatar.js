import React, {useEffect, useState} from 'react'
import Avatar from 'react-avatar-edit'

export default function UploadAvatar() {
     const [src, setSrc] = useState(null);
     const [preview, setPreview] = useState(null);

     const onClose =()=>{
        setPreview(null);
     }
     const onCrop = view =>{
        setPreview(view)
     }

  return (
    <div>
      <Avatar
         width={150}
         height={150}
         imageHeight={90}
         imageWidth={90}
         onCrop={onCrop}
         onClose={onClose}
         src={src}
  />
       <img src={preview} alt="" />
    </div>
  )
}
