import React, { useEffect, useState } from 'react';


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if(direction === 'left') {
      setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    } else {
      setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleSwipe('left');
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 정리
  }, [currentIndex]);
  const [touchStart, setTouchStart] = useState(null); // 터치 시작 위치
  const [touchEnd, setTouchEnd] = useState(null); // 터치 끝 위치

    // 터치 시작 이벤트 핸들러
    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    };
  
    // 터치 끝 이벤트 핸들러
    const handleTouchEnd = (e) => {
      const touchEndValue = e.changedTouches[0].clientX;
      setTouchEnd(touchEndValue);
    
      if (touchStart - touchEndValue > 75) {
        // 오른쪽으로 스와이프 (다음 이미지로)
        setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
      } else if (touchStart - touchEndValue < -75) {
        // 왼쪽으로 스와이프 (이전 이미지로)
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
      }
    
      // 스와이프 후에는 터치 위치 초기화
      setTouchStart(null);
    };

  // 선택된 이미지를 중앙에 위치시키기 위해 translateX 값을 조정
  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: 'transform 500ms ease-in-out',
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
       <img className='absolute top-0' src="/test/2.png" />
       <div className="relative w-full overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="flex transition-transform duration-500 ease-in-out" style={slideStyle}>
          {images.map((image, index) => (
            <img 
              key={index} // 이미지 URL이 유니크하지 않을 수 있으니 index를 key로 사용
              src={image} 
              className="object-cover w-full" // 이미지가 컨테이너를 꽉 채우도록 설정
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 flex justify-around w-full mt-4">
        <button onClick={() => handleSwipe('right')}>Left</button>
        <button onClick={() => handleSwipe('left')}>Right</button>
      </div>
    </div>
  );
};

export default ImageSlider;
