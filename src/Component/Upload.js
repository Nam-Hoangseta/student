import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import storage from "../FireBase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loader from "./Notifications/Loader";
import { toast } from "react-hot-toast";

function Upload({ acceptType, setImageUrl }) {
  const [loading, setLoading] = useState(false);
  const handleOnDrop = (acceptedFiles) => {
    try {
      setLoading(true);
      const file = acceptedFiles[0];
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          ); // update progress
        },
        (err) => {
          toast.error("Tải files thất bại !");
          setLoading(false);
        },
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setLoading(false);
            setImageUrl(url);
            toast.success("Tải files thành công !");
          });
        }
      );
    } catch (err) {
      toast.error("Tải files thất bại !");
      setLoading(false);
    }
  };
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      multiple: false,
      onDrop: handleOnDrop,
      accept: {
        'image/jpeg': [],
        'image/png': [],
        'image/png': []

      }
    });

  return (
    <div className="w-full text-center flex-colo gap-6">
      {loading ? (
        <div className="px-6 w-full py-8 border-2 border-border border-dashed bg-dry rounded-md ">
          <Loader />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="px-6 w-full py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
        >
          <input {...getInputProps()} />
          <span className="mx-auto flex flex-colo text-subMain text-3xl">
            <FiUploadCloud />
          </span>
          <p className="text-sm mt-2">Tải file lên</p>
          <em className="text-xs text-border">
            ({acceptType || "Chỉ nhận định dạng .jpg và .png"} )
          </em>
        </div>
      )}
      {/*             <p>{percent} "% done"</p> */}
    </div>
  );
}

export default Upload;
