# NextUI component usages

### Text

```tsx
<Text variant="heading" className="text-center">
  Welcome to the App!
</Text>
```

## Sidebar

``tsx
<Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} className="custom-sidebar-styles">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</Sidebar>
```

## Hero

```tsx
<Hero
  title="Welcome to Our Platform"
  subtitle="Get started with your journey today"
  backgroundImage="/images/hero-bg.jpg"
  className="custom-hero-styles"
/>
```

## Topbar

```tsx
import React from 'react';
import { Topbar } from './Topbar';
import { Avatar, Button } from '@nextui-org/react';
import { Switch } from '@nextui-org/react';
import Link from 'next/link';

const MyTopbar: React.FC = () => {
  return (
    <Topbar
      leftContent={
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        </Link>
      }
      centerContent={
        <h1 className="text-2xl font-semibold">My Application</h1>
      }
      rightContent={
        <div className="flex items-center gap-4">
          <Switch className="text-white" checkedIcon={null} uncheckedIcon={null} />
          <Avatar
            text="JD"
            bordered
            size="md"
            color="primary"
          />
          <Button auto flat as={Link} href="/settings">
            Settings
          </Button>
        </div>
      }
    />
  );
};

export default MyTopbar;
```