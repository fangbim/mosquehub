import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Tambahkan constraint 'T extends JSX.IntrinsicAttributes'
export function WithAuth<T extends JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<T>) {
  function AuthComponent(props: T) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.replace('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  }

  return AuthComponent;
}
