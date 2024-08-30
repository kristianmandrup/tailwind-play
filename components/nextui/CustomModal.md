# Custom Modal

Usage with forms

```tsx
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import { TextField, Button } from '@nextui-org/react';

const ExamplePage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '' });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Form submitted:', formData);
    handleCloseModal();
  };

  return (
    <>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Submit Your Information"
        action={{
          label: 'Submit',
          onSubmit: handleSubmit,
        }}
      >
        <form>
          <TextField
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {/* Other form fields can be added here */}
        </form>
      </ModalComponent>
    </>
  );
};

export default ExamplePage;
```
