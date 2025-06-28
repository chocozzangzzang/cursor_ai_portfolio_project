"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const CHANNEL_LINKS = {
    sns: "https://instagram.com/coco_park",
    github: "https://github.com/cocopark"
  };
  
  export default function Profile() {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
      fileInputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Profile</h2>
          
          <div className="flex items-start w-full">
            {/* 프로필 이미지 */}
            <div 
              onClick={handleImageClick}
              className="w-32 h-32 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center mr-8 cursor-pointer overflow-hidden hover:opacity-80 transition-opacity"
            >
              {imageUrl ? (
                <Image 
                  src={imageUrl} 
                  alt="Profile" 
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
                  <svg 
                    className="w-8 h-8 mb-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="text-sm">사진 추가</span>
                </div>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />

            {/* 프로필 정보 */}
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">I AM</h3>
                <p className="mb-1 text-gray-600 dark:text-gray-300">이름 : Coco Park</p>
                <p className="text-gray-600 dark:text-gray-300">포지션: FE/BE Developer(jr)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Contact</h3>
                <p className="mb-1 text-gray-600 dark:text-gray-300">Email : coco_park@naver.com</p>
                <p className="text-gray-600 dark:text-gray-300">Phone : +082 010-1234-5678</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Channel</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-600 dark:text-gray-300 w-20">SNS :</span>
                    <input type="text" className="flex-1 bg-gray-100 dark:bg-gray-700 rounded px-3 py-1" 
                        readOnly value={CHANNEL_LINKS.sns} />
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 dark:text-gray-300 w-20">GitHub :</span>
                    <input type="text" className="flex-1 bg-gray-100 dark:bg-gray-700 rounded px-3 py-1" 
                        readOnly value={CHANNEL_LINKS.github}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }