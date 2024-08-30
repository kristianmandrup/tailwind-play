# ModalSwiper

```tsx
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import ModalSwiper from './ModalSwiper';

const App: React.FC = () => {
  const [swiperOpen, setSwiperOpen] = useState(false);

  const handleOpenSwiper = () => setSwiperOpen(true);
  const handleCloseSwiper = () => setSwiperOpen(false);

  // Example image URLs
  const imageUrls = [
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
  ];

  return (
    <>
      <Button onPress={handleOpenSwiper}>Open Swiper Modal</Button>
      <ModalSwiper
        open={swiperOpen}
        urls={imageUrls}
        initialSlideIndex={0}
        close={handleCloseSwiper}
      />
    </>
  );
};

export default App;
```