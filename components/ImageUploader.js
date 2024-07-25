"use client";
import { useCallback } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { FaUpload } from "react-icons/fa";
import Image from "next/image";

export function ImageUploader({ imageUrl, onFieldChange, setFiles }) {
  const convertFileToUrl = (file) => URL.createObjectURL(file);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept("image/jpeg", "image/png"),
  });
  return (
    <div
      {...getRootProps()}
      className="flex flex-col overflow-hidden rounded-md cursor-pointer flex-center h-72 bg-grey-50"
    >
      <input {...getInputProps()} id="imageUrl" className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex">
          <Image
            src={imageUrl}
            alt="image"
            width={400}
            height={300}
            className="object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex-col h-full pt-12 text-center border-2 border-gray-300 border-dashed rounded-md">
          <FaUpload size={32} className="inline" />
          <h3 className="mt-2 mb-2"> Drag Photo here</h3>
          <p className="mb-4 p-medium-12"> .png or .pg extension</p>
          <button
            type="button"
            className="btn btn-secondary btn-rounded btn-sm"
          >
            Select from Computer
          </button>
        </div>
      )}
    </div>
  );
}
