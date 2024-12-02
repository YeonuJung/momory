export const generateUniqueFileName = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    // 랜덤 값 추가 (고유한 이름)
    const randomSuffix = Math.random().toString(36).substring(2, 15);
    
    return `memory_image_${year}-${month}-${day}_${randomSuffix}.png`;
  };