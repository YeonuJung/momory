export const compressImage = async (file: File): Promise<File> => {
  // 500KB로 제한
  const MAX_FILE_SIZE = 1 * 1024 * 1024;
 
  if (file.size <= MAX_FILE_SIZE) {
    return file;
  }
 
  return new Promise((resolve) => {
    const img = new Image();
 
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;
 
      // 최대 해상도 제한 1280으로 변경
      const MAX_DIMENSION = 1280; 
      if (width > height && width > MAX_DIMENSION) {
        height = Math.round((height * MAX_DIMENSION) / width);
        width = MAX_DIMENSION;
      } else if (height > MAX_DIMENSION) {
        width = Math.round((width * MAX_DIMENSION) / height);
        height = MAX_DIMENSION;
      }
 
      // 비율 계산 (500KB 기준)
      const ratio = Math.min(
        1,
        Math.sqrt(MAX_FILE_SIZE / file.size)
      );
      width = Math.floor(width * ratio);
      height = Math.floor(height * ratio);
 
      canvas.width = width;
      canvas.height = height;
 
      const ctx = canvas.getContext("2d");
      // 이미지 스무딩 설정
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }
      ctx?.drawImage(img, 0, 0, width, height);
 
      canvas.toBlob(
        async (blob) => {
          if (!blob) {
            return resolve(file);
          }
          
          const compressedFile = new File([blob], file.name, {
            type: "image/webp",
            lastModified: Date.now(),
          });
 
          // 압축 후에도 크기가 큰 경우 재압축
          if (compressedFile.size > MAX_FILE_SIZE) {
            const recompressQuality = 0.8; // 품질을 60%로 낮춤
            canvas.toBlob(
              (reBlob) => {
                if (!reBlob) {
                  return resolve(compressedFile);
                }
                resolve(new File([reBlob], file.name, {
                  type: "image/webp",
                  lastModified: Date.now(),
                }));
              },
              "image/webp",
              recompressQuality
            );
          } else {
            resolve(compressedFile);
          }
        },
        "image/webp",
        0.9 // 초기 품질을 70%로 낮춤
      );
    };
 
    img.src = URL.createObjectURL(file);
  });
 };