export const compressImage = async (file: File): Promise<File> => {
  // 1MB = 1024 * 1024
  const MAX_FILE_SIZE = 1 * 1024 * 1024;

  // 파일이 1MB 이하면 압축하지 않음
  if (file.size <= MAX_FILE_SIZE) {
    return file;
  }

  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      // 비율 계산 (1MB 기준)
      const ratio = Math.sqrt(MAX_FILE_SIZE / file.size);
      width *= ratio;
      height *= ratio;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, width, height);

      // Blob으로 변환
      canvas.toBlob(
        async (blob) => {
          if (!blob) {
            return resolve(file);}
          
          // File 객체로 변환 (파일 이름, 타입, 수정일자)
          // webp로 압축
          const compressedFile = new File([blob], file.name, {
            type: "image/webp",
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        },
        "image/webp",
        0.8, // 품질 80%
      );
    };
    img.src = URL.createObjectURL(file);
  });
};
